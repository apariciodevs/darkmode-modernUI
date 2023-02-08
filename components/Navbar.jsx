import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import {BsSunFill, BsFillMoonFill} from "react-icons/bs";


export default function Navbar() {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
  

    return(
         <nav className="flex items-center justify-between h-16 px-12">

          <h1 className="text-xl ">WalleConnect</h1>
          {currentTheme === "dark" ? (
            <button
              className="flex flex-col items-center px-8 py-2 border-2 border-pink-300 bg-black-700 hover:bg-black rounded-xl "
              onClick={() => setTheme("light")}
            >
              <BsSunFill />
            </button>
          ) : (
            <button
              className="flex flex-col items-center px-8 py-2 bg-gray-100 border-2 border-pink-300 rounded-xl hover:bg-gray-300"
              onClick={() => setTheme("dark")}
            >
              <BsFillMoonFill />
            </button>
          )}
        </nav>
    )
}