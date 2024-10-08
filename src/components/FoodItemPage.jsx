// src/FoodItemPage.js
import React from 'react';
import Navbar from './Navbar'

const FoodItemPage = () => {
  const foodItems = [
    { name: 'Pizza', description: 'Delicious cheese pizza', price: '$9.99' },
    { name: 'Burger', description: 'Juicy beef burger with lettuce and tomato', price: '$7.99' },
    { name: 'Pasta', description: 'Creamy Alfredo pasta', price: '$8.99' },
    { name: 'Salad', description: 'Fresh garden salad', price: '$5.99' },
  ];

  return (
    <>
        <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Food Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {foodItems.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="text-lg font-bold">{item.price}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Order Now</button>
          </div>
        ))}
      </div>
    </div>
    </>

  );
};

export default FoodItemPage;
