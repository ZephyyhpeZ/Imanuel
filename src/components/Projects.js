import BackCode from "./backCode";
import "./css/Projects.css"
import Project from "./Project";
import game from "../assets/game.png"
import pathfinding from "../assets/pathfinding.png"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
    useEffect( () => {
        Aos.init({duration: 1000});
      },[]);

    const projects = {
        title1 : "Hero of curse",
        desc1 : "A survival game where must collect 3 fragments and protect the ancient inscribed stone to restore the world.",
        title2 : "Pathfinding Visualizer",
        desc2 : "In this application you can set the starting point and end point for the algorithm to solve. You can also place a obstacle to block the path."

    }

    return ( 
        <div className="Projects">
            <div className="dot-outer">2</div>

            <div
            data-aos="fade"
            data-aos-once="true"
            >
            <div className="line-left"></div>
            </div>
            <div
            data-aos="fade-left"
            data-aos-once="true"
            >
            <BackCode number="0002" margin="-200px 0px 0px -110px"></BackCode>
            </div>
            <div
            data-aos="fade-up"
            data-aos-once="true"
            >
            <h1 className="title">Projects</h1>
            </div>
            <Project src={game} title={projects.title1} desc={projects.desc1}/>
            <Project src={pathfinding} title={projects.title2} desc={projects.desc2}/>
        </div>
     );
}

export default Projects;