import "./css/backCode.css"


function BackCode(props) {
    const margin = {
        margin: props.margin
    };
    
    return ( 
        <div className="BackCode">
            <h1 className="number" style={margin}>{props.number}</h1>
        </div>

     );
}

export default BackCode;