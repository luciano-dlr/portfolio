
export const Navbar = () => {

  return (
    <nav className="fixed top-0 left-0 w-full bg-white bg-opa shadow-lg p-4 z-10">
      <ul className="flex justify-center space-x-4">
        <li>
          <a href="#home">
            Home
          </a>
        </li>
        <li>
          <a href="#about">
            About
          </a>
        </li>
        <li>
          <a href="#projects">
            History
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};
