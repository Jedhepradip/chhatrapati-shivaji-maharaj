import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import anime from 'animejs';

import fort1 from "../assets/Fort2.jpg"
import fort2 from "../assets/Fort 3.jpg"
import fort3 from "../assets/Fort4.jpg"
import fort4 from "../assets/fort5.jpg"
import fort5 from "../assets/fort6.jpg"
import fort6 from "../assets/fort 7.jpg"
import fort7 from "../assets/fort8.jpg"
import fort8 from "../assets/fort9.jpg"
import fort9 from "../assets/fort10.jpg"
import fort10 from "../assets/fort11.jpg"

const Fort: React.FC = () => {
    const [selected, setSelected] = useState<number | null>(null); // ज्या कार्डवर क्लिक केले जाते ते ट्रॅक करण्यासाठी स्टेट
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // AOS च्या प्रारंभिक कालावधीसह प्रारंभ करा

        // GSAP अ‍ॅनिमेशन हेडिंगसाठी
        gsap.from('#achievements h3', {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: 'power3.out',
        });

        // Anime.js अ‍ॅनिमेशन लिस्ट आयटमसाठी
        if (listRef.current) {
            anime({
                targets: listRef.current.children,
                opacity: [0, 1],
                translateY: [50, 0],
                delay: anime.stagger(200),
                easing: 'easeOutExpo',
                duration: 1000,
            });
        }
    }, []);

    const achievements = [
        {
            name: 'रायगड किल्ला',
            image: fort1,
            description: 'रायगड किल्ला शिवाजी महाराजांचे मुख्य किल्ले होते. येथे त्यांचा राज्याभिषेक झाला.',
            date: '1674',
        },
        {
            name: 'सिंहगड किल्ला',
            image: fort2,
            description: 'सिंहगड किल्ला पुणे शहराच्या दक्षिणेस स्थित आहे, आणि शिवाजी महाराजांच्या सैन्याने याठिकाणी अनेक लढाया जिंकल्या.',
            date: '1670s',
        },
        {
            name: 'तोरणा किल्ला',
            image: fort3,
            description: 'तोरणा किल्ला शिवाजी महाराजांच्या पहिल्या किल्ल्यांपैकी एक होता.',
            date: '1645',
        },
        {
            name: 'लोहगड किल्ला',
            image: fort4,
            description: 'लोहगड किल्ला एक अत्यंत महत्त्वपूर्ण किल्ला होता, जो शिवाजी महाराजांच्या कारकिर्दीत महत्त्वपूर्ण ठरला.',
            date: '1657',
        },
        {
            name: 'कणकवली किल्ला',
            image: fort5,
            description: 'कणकवली किल्ला शिवाजी महाराजांच्या प्रशासनात महत्त्वपूर्ण होता.',
            date: '1670',
        },
        {
            name: 'मंडलिका किल्ला',
            image: fort6,
            description: 'मंडलिका किल्ला माणगावच्या काठावर स्थित आहे, ज्याने समुद्रमार्गाच्या संरक्षणासाठी महत्त्वपूर्ण भूमिका बजावली.',
            date: '1646',
        },
        {
            name: 'वयंगणी किल्ला',
            image: fort7,
            description: 'वयंगणी किल्ला शिवाजी महाराजांच्या सैन्याच्या रणनीतीसाठी अत्यंत महत्त्वपूर्ण होता.',
            date: '1670',
        },
        {
            name: 'गंधार किल्ला',
            image: fort8,
            description: 'गंधार किल्ला हा एक प्राचीन किल्ला आहे, जो शिवाजी महाराजांच्या काळात महत्त्वाचा ठरला.',
            date: '1640s',
        },
        {
            name: 'उचगाव किल्ला',
            image: fort9,
            description: 'उचगाव किल्ला शिवाजी महाराजांच्या संरक्षणात्मक धोरणांमध्ये महत्त्वपूर्ण स्थान बळकावतो.',
            date: '1665',
        },
        // {
        //     name: 'किल्ला आंबा',
        //     image: fort10,
        //     description: 'किल्ला आंबा शिवाजी महाराजांच्या कारकिर्दीत एक महत्त्वपूर्ण किल्ला होता.',
        //     date: '1640',
        // },
        {
            name: 'चांद्रगड किल्ला',
            image: fort10,
            description: 'चांद्रगड किल्ला कोंकण किनाऱ्याच्या दिशेने एक प्रमुख किल्ला होता, जो शिवाजी महाराजांनी संरक्षित केला.',
            date: '1670',
        }
    ];


    const handleCardClick = (index: number) => {
        // क्लिक केल्यावर निवडक रंग बदलण्यासाठी इंडेक्स टॉगल करा
        setSelected(prev => (prev === index ? null : index));
    };

    return (
        <motion.section
            id="achievements"
            className="py-10 px-6 bg-yellow-100 shadow-md rounded-lg max-w-4xl mx-auto mt-10"
            data-aos="fade-up"
        >
            <h3 className="text-2xl font-semibold text-gray-800">छत्रपती शिवाजी महाराजांचे किल्ले</h3>

            <ul
                ref={listRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4"
            >
                {achievements.map((achievement, index) => (
                    <motion.li
                        key={index}
                        className={`group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${selected === index ? 'bg-orange-500' : 'bg-yellow-500'}`}
                        onClick={() => handleCardClick(index)} // रंग बदलण्यासाठी क्लिक घ्या
                        data-aos="fade-up"
                    >
                        <img
                            src={achievement.image}
                            alt={achievement.name}
                            className="w-full h-48 object-cover group-hover:opacity-70 transition-opacity duration-300"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h4 className="text-xl font-semibold">{achievement.name}</h4>
                            <p className="mt-2">{achievement.description}</p>
                            <p className="mt-4 text-sm">{achievement.date}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </motion.section>
    );
};

export default Fort;
