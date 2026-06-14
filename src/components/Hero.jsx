import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

function Hero() {
  const { hero } = portfolioData;

  return (
    <section
        id="home"
        className="relative w-full min-h-[100dvh] overflow-hidden"
      >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectFit: "cover" }}
      >
        <source src={hero.heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <motion.div
        className="relative z-20 min-h-[100dvh] flex flex-col items-center justify-center text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 4 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4 }}
          className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-white"
        >
          {hero.title}
        </motion.p>

        <motion.a
          href={portfolioData.socials.instagram}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="mt-6 text-yellow-400 text-lg hover:text-yellow-300 transition"
        >
          {hero.instagramHandle}
        </motion.a>
      </motion.div>

      
    </section>
  );
}

export default Hero;