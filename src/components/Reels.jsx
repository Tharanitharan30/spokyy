import { portfolioData } from "../data/portfolioData";


function Reels() {
  return (
    <section
      id="reels"
      className="bg-black py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          Featured Reels
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {portfolioData.reels.map((reel) => (
            <div
              key={reel.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden"
            >
              <video
                controls
                playsInline
                className="w-full h-[650px] object-cover"
                poster={reel.poster}
              >
                <source
                  src={reel.video}
                  type="video/mp4"
                />
              </video>

              <div className="p-4">
                <h3 className="text-xl font-bold">
                  {reel.title}
                </h3>

                <p className="text-gray-400">
                  {reel.category}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Reels;