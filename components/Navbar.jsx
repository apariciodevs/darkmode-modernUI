import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSunFill, BsFillMoonFill, BsFillMoonStarsFill } from "react-icons/bs";
import SignIn from "./SignIn";


export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <nav className="flex items-center justify-between h-16 px-12">
      <h1 className="text-xl font-semibold cursor-pointer">Silk Network</h1>
      {currentTheme === "dark" ? (
        <button
          className="flex flex-col items-center px-8 py-2 transition duration-300 border-2 shadow-md border-neutral-300 bg-black-700 hover:bg-neutral-800/80 hover:border-neutral-800 rounded-xl "
          onClick={() => setTheme("light")}
        >
          <BsSunFill />
        </button>
      ) : (
        <button
          className="flex flex-col items-center px-8 py-2 transition duration-300 bg-gray-100 border-2 shadow-md rounded-xl hover:bg-gray-300"
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonStarsFill />
        </button>
      )}
    </nav>
  );
}
