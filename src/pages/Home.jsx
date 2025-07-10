import ProjectSection from "../components/ProjectSection";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

function Home() {
    return (
        <div className="home-page">
            <h1>Home2 Page</h1>
            <Hero/>
            <Skills/>
            <ProjectSection/>
        </div>
    );
}

export default Home;