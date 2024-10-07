import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainContainer from '../common/mainContainer';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { getSonById } from '../../../api/service';
import { useStore } from '../../store';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { customFav, setFields } = useStore();

    const fetchProduct = async () => {
        const productData = await getSonById(id);
        setProduct(productData);
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const handleFavorite = () => {
        const isFavorited = customFav.some(item => item.id === product.id);
        
        if (isFavorited) {
            // Ürün zaten favorilerdeyse sil
            const updatedFavorites = customFav.filter(item => item.id !== product.id);
            setFields({ customFav: updatedFavorites });
        } else {
            // Ürün favorilere ekle
            setFields({ customFav: [...customFav, product] });
        }
    };

    if (!product) return <div>Loading...</div>;

    const isFavorited = customFav.some(item => item.id === product.id);

    return (
        <MainContainer>
            <div className='mb-[100px] font-poppins'>
                <div className='flex justify-between mb-[50px]'>
                    <div>
                        <h1 className='text-[22px] font-semibold py-[15px]'>{product.title}</h1>
                        <img src={product.image} alt={product.title} className='w-[630px] h-[480px] border-2' />
                    </div>
                    <div className='py-[15px]'>
                        {isFavorited ? (
                            <FaHeart className='text-red-500 h-[25px] w-[25px] mb-[15px]' onClick={handleFavorite} />
                        ) : (
                            <FaRegHeart className='text-[#000000] h-[25px] w-[25px] mb-[15px]' onClick={handleFavorite} />
                        )}
                        <p className='text-[18px] font-normal'>{product.categories}</p>
                        <p className='text-[32px] font-semibold py-[15px]'>{product.price} AZN</p>
                        <p className='text-[18px] font-normal mb-[15px]'>{product.name}</p>
                        <p className='text-[18px] font-normal py-[15px] bg-[#3db460] text-white text-center rounded-[10px]'>{product.number}</p>
                    </div>
                </div>
                <div>
                    <p className='text-[18px] font-normal'>{product.description}</p>
                </div>
            </div>
        </MainContainer>
    );
};

export default ProductDetail;
