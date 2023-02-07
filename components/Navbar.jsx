import Link from "next/link";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { BsMoonStars, BsSun , BsSunFill, BsFillMoonFill} from "react-icons/bs";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  {
    currentTheme === "dark" ? "Dark" : "Light";
  }

  return (
    <>
      <div>
        {" "}
        <nav className="flex items-center justify-between h-16 px-12">
          <h1 className="text-xl">Gamer UI</h1>
          {currentTheme === "dark" ? (
            <button
              className="bg-black-700 flex flex-col items-center hover:bg-black px-8 rounded-xl border-pink-300 border-2 py-2"
              onClick={() => setTheme("light")}
            >
              <BsSunFill />
            </button>
          ) : (
            <button
              className="bg-gray-100 px-8 rounded-xl flex flex-col items-center border-pink-300 border-2 py-2 hover:bg-gray-300"
              onClick={() => setTheme("dark")}
            >
              <BsFillMoonFill />
            </button>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
