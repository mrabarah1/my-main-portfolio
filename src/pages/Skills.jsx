import SectionTitle from "../components/SectionTitle";
import { skills } from "../data";
import SkillsCard from "../components/SkillsCard";


const Skills = () => {
  return (
    <section className="mx-auto max-w-7xl px-8  py-20" id="skills">
      <SectionTitle text="tech stack" />
      {/* parent for every skill */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 py-16">
        {skills.map((skill) => (
          <SkillsCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
