import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'

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
    <Container as="section" className={s.faq}>
      <h2>Frequently Asked Questions</h2>
      <div className={s.faq__items}>
        {faq.edges.map(({ node: { question, answer } }) => (
          <div className={s.item} key={question}>
            <h3>{question}</h3>
            <span>{answer}</span>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default FAQ
