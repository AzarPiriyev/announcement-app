import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useStore } from '../../store';

const Login = () => {
  const { setFields } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Formun varsayılan davranışını önleyin
    setError(''); // Hata mesajını sıfırla

    try {
      const response = await axios.get('http://localhost:3000/users');
      const users = response.data;

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        alert('Login successful!');
        localStorage.setItem("isLogin", "true"); // Giriş bilgilerini kaydet
        localStorage.setItem('email',email);
        setFields({ isLogin: true }); // Giriş durumunu güncelle
        navigate('/'); // Ana sayfaya yönlendir
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Error logging in');
      console.error('Error logging in', error);
    }
  };

  return (
    <div className='flex justify-center my-[50px]'>
      <div className='flex flex-col border-2 pt-[62px] px-[41px] pb-[37px] rounded-[26px]'>
        <h1 className='text-[35px] font-semibold'>Login</h1>
        <p className='text-[25px] font-normal mb-[45px]'>to get started</p>
        <form onSubmit={handleLogin}>
          <div className='flex flex-col'>
            <input
              type="email"
              placeholder='itsnaeemanjum@gmail.com'
              className='border-2 py-[22px] pl-[25px] pr-[130px] rounded-[10px] mb-[22px]'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder='Password'
              className='py-[22px] pl-[25px] pr-[259px] rounded-[10px] border-2 mb-[31px]'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className='text-red-500'>{error}</p>}
          <p className='text-[15px] font-normal text-[#333333] cursor-pointer mb-[45px]'>Forgot Password?</p>
          <button className='border-2 py-[23px] px-[94px] text-[15px] font-normal text-white bg-[#007878] rounded-[10px] w-full mb-[44px]' type="submit">Continue</button>
        </form>
        <Link to={'/signup'}>
          <p className='text-[15px] font-normal text-[#333333] cursor-pointer text-center'>New User? <span className='font-medium'>Register</span></p>
        </Link>
      </div>
    </div>
  );
};

export default Login;

