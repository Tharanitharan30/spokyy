import { portfolioData } from "../data/portfolioData";

const skills = portfolioData.skills;

function Skills() {
    

  return (
    <section id="skills" className="bg-black py-24 px-6 text-white">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Skills
        </h2>

        

        {skills.map((skill, index) => (
          <div key={index} className="mb-8">

            <div className="flex justify-between mb-2">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="h-3 bg-zinc-800 rounded-full">

              <div
                className="h-3 bg-yellow-500 rounded-full"
                style={{ width: skill.level }}
              ></div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;