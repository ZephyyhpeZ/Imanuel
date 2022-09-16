import BackCode from './backCode';
import './css/Introduction.css';
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function Introduction() {
    useEffect( () => {
        Aos.init({duration: 1000});
      },[]);
    return (  
        <div className="Introduction">
                <div
                data-aos="fade-left"
                data-aos-once="true"
                >
                <BackCode number="0000" margin="-100px 0px 0px 0px"></BackCode>
                </div>
                
                <div 
                data-aos="fade-up"
                data-aos-once="true"
                >
                    <h1 className="no-bold">Hi,</h1>
                </div>
                
                <div 
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="150" 
                >
                <h1 className="no-bold">my name is</h1>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="250" 
                >
                <h1 >IMANUEL.</h1>
                </div>
                <div 
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-delay="350" 
                >
                <h2 className="no-bold">Software engineer in the making.</h2>
                </div>
        </div>
    );
}

export default Introduction;