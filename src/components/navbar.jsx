const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="bg-purple-50 container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Anmol's E-portfolio</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            className="px-3 hover:text-indigo-400"
            href="https://github.com/noob-anmol/e-portfolio"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
          <a
            className="px-3 hover:text-indigo-400"
            href="https://www.twitter.com/anmol_gh"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <a
            className="px-3 hover:text-indigo-400 "
            href="https://www.linkedin.com/in/anmol-ghai/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="px-3 hover:text-indigo-400 " href="/about">
            My team
          </a>
        </nav>
        <a className="inline-flex items-center bg-gray-300 border-0 py-1 px-3 focus:outline-none hover:bg-red-100 hover:text-indigo-600 rounded text-base mt-4 md:mt-0" href="/team">
          Team Project
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
