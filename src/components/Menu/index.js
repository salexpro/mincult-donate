import React from 'react'
import PropTypes from 'prop-types'
import { Nav } from 'react-bootstrap'
import cn from 'classnames'
import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'
import { LocalizedLink, useLocalization } from 'gatsby-theme-i18n'
import { useTranslation } from 'react-i18next'

import MENU from './constants'

const Menu = ({ variant, handleClose }) => {
  const { locale, config } = useLocalization()

  const { t } = useTranslation('base')

  gsap.registerPlugin(ScrollToPlugin)

  const handleScroll = (e, link) => {
    e.preventDefault()
    if (handleClose) handleClose()
    gsap.to(window, { scrollTo: link, ease: 'power2' })
  }

  return (
    <Nav className={cn({ [`nav--${variant}`]: variant })} as="ul">
      {MENU.map(({ key, link }) => (
        <Nav.Item as="li" key={key}>
          <Nav.Link href={link} onClick={(e) => handleScroll(e, link)}>
            {t(`menu.${key}`)}
          </Nav.Link>
        </Nav.Item>
      ))}

      {config
        .filter(({ code }) => code !== locale)
        .map(({ code, localName }) => (
          <Nav.Item as="li" key={code}>
            <Nav.Link as={LocalizedLink} to="/" language={code}>
              {localName}
            </Nav.Link>
          </Nav.Item>
        ))}
    </Nav>
  )
}

Menu.defaultProps = {
  variant: '',
}

Menu.propTypes = {
  variant: PropTypes.string,
}

export default Menu
