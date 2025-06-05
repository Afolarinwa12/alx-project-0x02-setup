import React from 'react';
import UserCard from '@/components/common/UserCard'; // Import the UserCard component
import Header from '@/components/layout/Header'; // Assuming you have a Header component
import { UserProps } from '@/interfaces'; // Import the UserProps interface

// Define the type for the props that the Users component will receive
interface UsersPageProps {
  users: UserProps[]; // The 'users' prop will be an array of UserProps
}
const Users: React.FC<UsersPageProps> = ({ users }) => {
  console.log(users); // For debugging: check the fetched data in console

  return(
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header /> {/* Your header component */}
      <main className="p-4 md:p-8 flex-grow">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Our Users</h1>
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-full shadow-md transition-colors duration-300">
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users && users.map((user: UserProps) => (
            <UserCard key={user.id} {...user} /> // Pass all user props using spread operator, key is crucial
          ))}
        </div>
      </main>
    </div>
  );
 };

  
// getStaticProps to fetch data at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json(); // Fetching users data

   return {
    props: {
      users, // Passing the fetched 'users' data as props
    },
  };
};

export default Users;
