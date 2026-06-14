import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const { about } = portfolioData;

function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <img
              src={about.image}
              alt="profile"
              className="rounded-3xl w-full max-w-md mx-auto"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-3xl font-bold mb-4">
                {about.heading}
            </h3>

            <p className="text-gray-300 leading-8">
                {about.description}
            </p>

            <p className="text-gray-300 leading-8 mt-6">
                {about.description2}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;