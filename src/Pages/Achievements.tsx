import React from 'react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
    const achievements = [
        'शिवाजी महाराजांनी मुघल आणि आदिलशाही साम्राज्यांविरुद्ध अनेक विजय मिळवले.',
        'त्यांनी नौदलाची स्थापना करून भारताच्या किनारपट्टीचे रक्षण केले.',
        'त्यांच्या न्यायप्रिय आणि लोककल्याणकारी प्रशासनामुळे त्यांचा आदर आणि प्रेम सर्वत्र आहे.',
        'गड-किल्ल्यांच्या बांधकामामध्ये त्यांची दूरदृष्टी आणि धाडसी नेतृत्व दिसून येते.',
        'त्यांनी स्वराज्याचे स्वप्न सत्यात उतरवले.',
        'त्यांच्या युद्धनीती आणि कुशलतेमुळे इतिहासामध्ये ते अजरामर झाले आहेत.',
    ];

    return (
        <motion.section
            id="achievements"
            className="py-10 px-6 bg-yellow-100 shadow-md rounded-lg max-w-4xl mx-auto mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="text-3xl font-bold text-gray-800">महान कार्य आणि विजय</h3>
            <ul className="text-gray-600 mt-4 space-y-4 leading-relaxed">
                {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center">
                        <span className="text-xl">&#8226;</span>
                        <p className="ml-2">{achievement}</p>
                    </li>
                ))}
            </ul>
        </motion.section>
    );
};

export default Achievements;
