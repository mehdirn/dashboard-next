'use client';

import React, { ReactNode } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AuthProvider } from '../context/AuthContext'; 
import '../styles/globals.css';

type LayoutProps = {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body className='bg-gray-100'>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            {' '}
            <div className='flex'>
              <main className='flex-1 p-4'>{children}</main>
            </div>
          </QueryClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default Layout;


