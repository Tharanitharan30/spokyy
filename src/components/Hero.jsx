import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";



function Hero() {
    const { hero } = portfolioData;
  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={hero.heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
        <motion.div
            className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1.5,
                delay: 5,
            }}
        >
            
            <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold"
            >
                {hero.name}
            </motion.h1>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-xl md:text-2xl"
            >
            Video Editor • Reel Creator
            </motion.p>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-yellow-500"
            >
            {hero.instagramHandle}
            </motion.p>

        

      </motion.div>
    </section>
  );
}

export default Hero;