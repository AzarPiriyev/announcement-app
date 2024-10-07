import React from 'react'
import MainContainer from '../../common/mainContainer'
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <MainContainer>
        <div className='py-[5px] flex justify-between'>
            <div className='flex gap-[5px]'>
                <FaPhoneAlt className='text-[#8d94ad] mt-[5px]' />
                <p className='text-[15px] font-normal text-[#8d94ad]'>(012) 505-85-85</p>
            </div>
            <div className='flex gap-[20px]'>
                <Link to={'/wishlist'}><div className='flex gap-[5px]'>
                <FaHeart className='text-[#8d94ad]  h-[25px] w-[25px]'/>
                <p className='text-[15px] font-normal text-[#8d94ad]'>Seçilmişlər</p>
                </div></Link>
                <div className='flex gap-[5px]'>
                <MdAccountCircle className='text-[#8d94ad]  h-[25px] w-[25px]'/>
                <p className='text-[15px] font-normal text-[#8d94ad]'>Giriş</p>
                </div>
            </div>
        </div>
      </MainContainer>
      <div className='bg-[#ff4f08] py-[15px] '>
        <MainContainer>
        <div className='flex justify-between'>
        <Link to={'/'}><h1 className='text-white text-[30px] font-bold'>tap.az</h1></Link>
        
        <div>
            <input type="text" name="" id=""  className='py-[9px] px-[9px] border rounded-l-[8px] w-[400px]'/>
            <button className='bg-[#7ed321] py-[10px] px-[10px] rounded-r-[8px] text-white'>Tap</button>
        </div>
        <button className='bg-[#7ed321] py-[10px] px-[10px] rounded-[8px] text-white'>Yeni elan</button>
        </div>
        </MainContainer>
      </div>

    </div>
  )
}

export default Header
