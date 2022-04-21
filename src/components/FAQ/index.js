/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label */
import React from 'react'
import { Container } from 'react-bootstrap'
import Masonry from 'react-masonry-css'
import { Trans, useTranslation } from 'react-i18next'

import * as s from './FAQ.module.scss'

const FAQ = () => {
  const { t } = useTranslation('faq')

  const items = t('items', { returnObjects: true })

  return (
    <Container id="faq" as="section" className={s.faq}>
      <h2>{t('header')}</h2>
      <Masonry
        breakpointCols={{
          default: 2,
          1023: 1,
        }}
        className={s.faq__items}
        columnClassName={s.faq__column}
      >
        {items.map(({ question, answer }) => (
          <div className={s.item} key={question}>
            <dt>
              <h3>{question}</h3>
            </dt>
            <dd>
              <Trans
                t={t}
                i18nKey={answer}
                components={[
                  <strong />,
                  <span />,
                  <a
                    href="mailto:agency@arts.gov.ua"
                    target="_blank"
                    rel="noreferrer"
                  />,
                ]}
              />
            </dd>
          </div>
        ))}
      </Masonry>
    </Container>
  )
}

export default FAQ
