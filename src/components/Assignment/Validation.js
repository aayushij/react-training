import React from 'react';

const Validation = (props) => {
    let msg = "Text is long enough";
    let msgStyle = {
        color:"green",
        padding:"0px 40px 10px" 
    }
    if( props.nameLength < 5 ){
        msg = "Text too short";
        msgStyle = {
            color:"red",
            padding: "0px 40px 10px"
        }
    }
    return <p style={msgStyle}>{msg}</p>
}
export default Validation