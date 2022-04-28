import React, { useEffect, useState } from "react";
import style from './Button.module.css';
import PropTypes from 'prop-types';
import { propTypes } from "react-bootstrap/esm/Image";


const Button=(props)=>{
    const [isClicked, setClicked] = useState(false);
    const [isHover, setHover] = useState(false);

    useEffect(() => {
    //   return () => {
    //     effect
    //   };
        if(isClicked){
            setTimeout(() => {
                setClicked(false);
            }, 1000);
        }
    }, [isClicked])   
    /*   permet de faire le traitement de la className à la place de la ligne ds le <button className={className}> */
    /*
    let className = style.Button;
    if (isClicked) {
      className += ' ' + style.clicked;
    } else if (isOver) {
      className +=' ' + style["over"];
    }
    */
    return (
    <button 
        type={props.type}
        className={`${style.Button}${isHover?' '+style.hover:''}${isClicked?' '+style.clicked:''}`} 
        style={{color:props.color, backgroundColor:props.bgColor}}
        onClick={(evt)=>{
            setClicked(true);
            props.onButtonClick();
        }}
        onMouseEnter={()=>{setHover(true)}}
        onMouseLeave={()=>{setHover(false)}}
        >
            {props.children}
            {isClicked.toString()}
        
    </button>
    );
};

Button.propTypes={
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onButtonClicked: PropTypes.func.isRequired
}
 Button.defaultProps={
     bgColor: 'grey',
     type:'button',
     color:"#FFF",
     onButtonClick:()=>{}
 }
export default Button;