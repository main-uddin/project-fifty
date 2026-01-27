'use client';

import { useThemeContext } from '../context';
import nightImage from '../../../public/assests/images/night.jpg';

type Props = {
  toggleSidebar: () => void;
};

const Navbar = ({ toggleSidebar }: Props) => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <header className="w-full h-15 bg-background shadow-md flex items-center px-4">
      <button onClick={toggleSidebar} className="mr-4 p-2 rounded hover:bg-muted-background">
        ☰
      </button>

      <h1 className="font-semibold text-muted-foreground">Global Navbar</h1>
      <button
        style={{
          backgroundImage: theme === 'light' ? `url(${nightImage})` : `url(${nightImage})`,
        }}
        onClick={toggleTheme}
        className="ml-auto px-3 border rounded-lg h-8 w-8 bg-cover bg-center flex items-center justify-center hover:bg-muted-background"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </header>
  );
};

export default Navbar;
