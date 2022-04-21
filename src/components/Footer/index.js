import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'

import Icon from '../Icon'
import DonateModal from '../DonateModal'

import * as s from './style.module.scss'

const Footer = () => {
  const [modalShow, setModalShow] = useState(null)

  const handleDonate = () => setModalShow(true)

  const currentYear = new Date().getFullYear()

  return (
    <footer className={s.footer}>
      <Container className={s.footer__top}>
        <h2 className="h1">Help Save Ukrainian Culture</h2>
        <p className={s.footer__lead}>
          Help salvage Ukrainian holdings and ensure they are renovated once the
          war is over. Make a donation today
        </p>
        <Button variant="secondary" onClick={handleDonate}>
          Save world heritage
          <Icon name="btc" />
        </Button>
        <small className={s.footer__hint}>
          Donate via bank transfers, credit cards, and crypto
        </small>
      </Container>

      <Container className={s.footer__bottom}>
        <div className={s.footer__logos}>
          <Icon name="mincultLogo" size={[134, 44]} />
          <Icon name="govartLogo" size={[384, 44]} />
          <Icon name="everstakeLogo" size={[227, 36]} />
        </div>
        <ul className={s.footer__menu}>
          <li>
            © {currentYear} Powered by{' '}
            <a href="https://everstake.one" target="_blank" rel="noreferrer">
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
            <a href="https://dnlv.design" target="_blank" rel="noreferrer">
              Andrew Danilov
            </a>
          </li>
        </ul>
      </Container>
      <DonateModal show={modalShow} onHide={() => setModalShow(false)} />
    </footer>
  )
}

export default Footer
