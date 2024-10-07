import React, { useEffect, useState } from 'react';
import MainContainer from '../common/mainContainer';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../store'; // isLogin durumunu kontrol etmek için

const New = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    categories: '',
    title: '',
    description: '',
    price: '',
    image: '',
    name: '',
    number: '',
    userEmail: '' // Kullanıcının e-posta adresini ekleyin
  });

  // Giriş yapmamış kullanıcıları login sayfasına yönlendirin
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLogin");
    const userEmail = localStorage.getItem('email'); // Kullanıcının e-posta adresini alın
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setFormData(prevState => ({ ...prevState, userEmail })); // FormData'ya e-posta bilgisini ekleyin
    }
  }, [navigate]);

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
      <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-6 py-10 max-w-xl mx-auto bg-white p-10 shadow-lg rounded-lg'>
        <h2 className='text-3xl font-bold text-center mb-6 text-[#ff4f08]'>Yeni elan</h2>
        
        <div className='flex flex-col gap-y-2'>
          <label className='text-lg font-semibold text-gray-600'>Categories</label>
          <select 
            name="categories" 
            value={formData.categories} 
            onChange={handleChange} 
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#ff4f08]'
          >
            <option value="">Select a category</option>
            <option value="Elektronika">Elektronika</option>
            <option value="Daşinmaz əmlak">Daşinmaz əmlak</option>
            <option value="İş elanlari">İş elanlari</option>
            <option value="Heyvanlar">Heyvanlar</option>
          </select>
        </div>

        <div className='flex flex-col gap-y-2'>
          <label className='text-lg font-semibold text-gray-600'>Title</label>
          <input
            type="text"
            name="title"
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#ff4f08]'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col gap-y-2'>
          <label className='text-lg font-semibold text-gray-600'>Description</label>
          <textarea
            name="description"
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#ff4f08]'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col gap-y-2'>
          <label className='text-lg font-semibold text-gray-600'>Price</label>
          <input
            type="text"
            name="price"
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#ff4f08]'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col gap-y-2'>
          <label className='text-lg font-semibold text-gray-600'>Image URL</label>
          <input
            type="text"
            name="image"
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#ff4f08]'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col gap-y-2'>
          <label className='text-lg font-semibold text-gray-600'>Name</label>
          <input
            type="text"
            name="name"
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#ff4f08]'
            onChange={handleChange}
          />
        </div>

        <div className='flex flex-col gap-y-2'>
          <label className='text-lg font-semibold text-gray-600'>Phone Number</label>
          <input
            type="text"
            name="number"
            className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-[#ff4f08]'
            onChange={handleChange}
          />
        </div>

        <div className='text-center'>
          <button 
            type="submit" 
            className='bg-[#ff4f08] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#ff6f30] transition duration-300'
          >
            Add
          </button>
        </div>
      </form>
    </MainContainer>
  );
};

export default New;
