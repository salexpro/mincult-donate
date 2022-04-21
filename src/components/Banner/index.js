import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

import Icon from '../Icon'
import DonateModal from '../DonateModal'

import * as s from './Banner.module.scss'

const Banner = () => {
  const [modalShow, setModalShow] = useState(null)

  const handleDonate = () => setModalShow(true)

  const { t } = useTranslation(['footer', 'base'])

  return (
    <section className={s.banner}>
      <Container>
        <div className={s.banner__container}>
          <div className={s.banner__content}>
            <h2>{t('header')}</h2>
            <span>{t('lead')}</span>
          </div>
          <Button size="lg" variant="outline-dark" onClick={handleDonate}>
            {t('buttons.save', { ns: 'base' })}
            <Icon name="btc" />
          </Button>
        </div>
      </Container>
      <DonateModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  )
}

export default Banner
