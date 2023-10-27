import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";
import SectionTitle from "../components/SectionTitle";



const Project = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20" id="projects">
      <SectionTitle text="projects" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Project;
