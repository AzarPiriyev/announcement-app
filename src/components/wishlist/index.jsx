import React from 'react';
import MainContainer from '../common/mainContainer';
import { useStore } from '../../store'; // Zustand store'unu içe aktar

const Wishlist = () => {
    const { customFav } = useStore(); // Favori ürünleri al

    return (
        <MainContainer>
            <div className='px-[25px] bg-[#f1f3f7]'>
                <div className='py-[20px] flex justify-between'>
                    <p className='text-[#000000] text-[26px] font-bold'>Seçilmişlər</p>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {customFav.map((item) => (
                        <div key={item.id} className='w-[220px] h-[291px] border rounded-[10px]'>
                            <img src={item.image} alt={item.title} className='h-[218px]' />
                            <div className='py-[10px] px-[10px]'>
                                <p className='text-[18px] font-bold text-[#000000]'>{item.price} Azn</p>
                                <p className='truncate text-[16px] font-normal text-[#212c3a]'>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainContainer>
    );
};

export default Wishlist;
