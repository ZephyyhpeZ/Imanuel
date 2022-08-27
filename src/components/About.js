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
            <div className="dot-outer"></div>
            <div className="dot-inner"></div>
            
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis molestie turpis id placerat. Donec non sem vel mauris tristique iaculis. Vivamus vehicula libero vel lacus tempor, vitae commodo turpis tincidunt. Mauris ultricies pulvinar tortor ac scelerisque. Morbi et sem neque.
                    </p>

                    <p>
                    Sed in metus eu mi ornare vehicula ut et leo. Fusce scelerisque ullamcorper enim, quis viverra dolor imperdiet ut. Suspendisse potenti. In viverra rhoncus purus. Aliquam erat volutpat. Suspendisse a sem ut nunc interdum sodales.
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