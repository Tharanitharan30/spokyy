import { FaInstagram } from "react-icons/fa";
import { portfolioData } from "../data/portfolioData";

function Socials() {
  const { socials } = portfolioData;

  return (
    <section className="bg-black py-16 text-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Connect With Me
        </h2>

        <div className="flex justify-center gap-8 text-4xl">

          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

        </div>

      </div>
    </section>
  );
}

export default Socials;