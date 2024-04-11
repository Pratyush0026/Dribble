import React from 'react';
import { TbMessage2Check } from "react-icons/tb";

const Banner = () => {
  return (
    <div className='mt-20 max-w-screen-lg mx-auto'>
        <h1 className='text-black text-4xl sm:text-4xl font-extrabold text-center'>Please verify your email... </h1>
        <div className='text-black text-9xl sm:text-11xl font-extrabold flex items-center justify-center mt-3'>
            <TbMessage2Check className='text-pink-500 font-extrabold' />
        </div>
        <div className='font-bold text-center mt-4'>
            <p className='text-gray-400'>Please verify your email address. We've sent a confirmation email to:</p>
        </div>
        <div className='font-extrabold text-lg text-center mt-4'>
            account@refero.design
        </div>
        <div className='font-bold text-center mt-4'>
            <p className='text-gray-400 mt-4'>Click the confirmation link in that email to begin using Dribbble.</p>
            <p className='text-gray-400 mt-4'>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. <br />If you still don't see it, you can <span className='text-pink-500'>resend the confirmation email.</span> </p>
            <p className='text-gray-400 mt-4'>Wrong email address? <span className='text-pink-500'>Change it.</span></p>
        </div>
    </div>
  );
}

export default Banner;
