import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

const History: React.FC = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <>
            {/* <section
                id="history"
                className="py-10 px-6 bg-yellow-100 shadow-md rounded-lg max-w-4xl mx-auto"
                data-aos="fade-up"
            >
                <motion.h3
                    className="text-2xl font-semibold text-gray-800"
                    initial={{ opacity: 0 }}
                    data-aos="fade-up"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    प्रारंभिक जीवन आणि यश
                </motion.h3>


                <motion.p
                    className="text-gray-600 mt-2"
                    data-aos="fade-up"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    छत्रपती शिवाजी महाराज यांचा जन्म १९ फेब्रुवारी १६३० रोजी शिवनेरी किल्ल्यावर झाला. स्वराज्य स्थापन
                    करण्याचा त्यांचा दृष्टिकोन आणि त्यांच्या नाविन्यपूर्ण युद्धनीतीमुळे ते महान शासक बनले. त्यांच्या लहानपणीच्या
                    शिक्षणाने त्यांना रणनिती आणि प्रशासनाची चांगली गोडी लागली.
                </motion.p>
                <motion.p
                    className="text-gray-600 mt-4"
                    data-aos="fade-up"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    शिवाजी महाराजांच्या युद्धनीतींमध्ये असलेल्या चातुर्यानेच ते आपले राज्य विस्तारित करू शकले. त्यांच्या
                    यशाचा आणखी एक महत्वाचा घटक म्हणजे त्यांच्या राजकारणी बुद्धीमत्तेचा उपयोग, ज्यामुळे त्यांनी मुघल
                    साम्राज्याशी देखील संघर्ष करून स्वराज्याची स्थापना केली.
                </motion.p>

                <motion.p
                    className="text-gray-600 mt-4"
                    data-aos="fade-up"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    शिवाजी महाराजांनी १६७४ मध्ये रायगड किल्ल्यावर राज्याभिषेक केला. त्यांचा राज्याभिषेक एक ऐतिहासिक
                    घटना होती, कारण ते मुघल साम्राज्य आणि इतर बाह्य आक्रमणकारकांपासून स्वराज्याचे रक्षण करत होते.
                    त्यांनी शेतकऱ्यांचे कल्याण, शासकीय व्यवस्था, आणि न्यायाच्या मार्गाने राज्य चालवले.
                </motion.p>

                <motion.p
                    className="text-gray-600 mt-4"
                    data-aos="fade-up"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    शिवाजी महाराजांचे साम्राज्य फक्त लढायांमध्येच नाही, तर समाजातील समृद्धी, न्याय, आणि सुरक्षा
                    सुनिश्चित करणाऱ्या व्यवस्थांमध्येही योगदान देत होते. त्यांनी सामाजिक आणि धार्मिक एकतेला महत्त्व
                    दिले, आणि विविध जाती आणि धर्मांच्या लोकांना समान न्याय दिला.
                </motion.p>

                <motion.p
                    className="text-gray-600 mt-4"
                    data-aos="fade-up"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.3 }}
                >
                    महाराजांनी त्यांच्या राज्यात विविध राजकारणी, सांस्कृतिक, आणि तांत्रिक क्षेत्रांत बदल घडवले.
                    त्यांनी लोकांच्या जीवनशैलीत सुधारणा केली, गावात चांगल्या पाणीपुरवठ्याच्या आणि सिंचनाच्या व्यवस्था
                    सुरू केल्या. तसेच, त्यांनी विविध किल्ल्यांचे पुनर्निर्माण आणि संरक्षण सुनिश्चित केले.
                </motion.p>

                <motion.p
                    className="text-gray-600 mt-4"
                    initial={{ opacity: 0 }}
                    data-aos="fade-up"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    शिवाजी महाराजांच्या समर्पणामुळे त्यांना जनतेत अत्यंत लोकप्रियता मिळाली. त्यांच्या नेतृत्वामुळेच
                    स्वराज्याला स्वतंत्रता आणि दृढताही मिळाली. आजही, त्यांचा आदर्श प्रेरणादायी आहे, आणि ते
                    भारतीय इतिहासातील एक शौर्यपूर्ण नेता म्हणून ओळखले जातात.
                </motion.p>

                <motion.p
                    className="text-gray-600 mt-4"
                    initial={{ opacity: 0 }}
                    data-aos="fade-up"
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.7 }}
                >
                    त्यांच्या निधनानंतर, छत्रपती शिवाजी महाराजांचा आदर्श आणि कार्यप्रणाली सदैव प्रेरणादायी राहिली.
                    त्यांचे स्वराज्य हे एक प्रेरणास्त्रोत आहे, जे आजच्या पिढीसाठी देखील महत्त्वाचे आहे.
                </motion.p>

                <motion.p
                    className="text-gray-600 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    data-aos="fade-up"
                >
                    त्यांच्या कार्यशक्तीने प्रेरित होऊन, भारतभरात स्वराज्याची तत्त्वे अधिक मजबूत झाली आणि स्वातंत्र्य
                    संग्रामाच्या प्रेरणा मिळाल्या. त्यांचा लौकिक आजही जगभरात वाजत आहे.
                </motion.p>
            </section> */}


            <section className="py-10 px-6 bg-yellow-100 mt-10 shadow-md rounded-lg max-w-4xl mx-auto">
                <motion.h3
                    className="text-2xl font-semibold text-gray-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    data-aos="fade-up"
                >
                    छत्रपती शिवाजी महाराज: प्रारंभिक जीवन आणि यश
                </motion.h3>

                <motion.p className="text-gray-600 mt-2" data-aos="fade-right">
                    छत्रपती शिवाजी महाराज हे भारतीय इतिहासातील एक अत्यंत महत्त्वाचे व्यक्तिमत्त्व आहेत. त्यांचा जन्म १९ फेब्रुवारी १६३० रोजी शिवनेरी किल्ल्यावर झाला आणि त्यांच्या कर्तृत्वामुळे ते एक महान शासक, रणनितीकार आणि समाजसुधारक म्हणून ओळखले जातात. त्यांचे जीवन आणि कार्य हे भारतीय लोकांसाठी प्रेरणादायक ठरले आहे.
                </motion.p>

                <motion.h4 className="text-xl font-semibold text-gray-800 mt-6" data-aos="fade-up">
                    शिवाजी महाराजांचे बालपण आणि प्रारंभिक जीवन
                </motion.h4>
                <motion.p className="text-gray-600 mt-2" data-aos="fade-left">
                    शिवाजी महाराजांचा जन्म शाहाजी भोसले आणि जिजाबाई यांच्या कुटुंबात झाला. त्यांचे बालपण खूप कठीण होते, मात्र त्यांना आई जिजाबाईंच्या मार्गदर्शनाखाली शौर्य, नेतृत्व आणि युद्धकला शिकायला मिळाली. शिवाजी महाराजांचे लहान वयातच स्वराज्य स्थापनेसाठी एक नवा मार्ग शोधण्याचे वचन होते.
                </motion.p>

                <motion.p className="text-gray-600 mt-2" data-aos="fade-left">
                    त्यांच्या वयाच्या सहाव्या वर्षीच त्यांना किल्ल्यांचे संरक्षण, सैन्याचे नेतृत्व आणि लहान लढायांमध्ये सहभागी होण्याचे शिक्षण मिळाले होते. त्यांची आई जिजाबाई त्यांना धर्म, नीतिमत्ता आणि स्वातंत्र्याचे महत्त्व शिकवत होती, आणि यामुळे त्यांना भारताच्या स्वातंत्र्यप्राप्तीसाठी कार्य करण्याची प्रेरणा मिळाली.
                </motion.p>

                <motion.h4 className="text-xl font-semibold text-gray-800 mt-6" data-aos="fade-up">
                    स्वराज्य स्थापनेचा संकल्प
                </motion.h4>
                <motion.p className="text-gray-600 mt-2" data-aos="fade-right">
                    शिवाजी महाराजांचा मुख्य उद्देश होता - "स्वराज्य", म्हणजेच आपल्या देशात परकीय शासकांपासून स्वतंत्र राजवटीची स्थापना. त्यांचे स्वराज्य एक समतावादी, न्यायपूर्ण आणि मानवाधिकारांची कदर करणारे राज्य होते. त्यासाठी त्यांनी संघर्ष केला आणि अनेक मोठ्या किल्ल्यांवर विजय मिळवला.
                </motion.p>

                <motion.h4 className="text-xl font-semibold text-gray-800 mt-6" data-aos="fade-up">
                    शिवाजी महाराजांचे किल्ले आणि सैन्य
                </motion.h4>
                <motion.p className="text-gray-600 mt-2" data-aos="fade-left">
                    शिवाजी महाराजांनी किल्ले आणि सैन्य हे त्यांच्या साम्राज्याच्या रक्षणासाठी अत्यंत महत्त्वाचे मानले. त्यांची युद्धनीती खास गोरिल्ला युद्धावर आधारित होती, ज्यामुळे ते जास्त शक्तिशाली मुघल साम्राज्याशी लढा देऊ शकले.
                </motion.p>

                <motion.ul className="text-gray-600 mt-4 list-disc pl-5" data-aos="zoom-in">
                    <motion.li className="mt-2" data-aos="slide-up">
                        रायगड किल्ला, तोरणा किल्ला, सिंहगड किल्ला, लोहगड किल्ला, महाड किल्ला आणि अजिंक्यतारा किल्ला यांचा समावेश आहे.
                    </motion.li>
                    <motion.li className="mt-2" data-aos="slide-up">
                        शिवाजी महाराजांचा सैन्य संगठन अत्यंत शिस्तबद्ध होता, ज्यामुळे त्यांच्या सैन्याला विविध आघाड्यांवर लढायला सक्षम बनवले.
                    </motion.li>
                </motion.ul>

                <motion.h4 className="text-xl font-semibold text-gray-800 mt-6" data-aos="fade-up">
                    सम्राट शौर्य आणि नाविन्यपूर्ण युद्धनीती
                </motion.h4>
                <motion.p className="text-gray-600 mt-2" data-aos="fade-right">
                    शिवाजी महाराजांची युद्धनीती खास होती. ते नेहमीच वेगवेगळ्या धोरणांचा वापर करत आणि तातडीने निर्णय घेण्यास सक्षम होते. त्यांचा गोरिल्ला युद्ध आणि वाटेने लढाई या शस्त्रांचा वापर करत, त्यांनी युद्धामध्ये विजय मिळवले.
                </motion.p>

                <motion.h4 className="text-xl font-semibold text-gray-800 mt-6" data-aos="fade-up">
                    प्रशासनातील सुधारणा
                </motion.h4>
                <motion.p className="text-gray-600 mt-2" data-aos="fade-left">
                    शिवाजी महाराजांनी एक सक्षम आणि आधुनिक प्रशासन स्थापिले. त्यांच्याकडे चांगले वित्तीय व्यवस्थापन, उच्च न्यायव्यवस्था, सुव्यवस्थित सैनिकी तंत्र, आणि प्रभावी गुप्तहेर यंत्रणा होती.
                </motion.p>

                <motion.h4 className="text-xl font-semibold text-gray-800 mt-6" data-aos="fade-up">
                    धार्मिक आणि सामाजिक योगदान
                </motion.h4>
                <motion.p className="text-gray-600 mt-2" data-aos="fade-right">
                    शिवाजी महाराज एक धर्मनिरपेक्ष शासक होते. त्यांनी विविध धर्मांमध्ये समानतेचा आदर ठेवला आणि सर्व धर्मांच्या लोकांना समान हक्क दिले.
                </motion.p>

                <motion.h4 className="text-xl font-semibold text-gray-800 mt-6" data-aos="fade-up">
                    शिवाजी महाराजांचा वारसा
                </motion.h4>
                <motion.p className="text-gray-600 mt-2" data-aos="fade-left">
                    शिवाजी महाराजांचे नेतृत्व आजही प्रेरणादायक आहे. त्यांचा जीवनकार्य आणि त्यांच्या ध्येयाने भारतीय स्वातंत्र्य संग्रामावर मोठा प्रभाव टाकला.
                </motion.p>

                <motion.h4 className="text-xl font-semibold text-gray-800 mt-6" data-aos="fade-up">
                    शिवाजी महाराजांचे अंतिम दिवस
                </motion.h4>
                <motion.p className="text-gray-600 mt-2" data-aos="fade-right">
                    ३ एप्रिल १६८० रोजी रायगड किल्ल्यावर शिवाजी महाराजांचे निधन झाले. त्यांच्या मृत्यूचे आघात संपूर्ण मराठा साम्राज्याला होते, पण त्यांचा वारसा आणि ध्येय पुढील पिढ्यांनी चालवले.
                </motion.p>

                <motion.p className="text-gray-600 mt-4" data-aos="fade-up">
                    शिवाजी महाराजांचे जीवन हे केवळ एक रणनितीकार म्हणूनच नाही, तर एक समर्पित शासक, समाजसुधारक आणि प्रेरणादायक नेता म्हणून देखील महत्त्वाचे आहे.
                </motion.p>
            </section>
        </>
    )
}

export default History