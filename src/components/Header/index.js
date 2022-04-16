import React from 'react'
import { Container, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Menu from '~components/Menu'

import * as s from './style.module.scss'

import logo from './img/logo.svg'

const Header = ({ siteTitle }) => (
  <Container as="header" className={s.header}>
    <div className={s.header__logo}>
      <img src={logo} alt={siteTitle} />
    </div>
    <Menu />
    <div className={s.header__button}>
      <Button variant="outline-secondary">Donate now</Button>
    </div>
  </Container>
)

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
