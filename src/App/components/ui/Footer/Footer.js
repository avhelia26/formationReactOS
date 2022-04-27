import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from '.Footer.module.scss'

export const footerInitialState ={};

const Footer = props => {
    const [state, setstate] = useState(footerInitailState)
    useEffect(() => {
      return () => {
        effect
      };
    }, [input])
   
  return (
    <div className={style.Footer} sata-testid="Footer">
        Footer
    </div>
  )
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer
