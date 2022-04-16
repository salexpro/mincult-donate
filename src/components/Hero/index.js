import React from 'react'
import { Container, Button } from 'react-bootstrap'

import Icon from '../Icon'

import powered from './img/powered.svg'

import * as s from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={s.hero}>
      <Container>
        <h1>Save Ukrainian Culture</h1>
        <p>
          Unique Ukrainian culture is an integral part of the world cultural
          heritage. There are 7 UNESCO World Heritage Sites in Ukraine, while
          another 17 properties are in the Tentative List of the World Cultural
          Heritage.
        </p>
        <div className={s.hero__button}>
          <Button>
            Save world heritage
            <Icon name="btc" />
          </Button>
          Donate via bank transfers, credit cards, and crypto
        </div>
        <div className={s.hero__powered}>
          <small>The initiative is powered by</small>
          <img
            src={powered}
            alt="Ministry of Culture ⨯ Держмистецтв ⨯ Everstake"
          />
        </div>
      </Container>
    </section>
  )
}

export default Hero
