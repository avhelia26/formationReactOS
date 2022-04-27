import React from 'react';
import style from "./TemplateName.module.scss"

interface ITemplateNameProps {
    children:Array<React.ReactElement>|React.ReactElement|string
    style?:object
}

const TemplateName: React.FunctionComponent<ITemplateNameProps> = (props) => {
  return(
    <div className={style.TemplateName} data-testid="TemplateName" style={{...props.style}}> 
        {props.children}
    </div> 
  );
};

export default TemplateName;
