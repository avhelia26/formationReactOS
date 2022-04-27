import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '.TemplateName.module.scss'

const TemplateNameInitalState ={};
class TemplateName extends Component {
    constructor(props){
        super(props)
        this.state = TemplateNameInitalState;
    }
    render() {
        return (
            <div className={style.TemplateName} sata-testid="TemplateName">
                templateName                
            </div>
        );
    }
}

TemplateName.propTypes = {

};

export default TemplateName;