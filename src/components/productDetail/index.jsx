import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import MainContainer from '../common/mainContainer';
import { FaRegHeart } from "react-icons/fa";
import { getSonById } from '../../../api/service'; // Import your getSonById function

const ProductDetail = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [product, setProduct] = useState(null);

    const fetchProduct = async () => {
        const productData = await getSonById(id); // Fetch product by ID
        setProduct(productData);
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (!product) return <div>Loading...</div>; // Handle loading state


    

    return (
        <MainContainer>
            <div className='mb-[100px] font-poppins'>
                <div className='flex justify-between mb-[50px]'>
                    <div>
                        <h1 className='text-[22px] font-semibold py-[15px]'>{product.title}</h1>
                        <img src={product.image} alt={product.title} className='w-[630px] h-[480px] border-2' />
                    </div>
                    <div className='py-[15px]'>
                        <FaRegHeart className='text-[#000000] h-[25px] w-[25px] mb-[15px]' />
                        <p className='text-[18px] font-normal'>Category</p>
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
