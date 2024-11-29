'use client';

import React from 'react';
import { useAuth } from '../../context/AuthContext'; 

const SettingsPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-red-100 text-red-500 p-8 rounded-lg shadow-xl text-center'>
          <h2 className='text-2xl font-semibold'>Access Denied</h2>
          <p className='mt-4'>
            You do not have permission to access this page. Please log in first.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='p-6'>
      <h2 className='text-3xl font-semibold text-gray-800 mb-6'>
        Settings Page
      </h2>
      <p className='text-lg text-gray-700'>
        This page is for authenticated users only.
      </p>
    </div>
  );
};

export default SettingsPage;
