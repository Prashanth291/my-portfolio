import { projects } from '../ProjectData'; // Import your data
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-white dark:bg-background-dark transition-colors duration-300">
      <h2 className="text-4xl font-bold text-center mb-8 text-slate-900 dark:text-white">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;