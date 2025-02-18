import React from 'react'
import History from './History'
import Achievements from './Achievements'
// import Contact from './Contact'
import Image from './Gallery'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import Slider from 'react-slick';

// import silderImg1 from "../assets/Chhatrapti Shivaji Maharaj Img.webp"
// import silderImg2 from "../assets/Maharaji Img.jpg"
// import silderImg3 from "../assets/silder Img 1.webp"
import silderImg4 from "../assets/silder img 3.jpg"
import silderImg5 from "../assets/silder img 5.jpg"
import silderImg6 from "../assets/silder img6.jpg"
import Fort from './fort'

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 900,
  arrows: true,
};

const Home: React.FC = () => {
  return (
    <>

      <div className="bg-yellow-50 min-h-screen">
        {/* Hero Section */}
        <section id="home" className="text-center py-20 px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            छत्रपती शिवाजी महाराज: एक युगप्रवर्तक नायक
          </motion.h1>
          <motion.p
            className="text-xl mt-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            स्वराज्य स्थापनेसाठी संघर्ष करणारे, शौर्य आणि नेतृत्वाचे प्रतीक असलेले छत्रपती शिवाजी महाराज.
          </motion.p>


          {/* Subheading */}
          <motion.h2
            className="text-4xl font-semibold text-gray-800 mt-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            महा योद्धा मराठा साम्राज्याचा संस्थापक
          </motion.h2>
          <Image />

          <motion.p
            className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            छत्रपती शिवाजी महाराज हे मराठा साम्राज्याचे संस्थापक होते. त्यांच्या शौर्य, युद्धनीती आणि प्रशासन कौशल्यामुळे ते अजरामर झाले.
          </motion.p>
        </section>

        <div className="video-container py-1">
          <h2 className="text-3xl font-bold text-center mb-6">
            छत्रपती शिवाजी महाराज: इतिहासातील एक अजरामर नायक
          </h2>
        </div>
      </div>

      <div className="min-h-screen bg-yellow-50">
        {/* Image Slider */}
        <section className="py-6 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              छत्रपती शिवाजी महाराज
            </h2>
            <Slider {...sliderSettings}>
              <div className='overflow-hidden rounded-lg shadow-lg'>
                <img
                  src={silderImg6}
                  alt="Image 1"
                  className="w-full h-[500px] object-cover transition-all duration-300 group-hover:brightness-75"
                />
              </div>
              <div>
                <img src={silderImg4} alt="Image 2" className="w-full rounded-lg shadow-lg h-[500px]" />
              </div>
              <div>
                <img src={silderImg5} alt="Image 3" className="w-full rounded-lg shadow-lg h-[500px]" />
              </div>
            </Slider>
          </div>
        </section>

        {/* History Section */}
        <History />
        <Fort />
        {/* Achievements Section */}
        <Achievements />
        {/* Contact Section */}
        {/* <Contact /> */}
      </div>
    </>
  )
}

export default Home