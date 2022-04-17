import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import cn from 'classnames'

import * as s from './Culture.module.scss'

const Culture = () => {
  const data = useStaticQuery(graphql`
    {
      allCarouselJson {
        edges {
          node {
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
            descr
            title
          }
        }
      }
    }
  `)

  return (
    <section className={s.culture}>
      <Container className={s.culture__container}>
        <h2>Protect Ukrainian culture, save world heritage</h2>
        <span className={s.culture__lead}>
          The collected funds will be used for protection, evacuation,
          digitization and preservation of cultural property, support the
          activities of cultural and art institutions, creative industries,
          including media, who were injured, damaged, or destroyed as a result
          of hostilities during the russian aggression against Ukraine.
        </span>
      </Container>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={48}
        slidesPerView="auto"
        centeredSlides
        speed={2000}
        pagination={{
          clickable: true,
        }}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={s.carousel}
      >
        {data.allCarouselJson.edges.map(
          ({ node: { title, descr, photo, images } }) => (
            <SwiperSlide className={s.carousel__item} key={title}>
              <div className={s.carousel__container}>
                {photo && (
                  <GatsbyImage
                    image={{
                      ...photo.childImageSharp.gatsbyImageData,
                      placeholder: {
                        fallback: photo.childImageSharp.blurHash.base64Image,
                      },
                    }}
                    alt={`Photo of ${title}`}
                    className={s.carousel__photo}
                  />
                )}
                <div className={s.carousel__content}>
                  <h3 className={cn('h1', s.carousel__header)}>{title}</h3>
                  <div
                    className={s.carousel__descr}
                    dangerouslySetInnerHTML={{ __html: descr }}
                  />
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
          )
        )}
      </Swiper>
    </section>
  )
}

export default Culture
