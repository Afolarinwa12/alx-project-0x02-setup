// pages/posts/index.tsx
import React from 'react';
import PostCard from "@/components/common/PostCard"; // Import PostCard
import Header from "@/components/layout/Header"; // Import Header for consistent layout
import { PostProps } from "@/interfaces"; // Import PostProps

// Define props type for the Posts component
interface PostsPageProps{
    posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({posts}) => {
 console.log(posts); // For debugging: check the fetched data in console
 return (
       <div className="flex flex-col h-screen">
      <Header /> {/* Using the Header component */}
      <main className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition-colors duration-200">
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Ensure posts array exists and map over it */}
                 {posts && posts.map((post: PostProps)=> (
                    <PostCard
                     key={post.id} // Essential for list rendering in React
              title={post.title}
              body={post.body} // Using 'body' from JSONPlaceholder data
              userId={post.userId}
              id={post.id}
            />
                 )
                 )}
            </div>
        </main>
    </div>
 )
};

// getStaticProps to fetch data from JSONPlaceholder at build time
export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json();//Fetching posts data

    return {
    props: {
      posts, // Passing posts data to the component as a prop
    },
  };

}

export default Posts;