import Link from 'next/link'; 

const Header: React.FC = () => {
  return (
    <header className='w-full p-2 h-12 bg-neutral-200 border-b-2 border-slate-300 font-semibold text-xl'>
      <nav className='flex flex-row justify-between items-center w-full hover:text-neutral-700'>
        <Link href="/home">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href='/users'>Users</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;