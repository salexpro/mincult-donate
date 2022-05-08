import React, { useState } from 'react'
import { useLocation } from '@gatsbyjs/reach-router'
import { Container, Button, Offcanvas } from 'react-bootstrap'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'

import Menu from '~components/Menu'
import DonateModal from '../DonateModal'

import * as s from './style.module.scss'

import logo from './img/logo.svg'
import mcip from './img/mcip.svg'

const Header = ({ siteTitle }) => {
  const { t } = useTranslation('base')

  const [isMenuOpen, setMenuOpen] = useState(null)

  const handleMenu = () => setMenuOpen((prev) => !prev)

  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const [modalShow, setModalShow] = useState(!!params.get('donate'))

  const handleDonate = () => setModalShow(true)

  const handleModal = () => {
    setModalShow(false)
    setMenuOpen(false)
  }

  return (
    <>
      <Container as="header" className={s.header}>
        <div className={s.header__logo}>
          <picture>
            <source
              media="(max-width: 1023px)"
              width="129"
              height="42"
              srcSet={mcip}
            />
            <img width="453" height="58" src={logo} alt={siteTitle} />
          </picture>
        </div>
        <Menu variant="header" />
        <div className={s.header__button}>
          <Button variant="outline-secondary" onClick={handleDonate}>
            {t('buttons.donate')}
          </Button>
        </div>
        <button
          type="button"
          data-toggle="dropdown"
          aria-expanded={isMenuOpen}
          onClick={handleMenu}
          className={s.hamb}
        >
          <svg className={s.hamb__icon} viewBox="0 0 100 100">
            <path
              className={cn(s.hamb__line, s.hamb__line_top)}
              d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
            />
            <path
              className={cn(s.hamb__line, s.hamb__line_middle)}
              d="m 30,50 h 40"
            />
            <path
              className={cn(s.hamb__line, s.hamb__line_bottom)}
              d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
            />
          </svg>
        </button>
        <DonateModal show={modalShow} onHide={handleModal} />
      </Container>
      <Offcanvas
        show={isMenuOpen}
        onHide={handleMenu}
        placement="top"
        backdrop={false}
      >
        <Offcanvas.Body>
          <Menu handleClose={handleMenu} variant="dropdown" />
          <Button variant="outline-secondary" onClick={handleDonate}>
            {t('buttons.donate')}
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
