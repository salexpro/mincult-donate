import React from 'react'
import { Container } from 'react-bootstrap'
import * as s from './About.module.scss'

const About = () => {
  return (
    <Container className={s.about}>
      <div className={s.about__video} />
      <div>
        Ukrainian culture has a thousand-year history. russia&apos;s full-scale
        invasion on the sovereign territory of peaceful Ukraine brings more and
        more devastation to the world cultural heritage and landmarks each day.
        UNESCO World Heritage sites in Ukraine are at risk of destruction. More
        than 200 objects of intangible cultural heritage in Ukraine were
        severely damaged or destroyed. Among them there are museums, theaters,
        natural reserves, ancient monuments, and libraries. Thousands of art
        pieces have been damaged by russian bombing. Help to save Ukrainian
        artistic and cultural objects and ensure they will be renovated once the
        war is over. Make a donation today.
      </div>
    </Container>
  )
}

export default About
