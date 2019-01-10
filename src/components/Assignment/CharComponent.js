import React from 'react';
import CharComponentCss from './CharComponent.module.css'

const CharComponent = (props) => {
    return props.name.map((element, index) => {
        return <p className={CharComponentCss.text} key = {index} onClick = {(e) => props.handelDelete(index)}>{element}</p>
    })
}

export default CharComponent
