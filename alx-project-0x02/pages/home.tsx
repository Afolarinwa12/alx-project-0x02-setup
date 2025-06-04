import React, { useState } from 'react'; // Import useState
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal'; // Import the new PostModal component
import { NewPostData } from '@/interfaces'; // Import the NewPostData interface

const Home: React.FC = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to store newly added posts
  const [newlyAddedPosts, setNewlyAddedPosts] = useState<NewPostData[]>([]);

  // Function to handle opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle new post submission from the modal
  const handleNewPostSubmit = (data: NewPostData) => {
    // Add the new post data to the beginning of the array
    setNewlyAddedPosts((prevPosts) => [data, ...prevPosts]);
    console.log('New Post Added:', data); // Log the new post data
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">Welcome to the Home Page!</h1>

        {/* Button to open the modal */}
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300 mb-10"
        >
          Add New Content
        </button>

        {/* Section for newly added content */}
        {newlyAddedPosts.length > 0 && (
          <section className="w-full max-w-4xl mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center border-b pb-4">
              Your Added Content
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newlyAddedPosts.map((post, index) => (
                <Card
                  key={`new-post-${index}`} // Use a unique key for dynamically added items
                  title={post.title}
                  content={post.content}
                />
              ))}
            </div>
          </section>
        )}

        {/* Existing Card components */}
        <section className="w-full max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center border-b pb-4">
            Pre-defined Content
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Our Mission"
              content="To provide high-quality, reusable components for modern web applications, fostering efficient development and maintainable codebases."
            />
            <Card
              title="Our Vision"
              content="To empower developers with intuitive tools and robust solutions, enabling them to build scalable and performant user interfaces with ease."
            />
            <Card
              title="Next.js Power"
              content="Leveraging Next.js for server-side rendering, API routes, and optimized performance to deliver exceptional user experiences."
            />
          </div>
        </section>

        {/* The PostModal component */}
        <PostModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleNewPostSubmit}
        />
      </main>
    </div>
  );
};

export default Home;
