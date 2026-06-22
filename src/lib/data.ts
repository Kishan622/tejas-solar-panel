import {
  Home, Building2, Factory, Tractor, Lightbulb,
  Sun, Battery, Wrench, ShieldCheck, Award,
  TrendingDown, Leaf, Zap, Users, Clock, Star
} from 'lucide-react';

export const services = [
  {
    icon: Home,
    title: 'आवासीय सोलर',
    titleEn: 'Residential Solar',
    description: 'अपने घर की छत पर सोलर पैनल लगवाएं और बिजली बिल से हमेशा के लिए छुटकारा पाएं। 3kW से 10kW तक के सिस्टम उपलब्ध।',
    features: ['3kW - 10kW सिस्टम', 'PM सूर्य घर सब्सिडी', 'Net Metering', '25 वर्ष वारंटी'],
    image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-ocean-600 to-ocean-800',
  },
  {
    icon: Building2,
    title: 'व्यावसायिक सोलर',
    titleEn: 'Commercial Solar',
    description: 'दुकान, ऑफिस, होटल और मॉल के लिए कस्टम सोलर सॉल्यूशन। बिजली की लागत 70% तक कम करें।',
    features: ['10kW - 100kW सिस्टम', 'ROI विश्लेषण', 'Tax Benefits', 'सब्सिडी सहायता'],
    image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-159397.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-brand-500 to-brand-700',
  },
  {
    icon: Factory,
    title: 'औद्योगिक सोलर',
    titleEn: 'Industrial Solar',
    description: 'बड़े उद्योगों और फैक्ट्रियों के लिए हाई-कैपेसिटी सोलर पावर प्लांट। ऊर्जा लागत में भारी बचत।',
    features: ['100kW+ सिस्टम', 'Ground Mounting', 'MNRE अप्रूव्ड', 'Full Support'],
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-slate-700 to-slate-900',
  },
  {
    icon: Tractor,
    title: 'कृषि सोलर पंप',
    titleEn: 'Agriculture Solar Pump',
    description: 'PM कुसुम योजना के तहत किसानों के लिए सोलर वॉटर पंप। सिंचाई के लिए मुफ्त बिजली।',
    features: ['2HP - 10HP पंप', 'PM कुसुम सब्सिडी', '60% सब्सिडी', 'किसान हितैषी'],
    image: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-600 to-green-800',
  },
  {
    icon: Lightbulb,
    title: 'सोलर स्ट्रीट लाइट',
    titleEn: 'Solar Street Light',
    description: 'गांव, कॉलोनी और पार्किंग के लिए ऑटोमेटिक सोलर स्ट्रीट लाइट। बिना बिजली के रोशनी।',
    features: ['Auto ON/OFF', 'IP65 Weather Proof', '5-7 वर्ष बैटरी', 'कम रखरखाव'],
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-yellow-500 to-amber-700',
  },
  {
    icon: Sun,
    title: 'रूफटॉप सोलर',
    titleEn: 'Rooftop Solar Installation',
    description: 'RCC और टिन शेड दोनों प्रकार की छत पर प्रोफेशनल इंस्टॉलेशन। MNRE सर्टिफाइड इंस्टॉलर।',
    features: ['On-Grid & Off-Grid', 'MNRE सर्टिफाइड', 'Expert Installation', 'AMC उपलब्ध'],
    image: 'https://images.pexels.com/photos/9875430/pexels-photo-9875430.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-ocean-500 to-brand-600',
  },
];

export const govtSchemes = [
  {
    title: 'PM सूर्य घर मुफ्त बिजली योजना',
    subtitle: 'PM Surya Ghar Muft Bijli Yojana',
    icon: Home,
    color: 'from-orange-500 to-red-600',
    bg: 'from-orange-50 to-red-50',
    border: 'border-orange-200',
    subsidyText: '₹78,000 तक सब्सिडी',
    points: [
      '1kW - 2kW: ₹30,000/kW सब्सिडी',
      '2kW - 3kW: ₹18,000/kW सब्सिडी',
      '300 यूनिट/माह मुफ्त बिजली',
      'DISCOM कनेक्शन अनिवार्य',
    ],
  },
  {
    title: 'PM कुसुम योजना',
    subtitle: 'PM KUSUM Yojana',
    icon: Tractor,
    color: 'from-green-600 to-emerald-700',
    bg: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    subsidyText: '60% सब्सिडी',
    points: [
      'सोलर पंप पर 60% सरकारी सब्सिडी',
      'किसान केवल 40% भुगतान',
      '2HP - 10HP तक के पंप',
      'बंजर भूमि पर सोलर प्लांट',
    ],
  },
  {
    title: 'रूफटॉप सोलर सब्सिडी',
    subtitle: 'Rooftop Solar Subsidy',
    icon: Sun,
    color: 'from-blue-600 to-indigo-700',
    bg: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    subsidyText: '40% तक सब्सिडी',
    points: [
      'MNRE अप्रूव्ड सिस्टम आवश्यक',
      'State + Central सब्सिडी',
      'Net Metering से अतिरिक्त आय',
      'Grid को बिजली बेचने की सुविधा',
    ],
  },
  {
    title: 'Net Metering के फायदे',
    subtitle: 'Net Metering Benefits',
    icon: Zap,
    color: 'from-purple-600 to-violet-700',
    bg: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
    subsidyText: 'बिजली बेचें',
    points: [
      'अतिरिक्त बिजली DISCOM को बेचें',
      'बिजली बिल में क्रेडिट',
      'बिजली मीटर DISCOM लगाएगा',
      'राजस्थान में लागू नीति',
    ],
  },
];

export const benefits = [
  { icon: TrendingDown, title: 'बिल में 90% बचत', desc: 'हर महीने हजारों रुपये की बिजली बिल बचाएं', color: 'text-green-500', bg: 'bg-green-50' },
  { icon: Award, title: 'सरकारी सब्सिडी', desc: 'PM सूर्य घर और कुसुम योजना में ₹78,000 तक सब्सिडी', color: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: Leaf, title: 'पर्यावरण अनुकूल', desc: 'CO2 उत्सर्जन शून्य, स्वच्छ और हरित ऊर्जा', color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { icon: Battery, title: 'दीर्घकालिक निवेश', desc: '25 साल की वारंटी, 5-7 साल में पूरा ROI', color: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: ShieldCheck, title: 'ऊर्जा स्वतंत्रता', desc: 'बिजली कटौती की चिंता खत्म, 24/7 बिजली', color: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: Wrench, title: 'कम रखरखाव', desc: 'साल में केवल एक बार सफाई, कोई मूविंग पार्ट्स नहीं', color: 'text-cyan-500', bg: 'bg-cyan-50' },
];

export const counters = [
  { icon: Users, value: 500, suffix: '+', label: 'खुश ग्राहक' },
  { icon: Sun, value: 1000, suffix: '+', label: 'kW इंस्टॉल' },
  { icon: Clock, value: 5, suffix: '+', label: 'वर्षों का अनुभव' },
  { icon: Star, value: 4.9, suffix: '★', label: 'ग्राहक रेटिंग', decimal: true },
];

export const faqs = [
  {
    q: 'सोलर पैनल लगवाने में कितना खर्च आता है?',
    a: '1kW सोलर सिस्टम का खर्च लगभग ₹60,000-70,000 है। PM सूर्य घर योजना में सब्सिडी मिलने के बाद यह काफी कम हो जाता है। सटीक कोटेशन के लिए फ्री साइट विजिट बुक करें।',
  },
  {
    q: 'PM सूर्य घर योजना में सब्सिडी कैसे मिलती है?',
    a: 'MNRE अप्रूव्ड इंस्टॉलर से सिस्टम लगवाएं, DISCOM को आवेदन करें, नेट मीटर लगवाएं। सब्सिडी सीधे आपके बैंक अकाउंट में आती है। हम पूरी प्रक्रिया में मदद करते हैं।',
  },
  {
    q: 'Net Metering क्या होता है?',
    a: 'Net Metering में आपका सोलर सिस्टम ग्रिड से जुड़ा होता है। जो बिजली आप नहीं उपयोग करते वो ग्रिड में जाती है और आपको क्रेडिट मिलता है। इससे बिजली बिल शून्य हो सकता है।',
  },
  {
    q: 'सोलर पैनल की देखभाल कैसे करें?',
    a: 'सोलर पैनल में बहुत कम रखरखाव चाहिए। महीने में एक-दो बार पानी से धोने से 95% काम हो जाता है। हम AMC (Annual Maintenance Contract) भी देते हैं।',
  },
  {
    q: 'सोलर इंस्टॉलेशन में कितना समय लगता है?',
    a: 'आवासीय सिस्टम 1-3 दिन में इंस्टॉल हो जाता है। बड़े कमर्शियल/इंडस्ट्रियल प्रोजेक्ट में 1-2 सप्ताह लग सकते हैं। नेट मीटर DISCOM 30-60 दिन में लगाती है।',
  },
  {
    q: 'क्या बादल/बरसात में सोलर काम करता है?',
    a: 'हां! सोलर पैनल बादल में भी काम करते हैं, बस थोड़ी कम क्षमता पर। राजस्थान में 300+ धूप के दिन होते हैं, इसलिए यहां सोलर बहुत प्रभावी है।',
  },
];

export const testimonials = [
  {
    id: '1',
    customer_name: 'रामेश्वर शर्मा',
    location: 'निवाई, राजस्थान',
    rating: 5,
    review: 'तेजस सोलर की सेवा बहुत अच्छी रही। मेरे घर में 3kW सिस्टम लगाने के बाद बिजली का बिल लगभग ₹0 आ गया है। अशोक स्वामी जी और उनकी टीम बहुत प्रोफेशनल है।',
    project_type: 'आवासीय सोलर',
  },
  {
    id: '2',
    customer_name: 'सुरेश कुमार मीणा',
    location: 'टोंक, राजस्थान',
    rating: 5,
    review: 'PM सूर्य घर योजना के तहत सब्सिडी दिलाने में तेजस सोलर ने पूरी मदद की। अब हमें ₹2000 का बिजली बिल नहीं भरना पड़ता। बहुत खुश हूं।',
    project_type: 'रूफटॉप सोलर',
  },
  {
    id: '3',
    customer_name: 'कमलेश पटेल',
    location: 'जयपुर, राजस्थान',
    rating: 5,
    review: 'कमर्शियल प्रोजेक्ट के लिए तेजस सोलर को चुना और एक बेहतरीन निर्णय था। 25kW सिस्टम समय पर और बजट में लगा दिया। हाईली रेकमेंड करता हूं।',
    project_type: 'व्यावसायिक सोलर',
  },
  {
    id: '4',
    customer_name: 'प्रकाश चंद जांगिड़',
    location: 'सवाई माधोपुर',
    rating: 5,
    review: 'खेत के लिए 5HP सोलर पंप लगवाया। PM कुसुम योजना के तहत 60% सब्सिडी मिली। सिंचाई में कोई दिक्कत नहीं अब। जितेंद्र जी का बहुत धन्यवाद।',
    project_type: 'कृषि सोलर पंप',
  },
  {
    id: '5',
    customer_name: 'दिनेश कुमार सैनी',
    location: 'गंगापुर सिटी',
    rating: 5,
    review: 'सोलर स्ट्रीट लाइट लगवाई हमारी कॉलोनी में। बढ़िया क्वालिटी और अच्छी रोशनी। तेजस सोलर की वारंटी सर्विस भी अच्छी है।',
    project_type: 'सोलर स्ट्रीट लाइट',
  },
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'आवासीय रूफटॉप - निवाई' },
  { src: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-159397.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'कमर्शियल सोलर प्लांट' },
  { src: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'कृषि सोलर पंप' },
  { src: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'औद्योगिक सोलर' },
  { src: 'https://images.pexels.com/photos/9875430/pexels-photo-9875430.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'रूफटॉप इंस्टॉलेशन' },
  { src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'सोलर स्ट्रीट लाइट' },
];
