import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await axios.post('http://localhost:3000/users', { name, email, password });
            alert('Account created successfully');
            navigate('/login'); 
        } catch (error) {
            console.error('Error creating account:', error);
            alert('There was an error creating your account');
        }
    };

    return (
        <div className='flex justify-center my-[50px]'>
            <form onSubmit={handleSubmit} className='flex flex-col border-2 pt-[62px] px-[41px] pb-[37px] rounded-[26px]'>
                <h1 className='text-[35px] font-semibold'>Sign up</h1>
                <p className='text-[25px] font-normal mb-[45px]'>to get started</p>
                <input
                    type="text"
                    placeholder='Username'
                    className='border-2 py-[22px] pl-[25px] pr-[130px] rounded-[10px] mb-[22px]'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                <input
                    type="password"
                    placeholder='Confirm Password'
                    className='py-[22px] pl-[25px] pr-[259px] rounded-[10px] border-2 mb-[31px]'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className='flex gap-[15px] mb-[29px]'>
                    <input type="checkbox" className='h-[21px] w-[21px]' />
                    <p className='text-[15px] font-normal text-[#333333]'>Agree to Our terms and Conditions</p>
                </div>
                <button className='border-2 py-[23px] px-[94px] text-[15px] font-normal text-white bg-[#007878] rounded-[10px] mb-[44px]'>Continue</button>
                <Link to={'/login'}>
                    <p className='text-[15px] font-normal text-[#333333] cursor-pointer text-center'>Already registered? <span className='font-medium'>Login</span></p>
                </Link>
            </form>
        </div>
    );
};

export default Signup;

