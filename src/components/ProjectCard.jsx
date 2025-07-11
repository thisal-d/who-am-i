import '../styles/ProjectCard.css';
import { useEffect, useState } from "react";

function ProjectCard({ project }) {
  const[repoData, setRepoData] = useState(null);

  useEffect(() => {
    fetch(project.api_url)
    .then(res => res.json())
    .then(res => setRepoData(res))
    .catch(err => console.log(err));} 
    , [project.api_url]
 );

  return (
    <div className="project-card">
      <div>
        <p className="project-title">{project.title}</p>
      </div>

      <div>
        <div className="project-images-container">
          {project.images.map((image, index) => (
            <div key={index} className="project-image-wrapper" style={{ top: `${index * 20}px`, left: `-${index * 20}px`}}>
              <img src={image} alt={`project-${index}`} className="project-image" />
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <p className="project-description">{project.description}</p>
      </div>      

      <div className="project-stats-container">
        <div>
          <p className="project-github-repo">
            <a href={project.repo_url}>
              <img src="/icons/social/github.png" alt="github"/>
            </a>
          </p>
        </div>

        {repoData && (
          <div className="project-stats">
            ⭐ {repoData.stargazers_count} Stars 
            &nbsp;&nbsp;
            🍴 {repoData.forks_count} Forks
          </div>
        )}

      </div>
    </div>
  );
}

export default ProjectCard;
