import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Landing Page here</h1>
      
      <div className="space-x-4">
        <NavLink to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </NavLink>
        
        <NavLink to="/signup">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Signup
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
