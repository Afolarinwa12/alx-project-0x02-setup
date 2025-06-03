// pages/about.tsx
import React from 'react';
import Header from '@/components/layout/Header'; // Assuming you have a Header component
import Card from '@/components/common/Card';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow p-8 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-green-600">Home Page</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-6 w-full max-w-4xl'>
          <Card
          title='Our Vision'
          content='to be an amazing designer'
          />
           <Card
          title='Our Vision'
          content='to be an amazing designer'
          />
        </div>
      </main>
    </div>
  );
};

export default Home;