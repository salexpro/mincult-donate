import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { GatsbyImage } from 'gatsby-plugin-image'
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
                gatsbyImageData(placeholder: NONE, width: 320, quality: 100)
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
      <Container>
        <h2>Protect Ukrainian culture, save world heritage</h2>
        <p>
          The collected funds will be used for protection, evacuation,
          digitization and preservation of cultural property, support the
          activities of cultural and art institutions, creative industries,
          including media, who were injured, damaged, or destroyed as a result
          of hostilities during the russian aggression against Ukraine.
        </p>
      </Container>
      <Swiper
        modules={[Pagination]}
        spaceBetween={48}
        slidesPerView={3}
        centeredSlides
        pagination={{
          dynamicBullets: true,
        }}
        className={s.carousel}
      >
        {data.allCarouselJson.edges.map(
          ({ node: { title, descr, photo, images } }) => (
            <SwiperSlide className={s.carousel__item} key={title}>
              {photo && (
                <GatsbyImage
                  image={{
                    ...photo.childImageSharp.gatsbyImageData,
                    placeholder: {
                      fallback: photo.childImageSharp.blurHash.base64Image,
                    },
                  }}
                  alt={`Photo of ${title}`}
                />
              )}
              <h3 className="h1">{title}</h3>
              <div
                className={s.carousel__descr}
                dangerouslySetInnerHTML={{ __html: descr }}
              />
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
