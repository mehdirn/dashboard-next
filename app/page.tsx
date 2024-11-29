'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleGoToList = () => {
    router.push('/list');
  };

  return (
    <div className='min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex justify-center items-center'>
      <div className='bg-white p-12 rounded-xl shadow-xl max-w-md text-center'>
        <h1 className='text-4xl font-semibold text-gray-800 mb-6'>
          Welcome to the Dashboard
        </h1>
        <p className='text-lg text-gray-600 mb-8'>
          Manage your posts and settings with ease.
        </p>
        <button
          onClick={handleGoToList}
          className='bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300'
        >
          Go to List
        </button>
      </div>
    </div>
  );
};

export default HomePage;
