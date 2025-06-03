// pages/about.tsx
import React from 'react';
import Header from '@/components/layout/Header'; // Assuming you have a Header component

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow p-8 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-green-600">About Us Page</h1>
      </main>
    </div>
  );
};

export default About;
