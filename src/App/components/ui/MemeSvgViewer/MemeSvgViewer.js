import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './MemeSvgViewer.module.scss'

export const memeSvgViewerInitialState ={};

const MemeSvgViewer = (props) => {
    
  return (
    <svg className={style.MemeSvgViewer} data-testid="MemeSvgViewer" 
    viewBox={`0 0 ${props.image?props.image.w:1000} ${props.image?props.image.h:1000}`}>
      {props.image&&<image href={`/img/${props.image.url}`} x={0} y={0} />}
      <text 
        x={props.meme.x} 
        y={props.meme.y} 
        fontSize={props.meme.fontSize} 
        fontWeight={props.meme.fontWeight} 
        fill={props.meme.fill} 
        fontStyle={props.meme.fontStyle?'italic':'normal'} 
        textDecoration={props.meme.underline?'underline':'normal'}>
        {props.meme.text}
      </text>
        
    </svg>
  )
}

MemeSvgViewer.propTypes = {
  image: PropTypes.object,
  meme: PropTypes.object.isRequired,
};
// MemeSvgViewer.defaultProps = {};

export default MemeSvgViewer
