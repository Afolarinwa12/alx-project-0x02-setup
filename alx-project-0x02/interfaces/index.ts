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