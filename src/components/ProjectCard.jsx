function ProjectCard({ project }) {
  return (
    <a target="_blank" href={project.link} rel="noopener noreferrer">
      <div className="bg-[#313638] p-5 sm:p-8 mb-3 rounded-lg hover:bg-[#3a3f46] transition-colors duration-200">
        <h3 className="text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 text-gray-400">
          {project.tech}
        </h3>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2">
          {project.name}
        </h1>
        <h3 className="text-sm sm:text-base font-light text-gray-300 leading-relaxed">
          {project.description}
        </h3>
      </div>
    </a>
  );
}

export default ProjectCard;
