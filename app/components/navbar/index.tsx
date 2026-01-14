'use client';
type Props = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: Props) => {
  return (
    <header className="h-14 bg-white border-b flex items-center px-4">
      <button onClick={toggleSidebar} className="mr-4 p-2 rounded hover:bg-gray-100">
        ☰
      </button>

      <h1 className="font-semibold">Global Navbar</h1>
    </header>
  );
};

export default Navbar;
