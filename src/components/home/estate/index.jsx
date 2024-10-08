import React, { useEffect, useState } from 'react'
import MainContainer from '../../common/mainContainer'

const Estate = () => {
    const [products, setProducts] = useState([]);

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/son'); 
        const data = await response.json();
        const estateProducts = data.filter(item => item.categories === 'Daşinmaz əmlak'); // Sadece "Elektronika" kategorisindeki ürünleri filtrele
        setProducts(estateProducts); 
      } catch (error) {
        console.error('Ürünler yüklenirken hata oluştu:', error);
      }
    };

    fetchProducts(); 
  }, []);
  return (
    <MainContainer>
        <div className='px-[25px] bg-[#f1f3f7]'>
        <div className='py-[20px] flex justify-between'>
          <p className='text-[#000000] text-[26px] font-bold'>Daşinmaz əmlak</p>
        </div>
        <div className='grid grid-cols-4 gap-4'>
          {products.length > 0 ? (
            products.map((item) => (
              <div key={item.id} className='w-[220px] h-[291px] border rounded-[10px]'>
                <img src={item.image} alt={item.title} className='h-[218px] object-cover' />
                <div className='py-[10px] px-[10px]'>
                  <p className='text-[18px] font-bold text-[#000000]'>{item.price} Azn</p>
                  <p className='truncate text-[16px] font-normal text-[#212c3a]'>{item.title}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Elektronika kategorisinde ürün bulunmamaktadır.</p>
          )}
        </div>
      </div>
    </MainContainer>
  )
}

export default Estate