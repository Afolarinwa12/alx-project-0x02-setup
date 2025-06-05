export interface CardProps {
    title: string;
    content: string;
}

export interface NewPostData {
  title: string;
  content: string;
}

export interface ButtonProps {
  children: React.ReactNode; // The content inside the button (e.g., text, icon)
  size?: 'small' | 'medium' | 'large'; // Optional: defines button size
    shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'; // Optional: defines button shape
     onClick?: () => void; // Optional: click handler
  className?: string; // Optional: for additional custom Tailwind classes
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string; // The 'content' part in your instructions is typically 'body' from JSONPlaceholder
}
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}