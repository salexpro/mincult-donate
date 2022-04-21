import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Modal } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import * as s from './About.module.scss'

import cover from './img/cover-min.jpg'

const About = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)

  const [modalShow, setModalShow] = useState(null)

  const handleVideo = () => setModalShow(true)

  return (
    <>
      <Container id="why" className={s.about}>
        <button type="button" className={s.about__video} onClick={handleVideo}>
          <StaticImage
            src="./img/cover-min.jpg"
            alt="Video cover"
            width={700}
            quality="100"
            placeholder="tracedSVG"
          />
        </button>
        <div className={s.about__content}>
          Ukrainian culture has a thousand-year history. russia&apos;s
          full-scale invasion on the sovereign territory of peaceful Ukraine
          brings more and more devastation to the world cultural heritage and
          landmarks each day.
          <ul>
            <li>
              UNESCO World Heritage sites in Ukraine are at risk of destruction.
            </li>
            <li>
              More than 200 objects of intangible cultural heritage in Ukraine
              were severely damaged or destroyed. Among them there are museums,
              theaters, natural reserves, ancient monuments, and libraries.
            </li>
            <li>
              Thousands of art pieces have been damaged by russian bombing.
            </li>
          </ul>
          Help to save Ukrainian artistic and cultural objects and ensure they
          will be renovated once the war is over. Make a donation today.
        </div>
      </Container>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
        className="modal--video"
      >
        <div className={s.about__modal}>
          <iframe
            title="WAW: War Against War"
            frameBorder="0"
            allowFullScreen=""
            scrolling="no"
            allow="autoplay;fullscreen"
            src={`https://onelineplayer.com/player.html?autoplay=true&autopause=false&&loop=false&url=https%3A%2F%2Fwww.dropbox.com%2Fs%2Fkrg31suljgkkry9%2FWAW%253A%2520War%2520Against%2520War.mp4%3Fraw%3D1&poster=${site.siteMetadata.siteUrl}${cover}&time=true&progressBar=true&overlay=true&muteButton=false&fullscreenButton=true&style=light&quality=auto&playButton=true&buttonColor=%23ffffff&buttonSize=60`}
          />
        </div>
      </Modal>
    </>
  )
}

export default About
