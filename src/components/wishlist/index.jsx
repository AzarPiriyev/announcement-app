import React from 'react'
import MainContainer from '../common/mainContainer'

const Wishlist = () => {
  return (
    <MainContainer>
        <div className='px-[25px] bg-[#f1f3f7] '>
            <div className='py-[20px] flex justify-between'>
                <p className='text-[#000000] text-[26px] font-bold'>Seçilmişlər</p>
            </div>
            <div className='grid grid-cols-4 '>
                <div className='w-[220px] border rounded-[10px]'>
                    <img src="/src/assets/images/iphone.jpg" alt="iphone" />
                    <div className='py-[10px] px-[10px] '>
                        <p className='text-[18px] font-bold text-[#000000]'>2899 Azn</p>
                        <p className='truncate text-[16px] font-normal text-[#212c3a]'>Apple iPhone 16 Pro Desert Titanium 128GB/8GB</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </MainContainer>
  )
}

export default Wishlist