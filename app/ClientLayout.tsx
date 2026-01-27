'use client';

import { useState } from 'react';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} />

      <div className="flex flex-col flex-1">
        <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
