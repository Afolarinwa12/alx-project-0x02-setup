import React from 'react';
import { type CardProps } from '@/interfaces';// Import the CardProps interface

const Card: React.FC<CardProps> =({ title, content}) => {
    return(
        <div className='bg-white rounded-lg shadow-md p-6 m-4 max-w-sm 
        mx-auto hover:shadow-lg transition-shadow duration-300'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-3
            border-b pb-2'>
               {title}
            </h2>
             <p className='text-gray-600 leading-relaxed'>{content}</p>
        </div>
    );
}
export default Card;