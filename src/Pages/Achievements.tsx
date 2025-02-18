import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import anime from 'animejs';

const Achievements: React.FC = () => {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a default duration

        // GSAP animation for the heading
        gsap.from('#achievements h3', {
            duration: 1,
            y: -50,
            opacity: 0,
            ease: 'power3.out',
        });

        // Anime.js animation for the list items
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
        'शिवाजी महाराजांनी मुघल साम्राज्य व आदिलशाही साम्राज्यांविरुद्ध अनेक लढाया जिंकल्या, ज्यामुळे भारतीय इतिहासात त्यांना एक अजरामर स्थान प्राप्त झाले.',
        'त्यांनी समुद्रदुर्ग निर्माण करून भारताच्या समुद्रकिनाऱ्याचे संरक्षण केले आणि भारताच्या समुद्रमार्गांवर व्यापार सुरक्षित केला.',
        'त्यांच्या न्यायप्रिय आणि लोककल्याणकारी प्रशासनामुळे त्यांचा आदर आणि प्रेम सर्वत्र आहे. त्यांच्या राज्याच्या शासकीय धोरणांनी सामान्य जनतेला उत्तम जीवनमान प्रदान केले.',
        'गड-किल्ल्यांच्या बांधकामामध्ये त्यांची दूरदृष्टी आणि धाडसी नेतृत्व दिसून येते. रायगड, सिंहगड, तोरणा किल्ला या किल्ल्यांचे महत्व आजही अभिमानास्पद आहे.',
        'त्यांनी स्वराज्य स्थापनेसाठी अत्यंत संघर्ष केला आणि भारतीय लोकांसाठी स्वातंत्र्याची ज्योत प्रज्वलित केली. त्यांच्या नेतृत्वाखाली मराठा साम्राज्याने एक स्वतंत्र आणि शक्तिशाली राज्य म्हणून अस्तित्वात आले.',
        'त्यांच्या युद्धनीती आणि कुशलतेमुळे इतिहासामध्ये ते अजरामर झाले. गोरिल्ला युद्धाचे तंत्र आणि दुहेरी आक्रमण यामुळे त्यांनी मुघल सम्राट औरंगजेबासमोर एक मोठा आव्हान उभा केला.',
        'शिवाजी महाराजांनी स्वराज्य स्थापनेसाठी लढाई केली, मात्र त्यांनी शोषण आणि अत्याचारास विरोध केला. हे त्यांचे धोरण समतावादी आणि लोककल्याणकारी होते.',
        'त्यांनी एक अत्यंत कार्यक्षम प्रशासन प्रणाली तयार केली, ज्यामुळे विविध क्षेत्रांतील मंत्री आणि अधिकारी योग्य कार्यप्रणालीच्या माध्यमातून प्रशासन करत होते.',
        'ते भारताच्या एकत्रित अस्मिता आणि सांस्कृतिक विरासत जपण्यासाठी सतत कटीबद्ध होते. त्यांचे युद्ध फक्त जमीन आणि सत्ता मिळवण्यासाठी नव्हते, तर भारतीय संस्कृतीला आणि स्वाभिमानाला संरक्षण देण्यासाठी होते.',
        'शिवाजी महाराजांनी संस्कृत आणि मराठीच्या प्रचारासाठी विशेष प्रयत्न केले. त्यांच्या राज्यात मराठी भाषा अधिकृत झाली आणि संस्कृत शिक्षणाचा प्रोत्साहन दिला.',
        'त्यांच्या विजयांमुळे भारतीय इतिहासात त्यांना एक अतुलनीय स्थान प्राप्त झाले आहे. त्यांनी भारतीय स्वातंत्र्य आणि अस्मिता राखण्यासाठी आपले जीवन समर्पित केले.',
    ];

    return (
        <motion.section
            id="achievements"
            className="py-10 px-6 bg-yellow-100 shadow-md rounded-lg max-w-4xl mx-auto mt-10"
            data-aos="fade-up"
        >

            <ul
                ref={listRef}
                className="text-gray-600 mt-4 space-y-4 leading-relaxed"
            >
                <h3 className="text-3xl font-bold text-gray-800">महान कार्य आणि विजय</h3>
                {achievements.map((achievement, index) => (
                    <li
                        key={index}
                        className="flex items-center"
                        data-aos="fade-up"
                    >
                        <span className="text-xl">&#8226;</span>
                        <p className="ml-2">{achievement}</p>
                    </li>
                ))}
            </ul>
        </motion.section>
    );
};

export default Achievements;
