import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'
import { useTranslation, Trans } from 'react-i18next'

import * as s from './Culture.module.scss'

const Culture = () => {
  const { t } = useTranslation('culture')

  const data = useStaticQuery(graphql`
    {
      allCarouselJson {
        edges {
          node {
            key
            photo {
              childImageSharp {
                blurHash {
                  base64Image
                }
                gatsbyImageData(placeholder: NONE, width: 360, quality: 100)
              }
            }
            images {
              childImageSharp {
                blurHash {
                  base64Image
                }
                gatsbyImageData(placeholder: NONE, height: 240, quality: 100)
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className={s.culture}>
      <Container className={s.culture__container}>
        <h2>{t('header')}</h2>
        <span className={s.culture__lead}>{t('lead')}</span>
      </Container>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView="auto"
        centeredSlides
        speed={2000}
        pagination={{
          clickable: true,
        }}
        spaceBetween={12}
        // loop
        setWrapperSize
        rewind
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        initialSlide={1}
        breakpoints={{
          640: {
            spaceBetween: 32,
          },
          1024: {
            spaceBetween: 40,
          },
          1240: {
            spaceBetween: 48,
          },
        }}
        className={s.carousel}
      >
        {data.allCarouselJson.edges.map(({ node: { key, photo, images } }) => (
          <SwiperSlide className={s.carousel__item} key={key}>
            <div className={cn(s.carousel__content, { [s.photo]: photo })}>
              {photo && (
                <GatsbyImage
                  image={{
                    ...photo.childImageSharp.gatsbyImageData,
                    placeholder: {
                      fallback: photo.childImageSharp.blurHash.base64Image,
                    },
                  }}
                  alt={`Photo of ${t(`carousel.${key}.title`)}`}
                  className={s.carousel__photo}
                />
              )}
              <h3
                className={cn('h1', s.carousel__header)}
                dangerouslySetInnerHTML={{ __html: t(`carousel.${key}.title`) }}
              />
              <div className={s.carousel__descr}>
                {t(`carousel.${key}.descr`, { returnObjects: true }).map(
                  (p, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <p key={`p${i}`}>
                      <Trans
                        t={t}
                        i18nKey={`carousel.${key}.descr.${i}`}
                        components={[<strong />, <span />]}
                      />
                    </p>
                  )
                )}
              </div>
            </div>

            <div className={s.carousel__images}>
              {images.map(({ childImageSharp }, i) => (
                <GatsbyImage
                  // eslint-disable-next-line react/no-array-index-key
                  key={`img${i}`}
                  image={{
                    ...childImageSharp.gatsbyImageData,
                    placeholder: {
                      fallback: childImageSharp.blurHash.base64Image,
                    },
                  }}
                  alt={`Image ${i + 1}`}
                  className={s.carousel__img}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Culture
