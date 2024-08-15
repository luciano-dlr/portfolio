import { ThemeToggleButton } from "./component/themeTogleButton";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-[#333] dark:shadow-md dark:shadow-zinc-800 dark:text-secondary-100 shadow-lg p-4 z-10 flex items-center">
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="absolute top-0 right-0  p-2">
        <ThemeToggleButton />
      </div>
    </nav>
  );
};
