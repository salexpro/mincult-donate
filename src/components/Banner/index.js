import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Icon from '../Icon'

import * as s from './Banner.module.scss'

const Banner = () => {
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
          <Button href="#" size="lg" variant="outline-dark">
            Save world heritage
            <Icon name="btc" />
          </Button>
        </div>
      </Container>
    </section>
  )
}

export default Banner
