/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { Trans, useTranslation } from 'react-i18next'

import Icon from '../Icon'
import DonateModal from '../DonateModal'

import powered from './img/powered.svg'

import * as s from './Hero.module.scss'

const Hero = () => {
  const { t } = useTranslation(['hero', 'base'])

  const [modalShow, setModalShow] = useState(null)

  const handleDonate = () => setModalShow(true)

  return (
    <section className={s.hero}>
      <Container className={s.hero__container}>
        <h1>{t('header')}</h1>
        <p className={s.hero__lead}>{t('lead')}</p>
        <div className={s.hero__button}>
          <Button variant="secondary" onClick={handleDonate}>
            {t('buttons.save', { ns: 'base' })}
            <Icon name="btc" />
          </Button>
          <small>{t('hint', { ns: 'base' })}</small>
        </div>
        <div className={s.hero__powered}>
          <small>
            {t('powered.0')}{' '}
            <span>
              <Trans
                t={t}
                i18nKey="powered.1"
                components={[
                  <a
                    href="https://mkip.gov.ua"
                    target="_blank"
                    rel="noreferrer"
                  />,
                  <a
                    href="https://arts.gov.ua"
                    target="_blank"
                    rel="noreferrer"
                  />,
                  <a
                    href="https://everstake.one"
                    target="_blank"
                    rel="noreferrer"
                  />,
                ]}
              />
            </span>
          </small>
          <img
            width="864"
            height="44"
            src={powered}
            alt="Ministry of Culture ⨯ Держмистецтв ⨯ Everstake"
          />
        </div>
      </Container>
      <DonateModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  )
}

export default Hero
