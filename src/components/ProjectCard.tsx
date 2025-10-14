import { motion } from 'framer-motion';

interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800 rounded-lg overflow-hidden shadow-lg"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-slate-700 text-cyan-400 text-sm px-2 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex justify-between">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;