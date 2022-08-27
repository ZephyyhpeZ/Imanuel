import "./css/floatingButton.css"
import { ReactComponent as Code} from '../assets/code.svg'
import { ReactComponent as Night} from '../assets/nightMode.svg'
import { ReactComponent as Reload} from '../assets/reload.svg'
import { ReactComponent as ThisSide} from '../assets/thisSideUp.svg'

function FloatingButton(props) {
    const nightmode = () =>{
        props.setTheme()
         
    }

    const code = () =>{
        alert('You have clicked the circle.')
    }

    const reload = () =>{
        window.location.reload();
    }

    const rotate = () =>{
        alert('You have clicked the circle.')
    }
    return (  
        <div className="FloatingButton">
            <Night onClick={nightmode} className="margin"/>            
            <Code onClick={code} className="margin"/>
            <Reload onClick={reload} className="margin"/>
            <ThisSide onClick={rotate} className="margin"/>
            <div className="small-line"></div>
        </div>
    );
}

export default FloatingButton;