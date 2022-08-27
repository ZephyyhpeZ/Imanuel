import './css/navbar.css';
import { ReactComponent as Logo} from '../assets/Logo.svg'
import { ReactComponent as Eye} from '../assets/eye.svg'
import { useEffect, useState } from 'react';


function Navbar() {

  const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const setFromEvent = (ev) => setPosition({ x: -(window.innerWidth / 1.4 - ev.clientX) / 150 , y: -(window.innerHeight / 8 - ev.clientY) / 150 });
      window.addEventListener("mousemove", setFromEvent);
  
      return () => {
        window.removeEventListener("mousemove", setFromEvent);
      };
      
    }, []);
    

    function MovePupil(){
      if(document.getElementById("pupil")){
        var pupil = document.getElementById("pupil");
        pupil.style.left = position.x;
        pupil.style.top = position.y;
        pupil.style.transform = `translate( ${position.x}px, ${position.y}px)`;

      }
      
  
    }

    MovePupil();
   
  };




  
  useMousePosition();

  return (
    <div className="navbar">
      <div className="padding">
        <div className="navbar-container-left">
          <Logo></Logo>
          
        </div>
        <div className="navbar-container-right">
        <Eye></Eye>
        </div>
       
      </div>
    </div>
  );

  
}

export default Navbar;