'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext'; 

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth(); 
  const router = useRouter(); 

  const handleListClick = () => {
    router.push('/list'); 
  };

  const handleSettingClick = () => {
    if (isAuthenticated) {
      router.push('/settings'); 
    } else {
      alert('You do not have access to this page');
    }
  };

  return (
    <nav className='bg-gray-800 text-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 py-5 flex justify-between items-center'>
        <div className='text-lg font-semibold'>
          <button
            onClick={handleListClick}
            className='mr-4 text-white hover:text-gray-300'
          >
            List
          </button>
          {isAuthenticated && (
            <button
              onClick={handleSettingClick}
              className='text-white hover:text-gray-300'
            >
              Settings
            </button>
          )}
        </div>
        <div className='text-sm'>
          {isAuthenticated ? 'Logged In' : 'Not Logged In'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
