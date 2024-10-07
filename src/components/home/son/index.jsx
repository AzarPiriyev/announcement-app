import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useHistory yerine useNavigate
import MainContainer from '../../common/mainContainer';
import { getSon } from '../../../../api/service';

const Son = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate(); // Initialize navigate

    const fetchData = async () => {
        const son = await getSon();
        setData(son);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleProductClick = (id) => {
        navigate(`/detail/${id}`); // Navigate to ProductDetail with the ID
    };

    

    return (
        <MainContainer>
            <div className='px-[25px] bg-[#f1f3f7]'>
                <div className='py-[20px] flex justify-between'>
                    <p className='text-[#8d94ad] text-[16px] font-normal'>SON ELANLAR</p>
                    <p className='text-[#4c88f9] text-[16px] font-normal'>Hamisini göstər</p>
                </div>
                <div className='grid grid-cols-4 gap-y-5'>
                    {data.map((item) => (
                        <div 
                            key={item.id} 
                            className='w-[220px] border rounded-[10px] cursor-pointer' 
                            onClick={() => handleProductClick(item.id)} // Add click handler
                        >
                            <img src={item.image} alt={item.title} className='h-[218px]'/>
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

export default Son;
