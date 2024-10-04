import React from 'react'
import MainContainer from '../../common/mainContainer'

const Category = () => {
  return (
    <MainContainer>
        <div className='py-[20px] px-[25px] bg-[#f1f3f7] flex justify-between font-poppins'>
            <div className='bg-[#ffffff] py-[10px] px-[10px] rounded-[20px]'>
                <img src="/src/assets/images/electronic.png" alt="electronic" className='h-[90px] w-[90px]' />
                <p className='text-[14px] font-normal text-center'>Elektronika</p>
            </div>
            <div className='bg-[#ffffff] py-[10px] px-[10px] rounded-[20px]'>
                <img src="/src/assets/images/emlak.png" alt="emlak" className='h-[90px] w-[90px]' />
                <p className='text-[14px] font-normal text-center'>Daşinmaz əmlak</p>
            </div>
            <div className='bg-[#ffffff] py-[10px] px-[10px] rounded-[20px]'>
                <img src="/src/assets/images/job.png" alt="job" className='h-[90px] w-[90px]' />
                <p className='text-[14px] font-normal text-center'>İş elanlari</p>
            </div>
            <div className='bg-[#ffffff] py-[10px] px-[10px] rounded-[20px]'>
                <img src="/src/assets/images/animals.png" alt="animals" className='h-[90px] w-[90px]' />
                <p className='text-[14px] font-normal text-center'>Heyvanlar</p>
            </div>
        </div>
    </MainContainer>
  )
}

export default Category
