import ProjectSection from "../components/ProjectSection";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

function Home() {
    return (
        <div className="home-page">
            <Hero/>
            <Skills/>
            <ProjectSection/>
        </div>
    );
}

export default Home;