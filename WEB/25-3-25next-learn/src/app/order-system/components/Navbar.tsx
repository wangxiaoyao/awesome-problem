'use client';

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 mb-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/order-system" className="text-2xl font-bold">
          餐廳點餐系統
        </Link>
        <div className="flex space-x-4">
          <Link 
            href="/" 
            className="px-4 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            回到首頁
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 