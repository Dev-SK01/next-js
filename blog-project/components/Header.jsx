import Link from 'next/link';

const Header = () => {
  return (
    <header className="  bg-neutral-900 shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl ">Blog</h1>
        </Link>
        <nav className="space-x-4">
          <Link href="/" className="text-blue-500 bg-black px-2 py-2 rounded text-2xl">
            Home
          </Link>
          <Link href="/about" className="text-blue-500  bg-black px-2 py-2 rounded text-2xl">
            About
          </Link>
          <Link href="/contact" className="text-blue-500  bg-black px-2 py-2 rounded text-2xl">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
