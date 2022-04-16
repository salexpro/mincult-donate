import React from 'react'
import { Container, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import Icon from '../Icon'

import * as s from './style.module.scss'

const Footer = ({ siteTitle }) => {
  const currentYear = new Date().getFullYear()

  return (
    <Container as="footer" className={s.footer}>
      <div className={s.footer__top}>
        <h2 className="h1">Help Save Ukrainian Culture</h2>
        <p>
          Help salvage Ukrainian holdings and ensure they are renovated once the
          war is over. Make a donation today
        </p>
        <Button>
          Save world heritage
          <Icon name="btc" />
        </Button>
        <span className={s.footer__hint}>
          Donate via bank transfers, credit cards, and crypto
        </span>
      </div>

      <div className={s.footer__bottom}>
        <div className={s.footer__logos}>
          <Icon name="mincultLogo" size={[134, 44]} />
          <Icon name="govartLogo" size={[384, 44]} />
          <Icon name="everstakeLogo" size={[227, 36]} />
        </div>
        <ul className={s.footer__menu}>
          <li>
            © 2022 Powered by{' '}
            <a href="https://everstake.one/" target="_blank" rel="noreferrer">
              Everstake
            </a>
          </li>
          <li>
            Development by{' '}
            <a href="https://salex.pro" target="_blank" rel="noreferrer">
              Oleksandr Pupko
            </a>
          </li>
          <li>
            Design by{' '}
            <a href="https://dnlv.design/" target="_blank" rel="noreferrer">
              Andrew Danilov
            </a>
          </li>
        </ul>
      </div>

      <div className={s.footer__logo}>{siteTitle}</div>

      <div className={s.footer__copy}>
        © {currentYear} {siteTitle}. All Rights Reserved
      </div>
    </Container>
  )
}

Footer.defaultProps = {
  siteTitle: '',
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

export default Footer
