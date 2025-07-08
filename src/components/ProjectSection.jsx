import "../styles/ProjectSection.css"
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "tkchart",
        description: "Line-Chart Widget for tkinter, Python library for creating live updating line charts..",
        images: ["/images/tkchart/1.png", "/images/tkchart/2.png", "/images/tkchart/3.png", "/images/tkchart/4.png", "/images/tkchart/5.png"],
    },
    {
        title: "ctkchart",
        description: "Line-Chart Widget for customtkinter, Python library for creating live updating line charts..",
        images: ["/images/tkchart/1.png", "/images/tkchart/2.png", "/images/tkchart/3.png", "/images/tkchart/4.png", "/images/tkchart/5.png"],
    },
    {
        title: "ctkchart",
        description: "Line-Chart Widget for customtkinter, Python library for creating live updating line charts..",
        images: ["/images/tkchart/1.png", "/images/tkchart/2.png", "/images/tkchart/3.png", "/images/tkchart/4.png", "/images/tkchart/5.png"],
    },
    {
        title: "ctkchart",
        description: "Line-Chart Widget for customtkinter, Python library for creating live updating line charts..",
        images: ["/images/tkchart/1.png", "/images/tkchart/2.png", "/images/tkchart/3.png", "/images/tkchart/4.png", "/images/tkchart/5.png"],
    }
]


function ProjectSection(){
    return (
        <div className="prject-section">
            <p className="project-s-title">My Open Source Projects</p>
            <p className="project-s-description">
                Every project here started as a fun idea — 
                a way to explore, experiment, and push myself further.
                They may be simple, but each one played a role in getting me 
                where I am now. You can see a few of them below, 
                and if you're interested in more, take a peek at my GitHub.
            </p>

            <div className="projetcs-container">
                {
                    projects.map(
                        (project, index) => (
                            <ProjectCard project={project}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default ProjectSection;