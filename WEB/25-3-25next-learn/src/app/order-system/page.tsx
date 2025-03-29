'use client';

import { useState } from 'react';
import MenuList from './components/MenuList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

export default function OrderSystem() {
  const [cart, setCart] = useState<{
    items: { name: string; price: number; quantity: number }[];
    total: number;
  }>({
    items: [],
    total: 0,
  });

  const addToCart = (item: { name: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.items.find((i) => i.name === item.name);
      
      if (existingItem) {
        // Item already exists, increase quantity
        const updatedItems = prevCart.items.map((i) => 
          i.name === item.name 
            ? { ...i, quantity: i.quantity + 1 } 
            : i
        );
        
        return {
          items: updatedItems,
          total: prevCart.total + item.price,
        };
      } else {
        // Add new item
        return {
          items: [...prevCart.items, { ...item, quantity: 1 }],
          total: prevCart.total + item.price,
        };
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-center mb-8">點餐系統</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white rounded-lg shadow-md p-4">
            <MenuList onAddToCart={addToCart} />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <Cart cart={cart} setCart={setCart} />
          </div>
        </div>
      </div>
    </div>
  );
} 