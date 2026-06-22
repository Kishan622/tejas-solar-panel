/*
# Tejas Solar - Database Tables

1. New Tables
   - `tejas_quote_requests` - stores free quote form submissions
     - id, name, mobile, city, solar_requirement, message, status, created_at
   - `tejas_testimonials` - stores customer testimonials (seeded with sample data)
     - id, customer_name, location, rating, review, project_type, created_at

2. Security
   - RLS enabled on both tables
   - anon INSERT on tejas_quote_requests (public form submissions)
   - anon SELECT on tejas_testimonials (public display)
*/

-- Quote requests table
CREATE TABLE IF NOT EXISTS tejas_quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  mobile text NOT NULL,
  city text NOT NULL,
  solar_requirement text NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'completed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE tejas_quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_tejas_quotes" ON tejas_quote_requests;
CREATE POLICY "anon_insert_tejas_quotes"
ON tejas_quote_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Testimonials table
CREATE TABLE IF NOT EXISTS tejas_testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  location text NOT NULL,
  rating integer NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  review text NOT NULL,
  project_type text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE tejas_testimonials ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_tejas_testimonials" ON tejas_testimonials;
CREATE POLICY "anon_select_tejas_testimonials"
ON tejas_testimonials FOR SELECT
TO anon, authenticated
USING (true);

-- Seed testimonials
INSERT INTO tejas_testimonials (customer_name, location, rating, review, project_type) VALUES
('रामेश्वर शर्मा', 'निवाई, राजस्थान', 5, 'तेजस सोलर की सेवा बहुत अच्छी रही। मेरे घर में 3kW सिस्टम लगाने के बाद बिजली का बिल लगभग ₹0 आ गया है। अशोक स्वामी जी और उनकी टीम बहुत प्रोफेशनल है।', 'आवासीय सोलर'),
('सुरेश कुमार मीणा', 'टोंक, राजस्थान', 5, 'PM सूर्य घर योजना के तहत सब्सिडी दिलाने में तेजस सोलर ने पूरी मदद की। अब हमें ₹2000 का बिजली बिल नहीं भरना पड़ता। बहुत खुश हूं।', 'रूफटॉप सोलर'),
('कमलेश पटेल', 'जयपुर, राजस्थान', 5, 'कमर्शियल प्रोजेक्ट के लिए तेजस सोलर को चुना और एक बेहतरीन निर्णय था। 25kW सिस्टम समय पर और बजट में लगा दिया। हाईली रेकमेंड करता हूं।', 'व्यावसायिक सोलर'),
('प्रकाश चंद जांगिड़', 'सवाई माधोपुर', 5, 'खेत के लिए 5HP सोलर पंप लगवाया। PM कुसुम योजना के तहत 60% सब्सिडी मिली। सिंचाई में कोई दिक्कत नहीं अब। जितेंद्र जी का बहुत धन्यवाद।', 'कृषि सोलर पंप'),
('दिनेश कुमार सैनी', 'गंगापुर सिटी', 5, 'सोलर स्ट्रीट लाइट लगवाई हमारी कॉलोनी में। बढ़िया क्वालिटी और अच्छी रोशनी। तेजस सोलर की वारंटी सर्विस भी अच्छी है।', 'सोलर स्ट्रीट लाइट')
ON CONFLICT DO NOTHING;
