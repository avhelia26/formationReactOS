import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from './TemplateName.module.scss'

export const templateNameInitialState ={};

const TemplateName = (props) => {
    const [state, setstate] = useState(templateNameInitailState)
    useEffect(() => {
      return () => {
        effect
      };
    }, [input])
   
  return (
    <div className={style.TemplateName} sata-testid="TemplateName">
        TemplateName
    </div>
  )
}

TemplateName.propTypes = {};
TemplateName.defaultProps = {};

export default TemplateName
