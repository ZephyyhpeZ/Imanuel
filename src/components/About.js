import "./css/About.css"
import img from "../assets/ME.png"
import BackCode from "./backCode";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
    useEffect( () => {
        Aos.init({duration: 1000});
      },[]);
    return (  
        <div className="About">

            <div
            data-aos="fade-right"
            data-aos-once="true"
            >
            <BackCode number="0001" margin="-200px 0px 0px -110px"></BackCode>
            </div>
            <div className="dot-outer">
                1
            </div>

            
            <div
            data-aos="fade"
            data-aos-once="true"
            >
            <div className="line-left"></div>
            </div>
            <div className="left">
                <div
                 data-aos="fade-up"
                 data-aos-once="true"
                >
                <h1 className="title">About Me</h1>
                </div>
                <div
                 data-aos="fade-up"
                 data-aos-once="true"
                >
                <div className="desc">
                    <p>
                    Hi! As you already know from the introduction section of my website, my name is Imanuel and I'm a 5th semester student in Kalbis Institute majoring in Informatics. 
                    I have always interested in software and game development whether it's on the programming side or the designing side. 
                    
                    </p>

                    <p>
                    Recently I have been dabbling in Artificial Intelligence and made a genetic algorithms program using python. 
                    The next topic that intrest me is about neural network but I know that it'll be a hard topic to understand.
                    </p>
                </div>
                </div>
            </div>
            <div
            data-aos="fade-left"
            data-aos-once="true"
            >
            <div className="right">
                <img src={img} alt="" />
            </div>
            </div>
        </div>
    );
}

export default About;