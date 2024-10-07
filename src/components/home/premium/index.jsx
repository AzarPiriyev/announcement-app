import React, { useEffect, useState } from 'react'
import MainContainer from '../../common/mainContainer'
import { getPremium } from '../../../../api/service'

const Premium = () => {
    const [data, setData] = useState([]);

  const fetchData = async () => {
    const premium = await getPremium();
    setData(premium)
  }

  useEffect(() => {
    fetchData()
  }, []) 
  
  return (
    <MainContainer>
        <div className='px-[25px] bg-[#f1f3f7] '>
            <div className='py-[20px] flex justify-between'>
                <p className='text-[#8d94ad] text-[16px] font-normal'>PREMİUM ELANLAR</p>
                <p className='text-[#4c88f9] text-[16px] font-normal'>Hamisini göstər</p>
            </div>
            <div className='grid grid-cols-4 gap-y-5 '>
            {data.map((item) => (
                <div key={item.id} className='w-[220px] border rounded-[10px]'>
                    <img src={item.image} alt={item.title} />
                    <div className='py-[10px] px-[10px] '>
                        <p className='text-[18px] font-bold text-[#000000]'>{item.price} Azn</p>
                        <p className='truncate text-[16px] font-normal text-[#212c3a]'>{item.title}</p>
                        <p></p>
                    </div>
                </div>
                ))}
            </div>           
        </div>
    </MainContainer>
  )
}

export default Premium
