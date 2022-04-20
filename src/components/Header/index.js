import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Menu from '~components/Menu'
import DonateModal from '../DonateModal'

import * as s from './style.module.scss'

import logo from './img/logo.svg'

const Header = ({ siteTitle }) => {
  const [modalShow, setModalShow] = useState(null)

  const handleDonate = () => setModalShow(true)

  return (
    <Container as="header" className={s.header}>
      <div className={s.header__logo}>
        <img width="453" height="58" src={logo} alt={siteTitle} />
      </div>
      <Menu />
      <div className={s.header__button}>
        <Button variant="outline-secondary" onClick={handleDonate}>
          Donate now
        </Button>
      </div>
      <DonateModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  )
}

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
