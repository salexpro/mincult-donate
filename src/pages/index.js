import React from 'react'

import Layout from '../components/Layout'
import S from '../components/seo'
import Hero from '../components/Hero'
import About from '../components/About'
import Culture from '../components/Culture'
import Quotes from '../components/Quotes'
import Banner from '../components/Banner'
import FAQ from '../components/FAQ'

const IndexPage = () => (
  <Layout>
    <S />
    <Hero />
    <About />
    <Culture />
    <Quotes />
    <Banner />
    <FAQ />
  </Layout>
)

export default IndexPage
