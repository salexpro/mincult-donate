import React, { useState } from 'react'
import { Container, Button } from 'react-bootstrap'

import Icon from '../Icon'
import DonateModal from '../DonateModal'

import * as s from './Banner.module.scss'

const Banner = () => {
  const [modalShow, setModalShow] = useState(null)

  const handleDonate = () => setModalShow(true)

  return (
    <section className={s.banner}>
      <Container>
        <div className={s.banner__container}>
          <div className={s.banner__content}>
            <h2>Help Save Ukrainian Culture</h2>
            <span>
              Help salvage Ukrainian holdings and ensure they are renovated once
              the war is over. Make a donation today.
            </span>
          </div>
          <Button size="lg" variant="outline-dark" onClick={handleDonate}>
            Save world heritage
            <Icon name="btc" />
          </Button>
        </div>
      </Container>
      <DonateModal show={modalShow} onHide={() => setModalShow(false)} />
    </section>
  )
}

export default Banner
