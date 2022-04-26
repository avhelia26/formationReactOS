import React, { useEffect, useState } from "react";
import style from './Button.module.css';
import PropTypes from 'prop-types';


const Button=(props)=>{
    const [isClicked, setClicked] = useState(false);
    const [isHover, setHover] = useState(false);

    useEffect(() => {
        console.log("update du state",isClicked)
    //   return () => {
    //     effect
    //   };
        if(isClicked){
            setTimeout(() => {
                setClicked(false);
            }, 1000);
        }
    }, [isClicked])   
       
    
    return <button 
    className={`${style.Button}${isHover?' '+style.hover:''}${isClicked?' '+style.clicked:''}`} 
    style={{color:props.color, backgroundColor:props.bgColor}}
    onClick={(evt)=>{
        setClicked(true);

    }}
    onMouseEnter={()=>{setHover(true)}}
    onMouseLeave={()=>{setHover(false)}}
    >
        {props.children}
        {isClicked.toString()}
       
    </button>
}

Button.propTypes={
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}
Button.defaultProps={
    bgColor: 'grey',
}
export default Button;