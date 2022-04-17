import React from 'react'
import { Container } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import * as s from './About.module.scss'

const About = () => {
  return (
    <Container id="why" className={s.about}>
      <button type="button" className={s.about__video}>
        <StaticImage
          src="./img/cover.jpg"
          alt="Video cover"
          width={560}
          quality={100}
          placeholder="tracedSVG"
        />
      </button>
      <div>
        Ukrainian culture has a thousand-year history. russia&apos;s full-scale
        invasion on the sovereign territory of peaceful Ukraine brings more and
        more devastation to the world cultural heritage and landmarks each day.
        <ul>
          <li>
            UNESCO World Heritage sites in Ukraine are at risk of destruction.
          </li>
          <li>
            More than 200 objects of intangible cultural heritage in Ukraine
            were severely damaged or destroyed. Among them there are museums,
            theaters, natural reserves, ancient monuments, and libraries.
          </li>
          <li>Thousands of art pieces have been damaged by russian bombing.</li>
        </ul>
        Help to save Ukrainian artistic and cultural objects and ensure they
        will be renovated once the war is over. Make a donation today.
      </div>
    </Container>
  )
}

export default About
