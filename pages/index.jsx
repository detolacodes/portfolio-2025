import { Fragment } from 'react';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services'
import About from '../components/About/About'
import Portfolio from '../components/Portfolio/Portfolio'
import Testimonial from '../components/Testimonials/Testimonial'
import Contact from '../components/Contact/Contact'
import ScrollTop from '../components/scrollTop'
// import {notify} from '../notify'

export default function Home (){

  return (
        
      <>
        <Fragment>
          <Hero />
          <Services />
          <About />
          <Portfolio/>
          <Testimonial />
          <Contact />
          <ScrollTop />
          {/*<notify />*/}
        </Fragment>
      </>

  )
}

// export default Home