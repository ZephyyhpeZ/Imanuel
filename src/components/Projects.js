import BackCode from "./backCode";
import "./css/Projects.css"
import Project from "./Project";
import img from "../assets/img.png"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
    useEffect( () => {
        Aos.init({duration: 1000});
      },[]);

    return ( 
        <div className="Projects">
            <div className="dot-outer"></div>
            <div className="dot-inner"></div>
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
            <Project src={img} title="Title" desc="description"/>
            <Project src="" title="Title" desc="description"/>
        </div>
     );
}

export default Projects;