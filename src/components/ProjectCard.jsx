import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div>
        <p className="project-title">{project.title}</p>
      </div>

      <div>
        <div className="project-images-container">
          {project.images.map((image, index) => (
            <div key={index} className="project-image-wrapper" style={{ top: `${index * 12}px`, left: `-${index * 12}px`}}>
              <img src={image} alt={`project-${index}`} className="project-image" />
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <p className="project-description">{project.description}</p>
      </div>      
    </div>
  );
}

export default ProjectCard;
