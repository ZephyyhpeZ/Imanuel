import "./css/Project.css"
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";



function Project(props) {
    useEffect( () => {
        Aos.init({duration: 1000});
      },[]);

    return (  
        <div className="Project">
            <div
            data-aos="fade-up"
            data-aos-once="true"
            >
            <div className="img">
                <img src={props.src} alt="" />
            </div>
            </div>
            <div
            data-aos="fade-right"
            data-aos-once="true"
            >
            <div className="box">
                
                <h2 className="title-text">{props.title}</h2>

                <p className="textbox">
                    {props.desc}
                </p>
            
            </div>
            </div>
        </div>
    );
}

export default Project;