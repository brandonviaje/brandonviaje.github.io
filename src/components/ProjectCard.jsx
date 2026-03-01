function ProjectCard({ project }) {
  return (
    <a target="_blank" href={project.link}>
      <div className="bg-[#313638] p-8 mb-2">
        <h3 className="text-xs font-bold font-inter tracking-widest uppercase mb-3 hyphens-auto text-pretty">
          {project.tech}
        </h3>
        <h1 className="text-3xl font-extrabold hyphens-auto text-pretty">
          {project.name}
        </h1>
        <h3 className="text-sm font-light hyphens-auto text-pretty">
          {project.description}
        </h3>
      </div>
    </a>
  );
}

export default ProjectCard;
