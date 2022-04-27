import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from '.Header.module.scss'

export const headerInitialState ={};

const Header = props => {
    const [state, setstate] = useState(headerInitailState)
    useEffect(() => {
      return () => {
        effect
      };
    }, [input])
   
  return (
    <div className={style.Header} sata-testid="Header">
        Header
    </div>
  )
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header
