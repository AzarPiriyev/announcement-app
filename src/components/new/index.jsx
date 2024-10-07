import React, { useState } from 'react';
import MainContainer from '../common/mainContainer';
import { useNavigate } from 'react-router-dom';

const New = () => {
  const navigate = useNavigate(); // useNavigate'i başlat
  const [formData, setFormData] = useState({
    categories: '',
    title: '',
    description: '',
    price: '',
    image: '',
    name: '',
    number: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Ürünü JSON Server'a ekleme
    await fetch('http://localhost:3000/son', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...formData, id: Date.now().toString() }), // ID'yi otomatik oluştur
    });

    // Ürün eklendikten sonra Son sayfasına yönlendir
    navigate('/son');
  };

  return (
    <MainContainer>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-6 py-[50px]'>
        <div className='flex gap-[100px]'>
          <p>Categories</p>
          <select name="" onChange={handleChange}>
            <option value="">Elektronika</option>
            <option value="">Daşinmaz əmlak</option>
            <option value="">İş elanlari</option>
            <option value="">Heyvanlar</option>
          </select>
        </div>

        <div className='flex gap-[100px]'>
          <p>Title</p>
          <input
            type="text"
            name="title"
            className='border-2 border-black'
            onChange={handleChange}
          />
        </div>

        <div className='flex gap-[100px]'>
          <p>Description</p>
          <textarea
            name="description"
            className='border-2 border-black'
            onChange={handleChange}
          />
        </div>

        <div className='flex gap-[100px]'>
          <p>Price</p>
          <input
            type="text"
            name="price"
            className='border-2 border-black'
            onChange={handleChange}
          />
        </div>

        <div className='flex gap-[100px]'>
          <p>Image</p>
          <input
            type="text"
            name="image"
            className='border-2 border-black'
            onChange={handleChange}
          />
        </div>

        <div className='flex gap-[100px]'>
          <p>Name</p>
          <input
            type="text"
            name="name"
            className='border-2 border-black'
            onChange={handleChange}
          />
        </div>

        <div className='flex gap-[100px]'>
          <p>Number</p>
          <input
            type="text"
            name="number"
            className='border-2 border-black'
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit" className='border py-[5px] px-[10px] rounded-[10px] bg-[#ff4f08] text-white'>
            Add
          </button>
        </div>
      </form>
    </MainContainer>
  );
};

export default New;
