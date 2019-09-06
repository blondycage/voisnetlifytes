import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import NotificationsForm from '../components/notification';
const IndexPage = () => {
  
  return (
    <Layout>
      <NotificationsForm/>
      <h1>Hi people</h1>
      <p>this is vois home page.</p>
      <p>we do awesome stuff</p>
  
      
    </Layout>
  )
}

export default IndexPage
