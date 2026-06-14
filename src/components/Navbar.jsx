import { FaInstagram } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

const { socials } = portfolioData;

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="text-white text-xl font-bold">
        Spokyy
    </h1>

    <div className="flex items-center gap-8">

      {portfolioData.navigation.map((item) => (
          <a className="hidden md:flex text-white text-sm hover:text-yellow-400 transition"
            key={item.title}
            href={item.href}
          >
            {item.title}
          </a>
        ))}



      <a
        href={socials.instagram}
        target="_blank"
        rel="noreferrer"
        className="text-white text-2xl hover:text-pink-500 transition"
      >
        <FaInstagram />
      </a>

    </div>

  </div>
</nav>
  );
}

export default Navbar;