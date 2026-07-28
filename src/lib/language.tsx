"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "mr";

type Translations = Record<string, Record<Language, string>>;

const translations: Translations = {
  /* Nav */
  "nav.home": { en: "Home", mr: "मुखपृष्ठ" },
  "nav.about": { en: "About Us", mr: "आमच्याबद्दल" },
  "nav.academics": { en: "Academic", mr: "शैक्षणिक" },
  "nav.facilities": { en: "Facilities", mr: "सुविधा" },
  "nav.highlights": { en: "Highlights", mr: "ठळक बाबी" },
  "nav.gallery": { en: "Gallery", mr: "दालन" },
  "nav.alumni": { en: "Alumni", mr: "माजी विद्यार्थी" },
  "nav.contact": { en: "Contact", mr: "संपर्क" },
  "nav.admissions": { en: "Admissions", mr: "प्रवेश" },
  "nav.menu": { en: "Menu", mr: "मेनू" },
  "nav.schoolName": { en: "Dnyanada Vidya Mandir", mr: "ज्ञानदा विद्या मंदिर" },

  /* Footer */
  "footer.tagline": { en: "Est. 1975 · Ulhasnagar-4", mr: "स्था. १९७५ · उल्हासनगर-४" },
  "footer.desc": {
    en: "Empowering Minds, Enriching Values, Building a Brighter Future — since 1975 in Ulhasnagar-4.",
    mr: "ज्ञानातून प्रगती, संस्कारातून व्यक्तिमत्त्व आणि शिक्षणातून उज्ज्वल भविष्य — उल्हासनगर-४ मध्ये १९७५ पासून.",
  },
  "footer.explore": { en: "Explore", mr: "एक्सप्लोर" },
  "footer.reachUs": { en: "Reach Us", mr: "आमच्यापर्यंत पोहोचा" },
  "footer.rights": { en: "All rights reserved.", mr: "सर्व हक्क राखीव." },
  "footer.affiliation": { en: "Affiliated to the Maharashtra State Board", mr: "महाराष्ट्र राज्य मंडळाशी संलग्न" },

  /* Home */
  "home.hero.eyebrow": { en: "Since 1975 · Ulhasnagar-4", mr: "१९७५ पासून · उल्हासनगर-४" },
  "home.hero.tagline": {
    en: '"Empowering Minds, Enriching Values, Building a Brighter Future."',
    mr: '"ज्ञानातून प्रगती, संस्कारातून व्यक्तिमत्त्व आणि शिक्षणातून उज्ज्वल भविष्य!"',
  },
  "home.hero.motto": { en: '"Tamaso Maa Jyotirgamaya"', mr: '"तमसो मा ज्योतिर्गमय"' },
  "home.hero.title": {
    en: "A legacy of knowledge, values and progress",
    mr: "ज्ञान, संस्कार आणि प्रगतीचा वारसा",
  },
  "home.hero.desc": {
    en: "For five decades, Dnyanada Vidya Mandir has nurtured students with knowledge, values and quality education — shaping confident, capable and responsible citizens.",
    mr: "पाच दशकांपासून ज्ञानदा विद्या मंदिरने विद्यार्थ्यांना ज्ञान, संस्कार आणि गुणवत्तापूर्ण शिक्षण देऊन आत्मविश्वासू, सक्षम आणि जबाबदार नागरिक घडवले आहेत.",
  },
  "home.hero.cta": { en: "Admissions 2026–27", mr: "प्रवेश २०२६-२७" },
  "home.hero.cta2": { en: "Our Story", mr: "आमची गोष्ट" },
  "home.hero.badge": { en: "Years of service", mr: "वर्षांची सेवा" },

  "home.stats.founded": { en: "Founded", mr: "स्थापना" },
  "home.stats.students": { en: "Students", mr: "विद्यार्थी" },
  "home.stats.educators": { en: "Educators", mr: "शिक्षक" },
  "home.stats.results": { en: "Board Results", mr: "बोर्ड निकाल" },

  "home.closing": {
    en: "Dnyanada Vidya Mandir — an enduring journey of knowledge, values and progress!",
    mr: "ज्ञानदा विद्या मंदिर — ज्ञान, संस्कार आणि प्रगतीची अखंड वाटचाल!",
  },

  /* About – History (verbatim) */
  "about.history.p1": {
    en: "Dnyanada Vidya Mandir, Ulhasnagar-4 was established in 1975. The school's academic journey began through Priyadarshini Shikshan Prasarak Mandal. The institution was founded with the noble goal of providing students with knowledge, values and excellent moral grounding through education, and fostering their holistic development.",
    mr: "ज्ञानदा विद्या मंदिर, उल्हासनगर-४ या शाळेची स्थापना सन १९७५ मध्ये झाली. शाळेची शैक्षणिक वाटचाल प्रियदर्शनी शिक्षण प्रसारक मंडळ या संस्थेच्या माध्यमातून सुरू झाली. शिक्षणाच्या माध्यमातून समाजातील विद्यार्थ्यांना ज्ञान, संस्कार आणि उत्तम मूल्यांची शिदोरी देऊन त्यांचा सर्वांगीण विकास घडवून आणणे, या उदात्त ध्येयाने संस्थेची स्थापना करण्यात आली.",
  },
  "about.history.p2": {
    en: "Founder Smt. Malati Devalalikar, who laid the foundation of this educational work and made a significant contribution to the establishment of the institution, recognized the importance of education and opened the doors of knowledge for students. Through her vision, dedication and educational philosophy, Priyadarshini Shikshan Prasarak Mandal was established, and through that same educational journey, Dnyanada Vidya Mandir continues this tradition of knowledge, values and quality education.",
    mr: "या शैक्षणिक कार्याची पायाभरणी करणाऱ्या आणि संस्थेच्या स्थापनेत महत्त्वपूर्ण योगदान देणाऱ्या संस्थापिका श्रीमती मालती देवळालीकर यांनी शिक्षणाचे महत्त्व ओळखून विद्यार्थ्यांसाठी ज्ञानाचे दालन खुले करण्याचे कार्य केले. त्यांच्या दूरदृष्टी, समर्पण आणि शैक्षणिक ध्येयधोरणातून प्रियदर्शनी शिक्षण प्रसारक मंडळ या संस्थेची उभारणी झाली आणि त्याच शैक्षणिक प्रवासातून ज्ञानदा विद्या मंदिर ही ज्ञान, संस्कार आणि गुणवत्तापूर्ण शिक्षणाची परंपरा पुढे नेत आहे.",
  },
  "about.history.p3": {
    en: "From 1975 to the present day, Dnyanada Vidya Mandir has consistently focused on the holistic development of students. Adapting necessary changes in the education system according to changing times, the school strives to provide students with modern knowledge, technology, skills and value-based education. Along with academic quality, the school runs various activities to develop discipline, values, creativity, self-confidence, social commitment and a sense of responsible citizenship in students.",
    mr: "सन १९७५ पासून आजपर्यंत ज्ञानदा विद्या मंदिरने विद्यार्थ्यांच्या सर्वांगीण विकासाला केंद्रस्थानी ठेवून आपली शैक्षणिक वाटचाल सातत्याने सुरू ठेवली आहे. बदलत्या काळानुसार शिक्षणपद्धतीमध्ये आवश्यक ते बदल स्वीकारत शाळा विद्यार्थ्यांना आधुनिक ज्ञान, तंत्रज्ञान, कौशल्ये आणि मूल्याधिष्ठित शिक्षण देण्यासाठी प्रयत्नशील आहे. शैक्षणिक गुणवत्तेसोबतच विद्यार्थ्यांमध्ये शिस्त, संस्कार, सर्जनशीलता, आत्मविश्वास, सामाजिक बांधिलकी आणि जबाबदार नागरिकत्वाची भावना विकसित करण्यासाठी शाळा विविध उपक्रम राबविते.",
  },
  "about.history.p4": {
    en: "Today, Dnyanada Vidya Mandir is inspired by the thought — \"Empowering Minds, Enriching Values, Building a Brighter Future\" — and is working for the bright future of students. Preserving the legacy of the educational thoughts and service-oriented approach of founder Smt. Malati Devalalikar, the school continues the work of shaping capable, sensitive, value-driven and responsible citizens.",
    mr: "आज ज्ञानदा विद्या मंदिर ही “ज्ञानातून प्रगती, संस्कारातून व्यक्तिमत्त्व आणि शिक्षणातून उज्ज्वल भविष्य” या विचाराने प्रेरित होऊन विद्यार्थ्यांच्या उज्ज्वल भविष्यासाठी कार्यरत आहे. संस्थेच्या संस्थापिका श्रीमती मालती देवळालीकर यांच्या शैक्षणिक विचारांचा आणि सेवाभावी दृष्टिकोनाचा वारसा जपत शाळा विद्यार्थ्यांना सक्षम, संवेदनशील, संस्कारक्षम आणि जबाबदार नागरिक घडविण्याचे कार्य पुढे नेत आहे.",
  },

  /* About – Mission (verbatim) */
  "about.mission.text": {
    en: "To nurture the latent talents of every student through quality and value-based education, develop their intellectual, emotional, social, physical and creative abilities, and shape them into confident, capable, sensitive and responsible citizens.",
    mr: "गुणवत्तापूर्ण आणि मूल्याधिष्ठित शिक्षणाच्या माध्यमातून प्रत्येक विद्यार्थ्याच्या सुप्त गुणांना वाव देणे, त्याच्या बौद्धिक, भावनिक, सामाजिक, शारीरिक आणि सर्जनशील क्षमतांचा विकास घडविणे आणि त्याला आत्मविश्वासू, सक्षम, संवेदनशील व जबाबदार नागरिक म्हणून घडविणे.",
  },

  /* About – Logo (verbatim) */
  "about.logo.text": {
    en: "Dnyanada Vidya Mandir, Ulhasnagar-4 is working through Priyadarshini Shikshan Prasarak Mandal to provide students with knowledge, values and quality education. The school logo is a symbol of the institution's educational philosophy and the holistic development of students. The various elements in the logo represent knowledge, education, values, progress and a bright future.",
    mr: "ज्ञानदा विद्या मंदिर, उल्हासनगर-४ हे प्रियदर्शनी शिक्षण प्रसारक मंडळ या संस्थेच्या माध्यमातून विद्यार्थ्यांना ज्ञान, संस्कार आणि गुणवत्तापूर्ण शिक्षण देण्यासाठी कार्यरत आहे. शाळेचा लोगो हा संस्थेच्या शैक्षणिक ध्येयधोरणाचे आणि विद्यार्थ्यांच्या सर्वांगीण विकासाचे प्रतीक आहे. लोगोमधील विविध घटक ज्ञान, शिक्षण, संस्कार, प्रगती आणि उज्ज्वल भविष्य यांचे प्रतिनिधित्व करतात.",
  },
  "about.logo.motto": {
    en: "The school motto is \"Tamaso Maa Jyotirgamaya\" — from darkness, lead us to light. This is the school's logo.",
    mr: "शाळेचे ब्रीदवाक्य “तमसो मा ज्योतिर्गमय” हे शाळेचे ब्रीदवाक्य आहे अंधारातून प्रकाशाकडे असा शाळेचा लोगो आहे.",
  },

  /* Core Values */
  "corevalues.title": { en: "Our Core Values", mr: "आमची मूलभूत मूल्ये" },
  "corevalues.subtitle": {
    en: "ज्ञान | संस्कार | शिस्त | प्रामाणिकपणा | आदर | सहकार्य | सर्जनशीलता | करुणा | सामाजिक बांधिलकी | देशप्रेम",
    mr: "ज्ञान | संस्कार | शिस्त | प्रामाणिकपणा | आदर | सहकार्य | सर्जनशीलता | करुणा | सामाजिक बांधिलकी | देशप्रेम",
  },

  /* Academics */
  "academics.hero.eyebrow": { en: "Academic", mr: "शैक्षणिक" },
  "academics.stage1.name": { en: "Pre-Primary", mr: "पूर्व-प्राथमिक" },
  "academics.stage1.grades": { en: "Nursery – Sr. KG", mr: "नर्सरी – सीनियर केजी" },
  "academics.stage1.text": { en: "Play-led learning, early language and number sense in small, warm groups.", mr: "खेळ-आधारित शिक्षण, लहान, उबदार गटांमध्ये प्रारंभिक भाषा आणि संख्याज्ञान." },
  "academics.stage2.name": { en: "Primary", mr: "प्राथमिक" },
  "academics.stage2.grades": { en: "Std. I – IV", mr: "इयत्ता १ – ४" },
  "academics.stage2.text": { en: "Foundational literacy and numeracy with activity-based classroom practice.", mr: "क्रियाकलाप-आधारित वर्गातील सरावासह मूलभूत साक्षरता आणि संख्याज्ञान." },
  "academics.stage3.name": { en: "Secondary", mr: "माध्यमिक" },
  "academics.stage3.grades": { en: "Std. V – X", mr: "इयत्ता ५ – १०" },
  "academics.stage3.text": { en: "State board curriculum with laboratory science, languages and structured assessment.", mr: "प्रयोगशाळा विज्ञान, भाषा आणि संरचित मूल्यांकनासह राज्य मंडळ अभ्यासक्रम." },
  "academics.stage4.name": { en: "Higher Secondary", mr: "उच्च माध्यमिक" },
  "academics.stage4.grades": { en: "Std. XI – XII", mr: "इयत्ता ११ – १२" },
  "academics.stage4.text": { en: "Science, Commerce and Arts streams with focused competitive-exam guidance.", mr: "विज्ञान, वाणिज्य आणि कला शाखा केंद्रित स्पर्धा-परीक्षा मार्गदर्शनासह." },
  "academics.approach1": { en: "Class sizes capped so every student is known by name", mr: "वर्गाची संख्या मर्यादित ठेवली जाते जेणेकरून प्रत्येक विद्यार्थी नावाने ओळखला जाईल" },
  "academics.approach2": { en: "Continuous assessment rather than a single terminal exam", mr: "एकाच अंतिम परीक्षेऐवजी सतत मूल्यांकन" },
  "academics.approach3": { en: "Remedial and enrichment sessions built into the weekly timetable", mr: "साप्ताहिक वेळापत्रकात उपचारात्मक आणि समृद्धी सत्रांचा समावेश" },
  "academics.approach4": { en: "Parent–teacher review meetings each term", mr: "प्रत्येक सत्रात पालक-शिक्षक आढावा बैठका" },
  "academics.classroom": { en: "Classroom in Session", mr: "वर्ग सुरू आहे" },
  "academics.hero.title": {
    en: "A curriculum that grows with the child",
    mr: "मुलासोबत वाढणारा अभ्यासक्रम",
  },
  "academics.hero.intro": {
    en: "Dnyanada Vidya Mandir follows the Maharashtra State Board curriculum from pre-primary through higher secondary, blending academic rigour with co-curricular enrichment.",
    mr: "ज्ञानदा विद्या मंदिर पूर्व-प्राथमिक ते उच्च माध्यमिकपर्यंत महाराष्ट्र राज्य मंडळाचा अभ्यासक्रम अनुसरते, शैक्षणिक कठोरता आणि सह-अभ्यासक्रमिक समृद्धी यांचा समतोल साधते.",
  },
  "academics.stages.eyebrow": { en: "Stages", mr: "टप्पे" },
  "academics.stages.title": { en: "Four stages, one philosophy", mr: "चार टप्पे, एक तत्त्वज्ञान" },
  "academics.approach.eyebrow": { en: "Our Approach", mr: "आमचा दृष्टिकोन" },
  "academics.approach.title": { en: "Rigour without pressure", mr: "दबावाशिवाय कठोरता" },
  "academics.approach.intro": {
    en: "We believe results follow good habits, not the other way around.",
    mr: "आमचा विश्वास आहे की निकाल चांगल्या सवयींचे अनुसरण करतात, उलट नाही.",
  },

  /* Admissions */
  "admissions.hero.eyebrow": { en: "Admissions 2026–27", mr: "प्रवेश २०२६-२७" },
  "admissions.step1.title": { en: "Enquiry", mr: "चौकशी" },
  "admissions.step1.text": { en: "Visit the school office or write to us for a prospectus and seat availability.", mr: "प्रॉस्पेक्टस् आणि जागा उपलब्धतेसाठी शाळा कार्यालयाला भेट द्या किंवा आम्हाला लिहा." },
  "admissions.step2.title": { en: "Application", mr: "अर्ज" },
  "admissions.step2.text": { en: "Submit the completed form with the required documents before the closing date.", mr: "अंतिम तारखेपूर्वी आवश्यक कागदपत्रांसह पूर्ण केलेला अर्ज सादर करा." },
  "admissions.step3.title": { en: "Interaction", mr: "संवाद" },
  "admissions.step3.text": { en: "A brief, informal conversation with the child and parents — never a test.", mr: "मूल आणि पालकांशी एक संक्षिप्त, अनौपचारिक संभाषण — कधीही परीक्षा नाही." },
  "admissions.step4.title": { en: "Confirmation", mr: "पुष्टीकरण" },
  "admissions.step4.text": { en: "Offers are issued in writing; fees are paid at the office to confirm the seat.", mr: "ऑफर लेखी स्वरूपात दिल्या जातात; जागा पुष्टी करण्यासाठी कार्यालयात फी भरली जाते." },
  "admissions.doc1": { en: "Birth certificate (original and one copy)", mr: "जन्म प्रमाणपत्र (मूळ आणि एक प्रत)" },
  "admissions.doc2": { en: "Previous school leaving / transfer certificate", mr: "मागील शाळा सोडल्याचे / हस्तांतरण प्रमाणपत्र" },
  "admissions.doc3": { en: "Last two years' report cards", mr: "मागील दोन वर्षांची गुणपत्रिका" },
  "admissions.doc4": { en: "Aadhaar card of the student and one parent", mr: "विद्यार्थी आणि एका पालकाचे आधार कार्ड" },
  "admissions.doc5": { en: "Four passport-size photographs", mr: "चार पासपोर्ट आकाराचे फोटो" },
  "admissions.doc6": { en: "Proof of residence", mr: "राहण्याचा पुरावा" },
  "admissions.date1.label": { en: "Forms available", mr: "अर्ज उपलब्ध" },
  "admissions.date2.label": { en: "Last date to apply", mr: "अर्ज करण्याची अंतिम तारीख" },
  "admissions.date3.label": { en: "Interactions", mr: "संवाद" },
  "admissions.date4.label": { en: "Session begins", mr: "सत्र सुरू" },
  "admissions.office": { en: "Admissions Office", mr: "प्रवेश कार्यालय" },
  "admissions.hero.title": {
    en: "Join Dnyanada Vidya Mandir",
    mr: "ज्ञानदा विद्या मंदिरमध्ये प्रवेश",
  },
  "admissions.hero.intro": {
    en: "A simple, transparent admission process. No entrance examinations, no capitation — only a careful conversation about whether the school is right for your child.",
    mr: "एक साधी, पारदर्शक प्रवेश प्रक्रिया. प्रवेश परीक्षा नाही, कॅपिटेशन नाही — फक्त तुमच्या मुलासाठी शाळा योग्य आहे का याबद्दल काळजीपूर्वक संभाषण.",
  },
  "admissions.process.eyebrow": { en: "Process", mr: "प्रक्रिया" },
  "admissions.process.title": {
    en: "Four steps, start to finish",
    mr: "चार पायऱ्या, सुरुवातीपासून शेवटपर्यंत",
  },
  "admissions.dates.eyebrow": { en: "Key Dates", mr: "महत्त्वाच्या तारखा" },
  "admissions.dates.title": { en: "Mark your calendar", mr: "तुमच्या कॅलेंडरवर नोंदवा" },
  "admissions.checklist.eyebrow": { en: "Checklist", mr: "यादी" },
  "admissions.checklist.title": { en: "Documents required", mr: "आवश्यक कागदपत्रे" },
  "admissions.visit.eyebrow": { en: "Visit Us", mr: "आम्हाला भेट द्या" },
  "admissions.visit.title": { en: "Come and see the school", mr: "येऊन शाळा पाहा" },
  "admissions.visit.intro": {
    en: "Campus visits are welcome on any working Saturday between 9 am and noon. No appointment is necessary.",
    mr: "कोणत्याही कामकाजाच्या शनिवारी सकाळी ९ ते दुपारपर्यंत कॅम्पस भेटीचे स्वागत आहे. अपॉइंटमेंट आवश्यक नाही.",
  },
  "admissions.visit.cta": { en: "Contact the office", mr: "कार्यालयाशी संपर्क साधा" },

  /* Facilities */
  "facilities.hero.eyebrow": { en: "Facilities", mr: "सुविधा" },
  "facilities.f1.title": { en: "Science Laboratories", mr: "विज्ञान प्रयोगशाळा" },
  "facilities.f1.text": { en: "Separate physics, chemistry and biology labs for senior classes.", mr: "वरिष्ठ वर्गांसाठी स्वतंत्र भौतिकशास्त्र, रसायनशास्त्र आणि जीवशास्त्र प्रयोगशाळा." },
  "facilities.f2.title": { en: "Computer Centre", mr: "संगणक केंद्र" },
  "facilities.f2.text": { en: "Sixty workstations with supervised access through the school day.", mr: "शाळेच्या वेळेत पर्यवेक्षित प्रवेशासह साठ संगणक." },
  "facilities.f3.title": { en: "Library", mr: "ग्रंथालय" },
  "facilities.f3.text": { en: "Over 14,000 titles in Marathi, Hindi and English with a quiet reading hall.", mr: "मराठी, हिंदी आणि इंग्रजीमध्ये १४,००० हून अधिक पुस्तके शांत वाचन कक्षासह." },
  "facilities.f4.title": { en: "Sports Ground", mr: "क्रीडांगण" },
  "facilities.f4.text": { en: "Full-size playing field, kabaddi courts and an indoor games room.", mr: "पूर्ण आकाराचे मैदान, कबड्डी कोर्ट आणि इनडोअर गेम्स रूम." },
  "facilities.f5.title": { en: "Arts & Music Rooms", mr: "कला आणि संगीत कक्ष" },
  "facilities.f5.text": { en: "Dedicated spaces for classical music, drama rehearsal and fine art.", mr: "शास्त्रीय संगीत, नाटक सराव आणि चित्रकलेसाठी समर्पित जागा." },
  "facilities.f6.title": { en: "Green Campus", mr: "हिरवा कॅम्पस" },
  "facilities.f6.text": { en: "A shaded courtyard, kitchen garden and rainwater harvesting system.", mr: "सावलीचे आवार, स्वयंपाकघर बाग आणि पावसाचे पाणी साठवणूक प्रणाली." },
  "facilities.building1": { en: "Main Building", mr: "मुख्य इमारत" },
  "facilities.building2": { en: "Courtyard", mr: "आवार" },
  "facilities.building3": { en: "Auditorium", mr: "सभागृह" },
  "facilities.hero.title": {
    en: "Spaces designed for focused learning",
    mr: "केंद्रित शिक्षणासाठी डिझाइन केलेली जागा",
  },
  "facilities.hero.intro": {
    en: "Our campus is modest in scale and generous in care — every room is used, maintained and looked after by the people who teach in it.",
    mr: "आमचा कॅम्पस आकाराने साधा आणि काळजीने उदार आहे — प्रत्येक खोली वापरली जाते, देखभाल केली जाते आणि त्यात शिकवणाऱ्या लोकांद्वारे पाहिली जाते.",
  },
  "facilities.campus.eyebrow": { en: "Campus", mr: "कॅम्पस" },
  "facilities.campus.title": { en: "A walk through the school", mr: "शाळेची सफर" },
  "facilities.campus.intro": {
    en: "Photographs of the campus will be added here shortly.",
    mr: "कॅम्पसची छायाचित्रे लवकरच येथे जोडली जातील.",
  },

  /* Gallery */
  "gallery.hero.eyebrow": { en: "Gallery", mr: "दालन" },
  "gallery.filter1": { en: "All", mr: "सर्व" },
  "gallery.filter2": { en: "Campus", mr: "कॅम्पस" },
  "gallery.filter3": { en: "Events", mr: "कार्यक्रम" },
  "gallery.filter4": { en: "Sport", mr: "क्रीडा" },
  "gallery.filter5": { en: "Culture", mr: "संस्कृती" },
  "gallery.item1": { en: "Main Gate", mr: "मुख्य दरवाजा" },
  "gallery.item2": { en: "Annual Day", mr: "वार्षिक दिन" },
  "gallery.item3": { en: "Athletics Meet", mr: "अॅथलेटिक्स स्पर्धा" },
  "gallery.item4": { en: "Library Hall", mr: "ग्रंथालय कक्ष" },
  "gallery.item5": { en: "Classical Music Evening", mr: "शास्त्रीय संगीत संध्याकाळ" },
  "gallery.item6": { en: "Science Exhibition", mr: "विज्ञान प्रदर्शन" },
  "gallery.item7": { en: "Kabaddi Final", mr: "कबड्डी अंतिम" },
  "gallery.item8": { en: "Courtyard", mr: "आवार" },
  "gallery.item9": { en: "Art Exhibition", mr: "कला प्रदर्शन" },
  "gallery.hero.title": {
    en: "The school year, in pictures",
    mr: "शैक्षणिक वर्ष, चित्रांमध्ये",
  },
  "gallery.hero.intro": {
    en: "A growing archive of campus life. Photographs are being curated and will appear in these frames soon.",
    mr: "कॅम्पस जीवनाची वाढती संग्रहण. छायाचित्रे संकलित केली जात आहेत आणि लवकरच या फ्रेम्समध्ये दिसतील.",
  },

  /* Highlights */
  "highlights.hero.eyebrow": { en: "Highlights", mr: "ठळक बाबी" },
  "highlights.h1.tag": { en: "Academics", mr: "शैक्षणिक" },
  "highlights.h1.title": { en: "Std. X cohort records a 98% board pass rate", mr: "इयत्ता १० च्या विद्यार्थ्यांनी ९८% बोर्ड उत्तीर्ण दर नोंदवला" },
  "highlights.h1.text": { en: "Twenty-three students placed in the district merit range, the school's strongest showing to date.", mr: "तेवीस विद्यार्थी जिल्हा गुणवत्ता श्रेणीत स्थानापन्न, शाळेची आतापर्यंतची सर्वोत्तम कामगिरी." },
  "highlights.h2.tag": { en: "Sport", mr: "क्रीडा" },
  "highlights.h2.title": { en: "Kabaddi team wins the Thane district championship", mr: "कबड्डी संघाने ठाणे जिल्हा अजिंक्यपद जिंकले" },
  "highlights.h2.text": { en: "An unbeaten run through the group stage followed by a two-point final.", mr: "गट फेरीत अपराजित मोहीम आणि दोन गुणांच्या अंतिम सामन्यात विजय." },
  "highlights.h3.tag": { en: "Science", mr: "विज्ञान" },
  "highlights.h3.title": { en: "Annual science exhibition draws 900 visitors", mr: "वार्षिक विज्ञान प्रदर्शनाने ९०० अभ्यागत आकर्षित केले" },
  "highlights.h3.text": { en: "Forty-one student projects across environment, robotics and public health.", mr: "पर्यावरण, रोबोटिक्स आणि सार्वजनिक आरोग्य यावर एक्केचाळीस विद्यार्थी प्रकल्प." },
  "highlights.h4.tag": { en: "Culture", mr: "संस्कृती" },
  "highlights.h4.title": { en: "Ganeshotsav cultural week returns to the courtyard", mr: "गणेशोत्सव सांस्कृतिक सप्ताह आवारात परतला" },
  "highlights.h4.text": { en: "Music, drama and a students' art exhibition hosted for families and neighbours.", mr: "संगीत, नाटक आणि विद्यार्थ्यांचे कला प्रदर्शन कुटुंबियांसाठी आणि शेजाऱ्यांसाठी आयोजित." },
  "highlights.hero.title": {
    en: "What the school has been up to",
    mr: "शाळा कशात व्यस्त आहे",
  },
  "highlights.hero.intro": {
    en: "A record of the year's achievements, events and small victories — kept honest and up to date.",
    mr: "वर्षातील उपलब्धी, कार्यक्रम आणि छोट्या विजयांची नोंद — प्रामाणिक आणि अद्ययावत ठेवली.",
  },
  "highlights.calendar.eyebrow": { en: "Calendar", mr: "कॅलेंडर" },
  "highlights.calendar.title": { en: "Coming up this term", mr: "या सत्रात येणारे" },
  "highlights.calendar.intro": {
    en: "Annual Day rehearsals begin in February, followed by the inter-house competitions and the Std. XII farewell.",
    mr: "वार्षिक दिनाचा सराव फेब्रुवारीमध्ये सुरू होतो, त्यानंतर आंतर-गृह स्पर्धा आणि बारावीचा निरोप.",
  },

  /* Alumni */
  "alumni.hero.eyebrow": { en: "Alumni", mr: "माजी विद्यार्थी" },
  "alumni.v1.name": { en: "Rahul Pandurang Sonavane", mr: "राहुल पांडुरंग सोनवणे" },
  "alumni.v1.batch": { en: "Batch of 2012", mr: "२०१२ चा बॅच" },
  "alumni.v1.role": { en: "Quality Engineer, Wadala", mr: "क्वालिटी अभियंता, वडाळा" },
  "alumni.v1.quote": { en: "The 26 January and 15 August programmes — the lezim and various events — were my favourites. If I have to mention memories, I miss my school, my entire batch, the fun we had together and the studies.", mr: "२६ जानेवारी आणि १५ ऑगस्ट ला होणारे लेझिम आणि विविध प्रकारचे कार्यक्रम हे माझे खूप आवडीचे होते...आणि आठवण सांगायच झाल तर मला माझी शाळा आणि माझी पूर्ण बॅच आणि त्यांच्यासोबतची मस्ती, अभ्यास ही सगळ खुप मिस करतो." },
  "alumni.v2.name": { en: "Mangesh Kantaram Gopale", mr: "मंगेश कांताराम गोपाळे" },
  "alumni.v2.batch": { en: "Batch of 2008", mr: "२००८ चा बॅच" },
  "alumni.v2.role": { en: "Senior Manager, ICICI Prudential", mr: "वरिष्ठ व्यवस्थापक, ICICI प्रुडेन्शियल" },
  "alumni.v2.quote": { en: "Dnyanada Vidya Mandir is a temple of knowledge that laid the strong foundation of our lives. The education, values, discipline and life principles I received here are the true strength behind my success. The invaluable guidance of teachers, unforgettable moments spent with friends and every memory from school continue to be a source of inspiration. Even though we are on different paths in life today, the teachings and values imparted by Dnyanada Vidya Mandir remain with us always. Drawing inspiration from this debt of gratitude, the resolve to do something good for society will be the truest tribute to our school.", mr: "ज्ञानदा विद्या मंदिर ही आमच्या आयुष्याची भक्कम पायाभरणी करणारी ज्ञानमंदिर आहे. इथे मिळालेले शिक्षण, संस्कार, शिस्त आणि जीवनमूल्ये हीच आमच्या यशाची खरी ताकद आहेत. शिक्षकांचे मोलाचे मार्गदर्शन, मित्रांसोबत घालवलेले अविस्मरणीय क्षण आणि शाळेतील प्रत्येक आठवण आजही प्रेरणेचा स्रोत आहे. आज आम्ही जीवनाच्या वेगवेगळ्या वाटांवर असलो तरी ज्ञानदा विद्या मंदिराने दिलेली शिकवण आणि संस्कार कायम आमच्या सोबत आहेत. या ऋणातून प्रेरणा घेऊन समाजासाठी काहीतरी चांगले करण्याचा संकल्प हीच आमच्या शाळेला खरी आदरांजली ठरेल." },
  "alumni.v3.name": { en: "Roshan Ashok Kalke", mr: "रोशन अशोक कळके" },
  "alumni.v3.batch": { en: "Batch of 2010", mr: "२०१० चा बॅच" },
  "alumni.v3.role": { en: "Music Artist & KONE Elevator", mr: "संगीत कलाकार आणि KONE एलिव्हेटर" },
  "alumni.v3.quote": { en: "My teachers give me good values and show me the right path. Time flies when playing and studying with friends. School is my second home. My teachers showed me the talent within me. Even if I was weaker in studies, the school shaped me a lot in other areas like music and also taught me to nurture it. Today I have a big name in the music industry and I perform with very big artists. The school taught me to never suppress your passion but to cherish it. I am very proud of my school.", mr: "माझे शिक्षक मला चांगले संस्कार देतात आणि मार्ग दाखवतात. मित्रांसोबत खेळताना आणि अभ्यास करताना वेळ कधी जातो कळतच नाही. शाळा म्हणजे माझे दुसरे घर आहे. शाळेत मला माझ्यात जे टॅलेंट आहे ते मला माझ्या शिक्षकांनी दाखवले, जरी अभ्यासात कमी असलो तरी बाकी गोष्टीत मला शाळेने खूप घडवले जसे संगीत आणि ते जपायला सुद्धा शिकवले, आज संगीत क्षेत्रात माझे खूप नाव आहे आणि आता मी खूप मोठे मोठे आर्टिस्ट सोबत शो करतो, आपली आवड ही कधीही मारू नये तर तीला जपाव हे मला शाळेने शिकवले, मला माझ्या शाळेचा खूप अभिमान आहे." },
  "alumni.v4.name": { en: "Jyotsna Kailash Suralkar", mr: "ज्योत्स्ना कैलाश सुरळकर" },
  "alumni.v4.batch": { en: "Batch of 2016", mr: "२०१६ चा बॅच" },
  "alumni.v4.role": { en: "Manager, MGM Print Tech", mr: "व्यवस्थापक, MGM प्रिंट टेक" },
  "alumni.v4.quote": { en: "On 26 January and 15 August, our school's alumni or dignitaries who had made a name in various fields would come to inspire and encourage us. They would share their life experiences and journey of success. Listening to them, I always had one dream — \"One day I too will do something big and definitely contribute to my school.\" Today, by God's grace, I got that opportunity. Being able to do something for my school fills me with heartfelt joy and pride. My childhood dream has come true — this is a very big and unforgettable thing for me.", mr: "शाळेत २६ जानेवारी आणि १५ ऑगस्टच्या कार्यक्रमांमध्ये आमच्या शाळेचे माजी विद्यार्थी किंवा विविध क्षेत्रात मोठे नाव कमावलेले मान्यवर आम्हाला प्रेरणा आणि प्रोत्साहन देण्यासाठी यायचे. ते त्यांच्या आयुष्यातील अनुभव आणि यशाचा प्रवास सांगायचे. त्यांचे विचार ऐकताना माझ्या मनात नेहमी एकच स्वप्न असायचे—'एक दिवस मीही काहीतरी मोठं करेन आणि माझ्या शाळेसाठी नक्की काहीतरी योगदान देईन.' आज देवाच्या कृपेने मला ती संधी मिळाली. माझ्या शाळेसाठी काहीतरी करता आलं, याचा मला मनापासून आनंद आणि अभिमान वाटतो. माझं बालपणीचं स्वप्न आज प्रत्यक्षात उतरलं, ही माझ्यासाठी खूप मोठी आणि अविस्मरणीय गोष्ट आहे." },
  "alumni.v5.name": { en: "Rakesh Raju Shinde", mr: "राकेश राजू शिंदे" },
  "alumni.v5.batch": { en: "Batch of 2006", mr: "२००६ चा बॅच" },
  "alumni.v5.role": { en: "Entrepreneur, Catering", mr: "उद्योजक, कॅटरिंग" },
  "alumni.v5.quote": { en: "Dnyanada School — my school, my pride. School teaches us knowledge, discipline and good values, giving the right shape to our lives. It is the foundation of our progress and the rightful place of our beautiful childhood memories.", mr: "ज्ञानदा शाळा माझी शाळा माझा अभिमान. शाळा आपल्याला ज्ञान, शिस्त आणि चांगले संस्कार शिकवून आपल्या आयुष्याला योग्य आकार देते. ती आपल्या प्रगतीचा पाया असून आपल्या बालपणीच्या सुंदर आठवणींचे हक्काचे ठिकाण असते." },
  "alumni.v6.name": { en: "Sopan Babasaheb Avhad", mr: "सोपान बाबासाहेब आव्हाड" },
  "alumni.v6.batch": { en: "Batch of 2012", mr: "२०१२ चा बॅच" },
  "alumni.v6.role": { en: "Asst. Manager, Cords Cable Industries", mr: "सहाय्यक व्यवस्थापक, कॉर्ड्स केबल इंडस्ट्रीज" },
  "alumni.v6.quote": { en: "My school is a temple of knowledge. And my school is my second home. The values I received here shaped my personality. The teachers here not only taught me academics but also the art of living. The guidance of teachers and the companionship of friends make every school day special. I learned discipline, hard work and unity here. My school always inspires me and gives me strength to move forward. After stepping into the outside world, I realised that the joy of playing in the school grounds and studying in the classroom is unmatched. My school and teachers have a huge share in my success. I am very proud of my school.", mr: "माझी शाळा ही ज्ञानाचं मंदिर आहे. आणि माझी शाळा म्हणजे माझं दुसरं घर आहे. येथे मिळालेल्या संस्कारांमुळे माझं व्यक्तिमत्व घडलं. इथल्या शिक्षकांनी मला फक्त अभ्यासच नाही तर जगण्याची कला शिकवली. शिक्षकांचे मार्गदर्शन आणि मित्रांची साथ यामुळे शाळेतील प्रत्येक दिवस खास बनतो. शिस्त, परिश्रम आणि एकता याची शिकवण मला इथेच मिळाली. माझी शाळा मला नेहमीच प्रेरणा देते आणि पुढे जाण्यासाठी बळ देते. बाहेरच्या जगात पाऊल टाकल्यावर समजले की शाळेच्या पटांगणात खेळताना आणि वर्गात शिकताना जे आनंद मिळतो तो कुठेही मिळणार नाही. माझ्या यशामागे माझ्या शाळेचा आणि शिक्षकांचा मोठा वाटा आहे. मला माझ्या शाळेचा खूप अभिमान आहे." },
  "alumni.reunion": { en: "Alumni Reunion", mr: "माजी विद्यार्थी पुनर्मिलन" },
  "alumni.email": { en: "alumni@dnyanadavm.edu.in", mr: "alumni@dnyanadavm.edu.in" },
  "alumni.hero.title": {
    en: "Once a Dnyanadan, always a Dnyanadan",
    mr: "एकदा ज्ञानदाचे, तर नेहमी ज्ञानदाचे",
  },
  "alumni.hero.intro": {
    en: "Our alumni carry the values of Dnyanada Vidya Mandir into every corner of Maharashtra and beyond.",
    mr: "आमचे माजी विद्यार्थी ज्ञानदा विद्या मंदिरची मूल्ये महाराष्ट्राच्या प्रत्येक कोपऱ्यात आणि त्यापलीकडे नेतात.",
  },
  "alumni.voices.eyebrow": { en: "Voices", mr: "आवाज" },
  "alumni.voices.title": { en: "In their words", mr: "त्यांच्या शब्दांत" },
  "alumni.connect.eyebrow": { en: "Stay Connected", mr: "जोडलेले रहा" },
  "alumni.connect.title": {
    en: "Join the alumni register",
    mr: "माजी विद्यार्थी नोंदणीमध्ये सामील व्हा",
  },
  "alumni.connect.intro": {
    en: "Register once and we will keep you informed of gatherings, mentorship drives and scholarship appeals.",
    mr: "एकदा नोंदणी करा आणि आम्ही तुम्हाला सभा, मार्गदर्शन कार्यक्रम आणि शिष्यवृत्ती अपील यांची माहिती देत राहू.",
  },
  "alumni.connect.cta": {
    en: "Write to the alumni office",
    mr: "माजी विद्यार्थी कार्यालयाला लिहा",
  },

  /* Contact */
  "contact.hero.eyebrow": { en: "Contact", mr: "संपर्क" },
  "contact.detail1.label": { en: "Address", mr: "पत्ता" },
  "contact.detail2.label": { en: "Telephone", mr: "दूरध्वनी" },
  "contact.detail3.label": { en: "Email", mr: "ईमेल" },
  "contact.detail4.label": { en: "Office Hours", mr: "कार्यालय वेळ" },
  "contact.map": { en: "Campus Location Map", mr: "कॅम्पस स्थान नकाशा" },
  "contact.hero.title": { en: "We are glad to hear from you", mr: "तुमच्याकडून ऐकून आनंद झाला" },
  "contact.hero.intro": {
    en: "For admissions, transfer certificates, alumni matters or a simple visit to the campus, the school office is the best place to begin.",
    mr: "प्रवेश, हस्तांतरण प्रमाणपत्रे, माजी विद्यार्थी बाबी किंवा कॅम्पसला भेट यासाठी, शाळा कार्यालय ही सुरुवात करण्यासाठी सर्वोत्तम जागा आहे.",
  },
  "contact.form.title": { en: "Send a message", mr: "संदेश पाठवा" },
  "contact.form.name": { en: "Full name", mr: "पूर्ण नाव" },
  "contact.form.email": { en: "Email address", mr: "ईमेल पत्ता" },
  "contact.form.subject": { en: "Subject", mr: "विषय" },
  "contact.form.message": { en: "Message", mr: "संदेश" },
  "contact.form.submit": { en: "Send message", mr: "संदेश पाठवा" },
  "contact.viewMap": { en: "Open in Google Maps", mr: "गूगल नकाशात उघडा" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
