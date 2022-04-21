import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container, Modal } from 'react-bootstrap'
import { StaticImage } from 'gatsby-plugin-image'
import { useTranslation } from 'react-i18next'

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

  const { t } = useTranslation('about')

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
          {t('content.0')}
          <ul>
            {t('content.1', { returnObjects: true }).map((li, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`li${i}`}>{li}</li>
            ))}
          </ul>
          {t('content.2')}
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
