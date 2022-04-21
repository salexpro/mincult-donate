import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'
import Masonry from 'react-masonry-css'
import { useTranslation } from 'react-i18next'

import * as s from './Quotes.module.scss'

const Quotes = () => {
  const { t } = useTranslation('quotes')

  const { quotes } = useStaticQuery(graphql`
    {
      quotes: allQuotesJson {
        edges {
          node {
            key
            photo {
              childImageSharp {
                gatsbyImageData(
                  backgroundColor: "#D0D0D0"
                  placeholder: NONE
                  width: 80
                  quality: 100
                )
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Container as="section" className={s.quotes}>
      <Masonry
        breakpointCols={{
          default: 2,
          1023: 1,
        }}
        className={s.quotes__masonry}
        columnClassName={s.quotes__column}
      >
        {quotes.edges.map(({ node: { key, photo } }) => (
          <figure className={s.quote} key={key}>
            <blockquote>
              <p>{t(`${key}.quote`)}</p>
            </blockquote>
            <figcaption>
              <cite>
                <h3>{t(`${key}.name`)}</h3>
              </cite>
              <span className={s.quote__position}>{t(`${key}.position`)}</span>
              {photo && (
                <GatsbyImage
                  image={photo.childImageSharp.gatsbyImageData}
                  alt={`Photo of ${t(`${key}.name`)}`}
                  className={s.quote__photo}
                />
              )}
            </figcaption>
          </figure>
        ))}
      </Masonry>
    </Container>
  )
}

export default Quotes
