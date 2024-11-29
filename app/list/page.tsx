'use client';

import React from 'react';
import { usePosts } from '../../utils/api';

const ListPage: React.FC = () => {
  const { data, error, isLoading } = usePosts();

  if (isLoading) return <div className='text-center p-6'>Loading...</div>;
  if (error instanceof Error)
    return (
      <div className='text-center p-6 text-red-500'>Error: {error.message}</div>
    );

  return (
    <div className='p-6'>
      <h2 className='text-3xl font-semibold text-gray-800 mb-8'>Posts List</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {data?.map((post: { id: number; title: string; body: string }) => (
          <div
            key={post.id}
            className='bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105'
          >
            <h3 className='font-semibold text-xl text-gray-800 mb-4'>
              {post.title}
            </h3>
            <p className='text-gray-600 text-sm'>{post.body}</p>
            <div className='mt-4'>
              <button className='px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300'>
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPage;
