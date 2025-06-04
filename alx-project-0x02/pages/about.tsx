// pages/about.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button'; // Import the new Button component

const About: React.FC = () => {
  const handleButtonClick = (buttonName: string) => {
    console.log(`${buttonName} button clicked!`);
    // You can add more specific logic here later
    alert(`${buttonName} button clicked! Check console for log.`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow p-8 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-green-600 mb-10">About Us Page</h1>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          {/* Small, rounded-sm button */}
          <Button
            size="small"
            shape="rounded-sm"
            onClick={() => handleButtonClick('Small Square')}
          >
            Small Square
          </Button>

          {/* Medium, rounded-md button (default size/shape) */}
          <Button
            onClick={() => handleButtonClick('Medium Rounded')}
          >
            Medium Rounded
          </Button>

          {/* Large, rounded-full button */}
          <Button
            size="large"
            shape="rounded-full"
            onClick={() => handleButtonClick('Large Circle')}
          >
            Large Circle
          </Button>

          {/* Another example with custom className */}
          <Button
            size="medium"
            shape="rounded-md"
            onClick={() => handleButtonClick('Custom Green')}
            className="bg-green-500 hover:bg-green-600"
          >
            Custom Green
          </Button>
        </div>
      </main>
    </div>
  );
};

export default About;