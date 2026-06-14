import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function Stats() {
const stats = portfolioData.stats;

  return (
    <section className="bg-zinc-950 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-zinc-900 p-8 rounded-2xl text-center"
            >
              <h3 className="text-yellow-500 text-4xl font-bold">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-2">
                {item.title}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;