import React from 'react'
import History from './History'
import Achievements from './Achievements'
import Contact from './Contact'
import Image from './Gallery'

const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-yellow-50">
        {/* Hero Section */}
        <section id="home" className="text-center py-20 px-4">
          <h2 className="text-4xl font-semibold text-gray-800">महा योद्धा मराठा साम्राज्याचा संस्थापक</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            छत्रपती शिवाजी महाराज हे मराठा साम्राज्याचे संस्थापक होते. त्यांच्या शौर्य, युद्धनीती आणि प्रशासन कौशल्यामुळे ते अजरामर झाले.
          </p>
        </section>
        {/* Image Section */}
        <Image />
        {/* History Section */}
        <History />

        <section id="forts" className="py-10 px-6 bg-yellow-100 shadow-md rounded-lg max-w-4xl mx-auto mt-10">
          <h3 className="text-2xl font-semibold text-gray-800">छत्रपती शिवाजी महाराजांचे किल्ले</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { name: "रायगड", img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Raigad_Fort.jpg", desc: "शिवाजी महाराजांचा राज्याभिषेक येथे झाला.", year: 1674 },
              { name: "प्रतापगड", img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Pratapgad_fort.jpg", desc: "अफजल खानावरील विजय मिळवलेला ऐतिहासिक किल्ला.", year: 1659 },
              { name: "सिंहगड", img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Sinhagad_Fort_Pune.jpg", desc: "तानाजी मालुसरे यांच्या शौर्याचे प्रतीक.", year: 1670 },
              { name: "राजगड", img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Rajgad_Fort.jpg", desc: "मराठा साम्राज्याची पहिली राजधानी.", year: 1648 },
              { name: "तोरणा", img: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Torna_Fort.jpg", desc: "शिवाजी महाराजांचा पहिला जिंकलेला किल्ला.", year: 1646 }
            ].map((fort, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <img src={fort.img} alt={fort.name} className="w-full h-40 object-cover rounded-md" />
                <h4 className="text-xl font-semibold mt-2">{fort.name}</h4>
                <p className="text-gray-600 mt-1">{fort.desc}</p>
                <p className="text-gray-500 text-sm">जिंकलेले वर्ष: {fort.year}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Achievements Section */}
        <Achievements />
        {/* Contact Section */}
        <Contact />
      </div>
    </>
  )
}

export default Home
