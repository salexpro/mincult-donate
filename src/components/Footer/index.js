/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'

import Icon from '../Icon'
import DonateModal from '../DonateModal'

import * as s from './style.module.scss'

const Footer = () => {
  const [modalShow, setModalShow] = useState(null)

  const handleDonate = () => setModalShow(true)

  const currentYear = new Date().getFullYear()

  const { t } = useTranslation('footer')

  return (
    <footer className={s.footer}>
      <Container className={s.footer__top}>
        <h2 className="h1">{t('header')}</h2>
        <p className={s.footer__lead}>{t('lead')}</p>
        <Button variant="secondary" onClick={handleDonate}>
          {t('buttons.save', { ns: 'base' })}
          <Icon name="btc" />
        </Button>
        <small className={s.footer__hint}>{t('hint', { ns: 'base' })}</small>
      </Container>

      <Container className={s.footer__bottom}>
        <div className={s.footer__logos}>
          <Icon name="mincultLogo" size={[134, 44]} />
          <Icon name="govartLogo" size={[384, 44]} />
          <Icon name="everstakeLogo" size={[227, 36]} />
        </div>
        <ul className={s.footer__menu}>
          <li>
            © {currentYear}{' '}
            <Trans
              t={t}
              i18nKey="powered"
              components={[
                <a
                  href="https://everstake.one"
                  target="_blank"
                  rel="noreferrer"
                />,
              ]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="dev"
              components={[
                <a href="https://salex.pro" target="_blank" rel="noreferrer" />,
              ]}
            />
          </li>
          <li>
            <Trans
              t={t}
              i18nKey="design"
              components={[
                <a
                  href="https://dnlv.design"
                  target="_blank"
                  rel="noreferrer"
                />,
              ]}
            />
          </li>
        </ul>
      </Container>
      <DonateModal show={modalShow} onHide={() => setModalShow(false)} />
    </footer>
  )
}

export default Footer
