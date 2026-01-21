'use client';
import Link from 'next/link';

// components/Sidebar.tsx
type Props = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: Props) => {
  return (
    <aside
      className={`bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? 'w-64' : 'w-16 -ml-16'
      }`}
    >
      <div className="px-4 pt-4 pb-5 font-bold shadow-md">PROJECT FIFTY</div>

      <nav className="p-2 space-y-2">
        <Link href="/refs" className="block p-2 rounded hover:bg-gray-700">
          Refs
        </Link>
        <Link href="/checkbox" className="block p-2 rounded hover:bg-gray-700">
          Checkbox
        </Link>
        <Link href="/contextapi" className="block p-2 rounded hover:bg-gray-700">
          Context API
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
