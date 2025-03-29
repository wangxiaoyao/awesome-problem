'use client';

import React, { useState } from 'react';

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

type CartProps = {
  cart: {
    items: CartItem[];
    total: number;
  };
  setCart: React.Dispatch<
    React.SetStateAction<{
      items: CartItem[];
      total: number;
    }>
  >;
};

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handlePayment = () => {
    if (cart.items.length === 0) return;
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
      
      // Reset cart after successful payment
      setTimeout(() => {
        setCart({ items: [], total: 0 });
        setIsComplete(false);
      }, 3000);
    }, 2000);
  };

  const removeItem = (index: number) => {
    const item = cart.items[index];
    setCart((prevCart) => ({
      items: prevCart.items.filter((_, i) => i !== index),
      total: prevCart.total - (item.price * item.quantity),
    }));
  };

  const updateQuantity = (index: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCart((prevCart) => {
      const item = prevCart.items[index];
      const quantityDiff = newQuantity - item.quantity;
      const priceDiff = item.price * quantityDiff;
      
      const updatedItems = [...prevCart.items];
      updatedItems[index] = { ...item, quantity: newQuantity };
      
      return {
        items: updatedItems,
        total: prevCart.total + priceDiff,
      };
    });
  };

  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-semibold mb-4">購物車</h2>
      
      <div className="flex-grow overflow-y-auto mb-4">
        {cart.items.length === 0 ? (
          <p className="text-gray-500 text-center py-8">購物車是空的</p>
        ) : (
          <ul className="space-y-2">
            {cart.items.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">${item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button 
                    className="bg-gray-200 text-gray-700 w-6 h-6 rounded"
                    onClick={() => updateQuantity(index, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    className="bg-gray-200 text-gray-700 w-6 h-6 rounded"
                    onClick={() => updateQuantity(index, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button 
                    className="ml-2 text-red-500 text-sm"
                    onClick={() => removeItem(index)}
                  >
                    刪除
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      <div className="mt-auto">
        <div className="flex justify-between items-center border-t pt-4 mb-4">
          <p className="font-bold">總計:</p>
          <p className="text-xl font-bold">${cart.total}</p>
        </div>
        
        <button
          className={`w-full py-3 px-4 rounded font-bold text-white ${
            isProcessing || cart.items.length === 0 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
          onClick={handlePayment}
          disabled={isProcessing || cart.items.length === 0}
        >
          {isProcessing 
            ? '處理中...' 
            : isComplete 
              ? '支付成功！' 
              : '立即付款'}
        </button>
      </div>
    </div>
  );
};

export default Cart; 