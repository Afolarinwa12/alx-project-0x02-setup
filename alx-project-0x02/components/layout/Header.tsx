import Link from "next/link";

export default function Header( ) {
  return (
    <>
     <header>
        
        <nav>
          <Link href="/">My listing App</Link>
          <div className="text-red-500">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>
     </header>
    </>
  );
}