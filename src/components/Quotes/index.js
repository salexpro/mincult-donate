import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Container } from 'react-bootstrap'

import * as s from './Quotes.module.scss'

const Quotes = () => {
  const { quotes } = useStaticQuery(graphql`
    {
      quotes: allQuotesJson {
        edges {
          node {
            name
            position
            quote
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
    <section className={s.quotes}>
      <Container>
        {quotes.edges.map(({ node: { quote, name, position, photo } }) => (
          <figure className={s.quote} key={name}>
            <blockquote>
              <p>{quote}</p>
            </blockquote>
            <figcaption>
              <cite>
                <h3>{name}</h3>
              </cite>
              <span>{position}</span>
              {photo && (
                <GatsbyImage
                  image={photo.childImageSharp.gatsbyImageData}
                  alt={`Photo of ${name}`}
                />
              )}
            </figcaption>
          </figure>
        ))}
      </Container>
    </section>
  )
}

export default Quotes
