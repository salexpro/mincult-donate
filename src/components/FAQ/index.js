import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import Masonry from 'react-masonry-css'

import * as s from './FAQ.module.scss'

const FAQ = () => {
  const { faq } = useStaticQuery(graphql`
    {
      faq: allFaqJson {
        edges {
          node {
            question
            answer
          }
        }
      }
    }
  `)

  return (
    <Container id="faq" as="section" className={s.faq}>
      <h2>Frequently Asked Questions</h2>
      <Masonry
        breakpointCols={{
          default: 2,
          1023: 1,
        }}
        className={s.faq__items}
        columnClassName={s.faq__column}
      >
        {faq.edges.map(({ node: { question, answer } }) => (
          <div className={s.item} key={question}>
            <dt>
              <h3>{question}</h3>
            </dt>
            <dd>{answer}</dd>
          </div>
        ))}
      </Masonry>
    </Container>
  )
}

export default FAQ
