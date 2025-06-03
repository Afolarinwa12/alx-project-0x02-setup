import { NewPostData } from '@/interfaces';
import React from 'react';

//define props for the PostModal components
interface PostModalProps{
    isOpen: boolean, // controls whether the modal is visible
    onClose: ()=> void; //function to call when the modal needs to close
    onSubmit: (data: NewPostData)=> void;//function to call when the form is submited
}



const PostModal: React.FC<PostModalProps>
 = ({ isOpen, onClose , onSubmit})=>{
    return(
       
    )
        setContent(''); // Clear the content input
        onClose(); // Close the modal after submission
      };
    
};
export default PostModal;