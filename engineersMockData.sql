-- Run this script in your Supabase SQL Editor to seed the database with the mock engineers.
-- It safely creates users in auth.users (triggering profile/engineer creation), 
-- updates them with full details, and creates the necessary service packages, portfolios, and reviews.

-- 1. Insert into auth.users (This automatically creates profiles and engineers via your trigger)
INSERT INTO auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, recovery_sent_at, last_sign_in_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token)
VALUES
('11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'juan@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Juan", "lastName":"Dela Cruz", "role":"engineer"}', now(), now(), '', '', '', ''),
('22222222-2222-2222-2222-222222222222', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'maria@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Maria", "lastName":"Santos", "role":"engineer"}', now(), now(), '', '', '', ''),
('33333333-3333-3333-3333-333333333333', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'antonio@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Antonio", "lastName":"Reyes", "role":"engineer"}', now(), now(), '', '', '', ''),
('44444444-4444-4444-4444-444444444444', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'sofia@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Sofia", "lastName":"Bautista", "role":"engineer"}', now(), now(), '', '', '', ''),
('55555555-5555-5555-5555-555555555555', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'carlos@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Carlos", "lastName":"Mendoza", "role":"engineer"}', now(), now(), '', '', '', ''),
('66666666-6666-6666-6666-666666666666', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'rachel@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Rachel", "lastName":"Tan", "role":"engineer"}', now(), now(), '', '', '', ''),
('77777777-7777-7777-7777-777777777777', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'mark@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Mark", "lastName":"Villanueva", "role":"engineer"}', now(), now(), '', '', '', ''),
('88888888-8888-8888-8888-888888888888', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'diane@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Diane", "lastName":"Reyes", "role":"engineer"}', now(), now(), '', '', '', ''),
('99999999-9999-9999-9999-999999999999', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'paolo@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Paolo", "lastName":"Garcia", "role":"engineer"}', now(), now(), '', '', '', ''),
-- Mock Clients for Reviews
('cccccccc-cccc-cccc-cccc-cccccccccccc', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'client1@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Maria", "lastName":"S.", "role":"homeowner"}', now(), now(), '', '', '', ''),
('dddddddd-dddd-dddd-dddd-dddddddddddd', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'client2@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Robert", "lastName":"G.", "role":"homeowner"}', now(), now(), '', '', '', '')
ON CONFLICT (id) DO NOTHING;

-- 2. Update Profiles with Avatars
UPDATE public.profiles SET avatar_url = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt-OKb05as7KtjP9P0JW-NbxQ_gmsKfjLLHbK3B_RNEOO1apToYC04xc4mflecuypXMPHg3oMkRfbBvXteNXkrmTnRgNeDUY3ee54BZDEM5hP0i2zNTIXmhL2-blMDCt2qLEVNapqY6eFSPzsv0pkPjUaIs2ebw4Hkem0vq1Bf4YM0TDVr6v5__4lwR2mGSmSx4YJSgz8DgQHAXGdGkiwyuWKCQG_CldlOIxuT2JXTJxxq3onrtHj9lbiD2PxrIhZGAFRH2zdG_NI' WHERE id = '11111111-1111-1111-1111-111111111111';
UPDATE public.profiles SET avatar_url = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrHusRa_fwfZ0qtrIs1c4SXzPuU7kygUHoHZEa2yztkCVg58aDgWGpcPsBNgTfns8N6p9H_xSInoX__nuROaQO7WntfNdhwTza0eAOCEN6rbMTEcNzJz2_gSNSv8-G1LPfweG-qC3oXAT5UFy9WBTLe01T1t8jvTXk_AMCGpOiW9Aub4G3p-ROTI5ayF6F--dEbpXchiW1jYUmMfliZyZ80QmYLAlAwrFE2o-QjKcKoUE13FZ8-uU7ietkwGa9LjiVMPYhsItzpU8' WHERE id = '22222222-2222-2222-2222-222222222222';
UPDATE public.profiles SET avatar_url = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800' WHERE id = '33333333-3333-3333-3333-333333333333';
UPDATE public.profiles SET avatar_url = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400' WHERE id = '44444444-4444-4444-4444-444444444444';
UPDATE public.profiles SET avatar_url = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' WHERE id = '55555555-5555-5555-5555-555555555555';
UPDATE public.profiles SET avatar_url = 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400' WHERE id = '66666666-6666-6666-6666-666666666666';
UPDATE public.profiles SET avatar_url = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' WHERE id = '77777777-7777-7777-7777-777777777777';
UPDATE public.profiles SET avatar_url = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400' WHERE id = '88888888-8888-8888-8888-888888888888';
UPDATE public.profiles SET avatar_url = 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' WHERE id = '99999999-9999-9999-9999-999999999999';

-- 3. Update Engineers with Professional Details, Experience, and Portfolios
UPDATE public.engineers SET 
  title = 'Senior Structural Engineer', 
  bio = 'Dedicated and highly skilled Structural Engineer with over 15 years of experience in designing, analyzing, and supervising the construction of commercial and residential high-rises in Metro Manila.',
  city = 'Metro Manila', 
  years_experience = 15, 
  prc_license_number = '0123456', 
  verification_status = 'verified', 
  rating = 4.9, 
  review_count = 42,
  specialties = ARRAY['Structural Analysis', 'Seismic Retrofitting', 'Geotechnical Evaluation', 'Project Management', 'High-Rise Construction'],
  experience_list = '[{"role": "Lead Structural Engineer", "company": "Mabuhay Builders Inc.", "period": "2018 - Present", "description": "Spearheading the structural design team for multiple 30+ story residential condominiums in BGC."}, {"role": "Senior Civil Engineer", "company": "Struktura Consult Corp.", "period": "2012 - 2018", "description": "Conducted comprehensive structural audits for older commercial buildings and designed seismic retrofitting solutions."}]'::jsonb,
  portfolio_list = '[{"title": "Skyline Tower BGC", "description": "45-story residential condominium featuring advanced wind-load resistance design.", "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"}, {"title": "Makati Commercial Hub", "description": "Mixed-use commercial development with deep foundation structural engineering.", "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"}]'::jsonb
WHERE id = '11111111-1111-1111-1111-111111111111';

UPDATE public.engineers SET 
  title = 'Geotechnical Specialist', 
  bio = 'Expert in soil mechanics and foundation engineering. Specialized in slope stability analysis and deep foundation design for various terrains in the Visayas region.',
  city = 'Cebu City', 
  years_experience = 8, 
  prc_license_number = '0654321', 
  verification_status = 'verified', 
  rating = 4.7, 
  review_count = 18,
  specialties = ARRAY['Geotechnical', 'Soil Analysis', 'Slope Stability', 'Foundation Design'],
  experience_list = '[{"role": "Senior Geotechnical Engineer", "company": "Visayas Soils Inc.", "period": "2020 - Present", "description": "Leading geotechnical investigations for major infrastructure projects in Cebu and Iloilo."}]'::jsonb,
  portfolio_list = '[{"title": "Cebu Hills Development", "description": "Comprehensive slope stabilization for a luxury residential complex.", "image": "https://images.unsplash.com/photo-1590066305974-bc19973f74f8?auto=format&fit=crop&q=80&w=800"}]'::jsonb
WHERE id = '22222222-2222-2222-2222-222222222222';

UPDATE public.engineers SET 
  title = 'Construction Management Consultant', 
  bio = 'Veteran in construction project management and residential design. Dedicated to quality control and efficient project delivery.',
  city = 'Davao City', 
  years_experience = 22, 
  prc_license_number = '0098765', 
  verification_status = 'verified', 
  rating = 4.6, 
  review_count = 56,
  specialties = ARRAY['Construction Mgmt', 'Residential', 'Cost Estimation', 'Quality Control'],
  experience_list = '[{"role": "Project Director", "company": "Davao Heights Construction", "period": "2015 - Present", "description": "Overseeing all major residential and commercial construction projects in the Davao region."}]'::jsonb,
  portfolio_list = '[{"title": "Davao Executive Villas", "description": "Project management for a high-end gated community project.", "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"}]'::jsonb
WHERE id = '33333333-3333-3333-3333-333333333333';

UPDATE public.engineers SET 
  title = 'Residential & Green Building Specialist', 
  bio = 'Passionate about sustainable construction. Certified LEED-accredited engineer with expertise in eco-friendly residential designs and green building compliance.',
  city = 'Metro Manila', 
  years_experience = 10, 
  prc_license_number = '0211345', 
  verification_status = 'verified', 
  rating = 4.8, 
  review_count = 31,
  specialties = ARRAY['Residential', 'Green Building', 'Structural Design', 'LEED Certification'],
  experience_list = '[{"role": "Principal Engineer", "company": "GreenBuild PH Corp.", "period": "2019 - Present", "description": "Leading sustainable residential design projects for private homeowners and developers in Luzon."}]'::jsonb,
  portfolio_list = '[{"title": "Eco-Village Antipolo", "description": "LEED-certified eco-village featuring rainwater harvesting and passive ventilation systems.", "image": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800"}]'::jsonb
WHERE id = '44444444-4444-4444-4444-444444444444';

UPDATE public.engineers SET 
  title = 'Bridge & Infrastructure Engineer', 
  bio = 'Infrastructure specialist with deep experience in bridge design, road engineering, and government public works projects across the Philippines.',
  city = 'Metro Manila', 
  years_experience = 18, 
  prc_license_number = '0334521', 
  verification_status = 'verified', 
  rating = 4.9, 
  review_count = 24,
  specialties = ARRAY['Bridge Design', 'Road Engineering', 'Infrastructure', 'Load Analysis'],
  experience_list = '[{"role": "Senior Infrastructure Engineer", "company": "DPWH Metro Manila", "period": "2010 - Present", "description": "Overseeing bridge inspection, rehabilitation, and new construction projects under DPWH programs."}]'::jsonb,
  portfolio_list = '[{"title": "Pasig River Pedestrian Bridge", "description": "Designed and supervised construction of a modern cable-stayed pedestrian bridge.", "image": "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=800"}]'::jsonb
WHERE id = '55555555-5555-5555-5555-555555555555';

UPDATE public.engineers SET 
  title = 'Earthquake Engineering Specialist', 
  bio = 'PhD in Earthquake Engineering. Research focus on Philippine fault systems and NSCP seismic zone compliance for mid-rise structures.',
  city = 'Quezon City', 
  years_experience = 12, 
  prc_license_number = '0445678', 
  verification_status = 'verified', 
  rating = 5.0, 
  review_count = 19,
  specialties = ARRAY['Seismic Analysis', 'Earthquake Engineering', 'NSCP Compliance', 'Structural Retrofitting'],
  experience_list = '[{"role": "Research Engineer & Consultant", "company": "UP NCTS", "period": "2016 - Present", "description": "Conducting research on Philippine earthquake risk and providing structural consultation for seismic resilience."}]'::jsonb,
  portfolio_list = '[{"title": "Quezon City School Retrofitting Program", "description": "Seismic vulnerability assessment and retrofitting design for 12 public schools.", "image": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800"}]'::jsonb
WHERE id = '66666666-6666-6666-6666-666666666666';

UPDATE public.engineers SET 
  title = 'Commercial & Industrial Structural Engineer', 
  bio = 'Young and dynamic structural engineer based in Western Visayas with a focus on commercial developments, warehouses, and light industrial structures.',
  city = 'Iloilo City', 
  years_experience = 9, 
  prc_license_number = '0556789', 
  verification_status = 'verified', 
  rating = 4.5, 
  review_count = 14,
  specialties = ARRAY['Commercial Buildings', 'Industrial', 'Steel Design', 'Structural Analysis'],
  experience_list = '[{"role": "Structural Engineer", "company": "Visayas Construction Group", "period": "2018 - Present", "description": "Handling structural design for commercial malls, office buildings, and industrial warehouses in Iloilo."}]'::jsonb,
  portfolio_list = '[{"title": "Iloilo Tech Park Phase 2", "description": "Structural design for 4-story commercial building with basement parking.", "image": "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80&w=800"}]'::jsonb
WHERE id = '77777777-7777-7777-7777-777777777777';

UPDATE public.engineers SET 
  title = 'Water Resources & Hydraulic Engineer', 
  bio = 'Expert in flood control, drainage systems, and coastal erosion engineering. Strong background in hydrological modeling using Philippine PAGASA data.',
  city = 'Cebu City', 
  years_experience = 14, 
  prc_license_number = '0667890', 
  verification_status = 'verified', 
  rating = 4.8, 
  review_count = 22,
  specialties = ARRAY['Flood Control', 'Drainage Design', 'Coastal Engineering', 'Hydraulic Analysis'],
  experience_list = '[{"role": "Hydraulic Engineer", "company": "DENR Cebu Regional Office", "period": "2014 - Present", "description": "Designing and supervising drainage and flood mitigation projects across Central Visayas."}]'::jsonb,
  portfolio_list = '[{"title": "Mandaue Flood Mitigation Project", "description": "Comprehensive drainage redesign to reduce flood occurrence in low-lying barangays.", "image": "https://images.unsplash.com/photo-1504712598893-24159a42bfdc?auto=format&fit=crop&q=80&w=800"}]'::jsonb
WHERE id = '88888888-8888-8888-8888-888888888888';

UPDATE public.engineers SET 
  title = 'Structural Inspector & Code Compliance Expert', 
  bio = 'Specializes in building code compliance, occupancy permits, and structural inspection reports for residential and commercial properties in Mindanao.',
  city = 'Davao City', 
  years_experience = 6, 
  prc_license_number = '0778901', 
  verification_status = 'verified', 
  rating = 4.4, 
  review_count = 11,
  specialties = ARRAY['Building Code', 'Structural Inspection', 'Permit Processing', 'Residential'],
  experience_list = '[{"role": "Structural Inspector", "company": "Davao Building Officials Office", "period": "2020 - Present", "description": "Conducting structural inspections, reviewing plans for code compliance, and issuing occupancy permits."}]'::jsonb,
  portfolio_list = '[{"title": "Pearl Farm Resort Expansion", "description": "Structural inspection and compliance certification for new resort facilities.", "image": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=800"}]'::jsonb
WHERE id = '99999999-9999-9999-9999-999999999999';

-- 4. Delete old packages just in case to prevent duplicates on re-run
DELETE FROM public.service_packages WHERE engineer_id IN (
  '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222', '33333333-3333-3333-3333-333333333333',
  '44444444-4444-4444-4444-444444444444', '55555555-5555-5555-5555-555555555555', '66666666-6666-6666-6666-666666666666',
  '77777777-7777-7777-7777-777777777777', '88888888-8888-8888-8888-888888888888', '99999999-9999-9999-9999-999999999999'
);

-- 5. Insert Service Packages for ALL engineers so BookingPage works
INSERT INTO public.service_packages (engineer_id, name, description, price, consultation_type)
SELECT id, 'On-site Inspection', 'Visual assessment of existing structures at your location.', 2500, 'onsite_inspection'
FROM public.engineers;

INSERT INTO public.service_packages (engineer_id, name, description, price, consultation_type)
SELECT id, 'Online Consultation', '1-hour video call to review blueprints or discuss concerns.', 1500, 'online_consultation'
FROM public.engineers;

INSERT INTO public.service_packages (engineer_id, name, description, price, consultation_type)
SELECT id, 'Design Review', 'Engineer reviews your architectural or structural plans and provides compliance feedback.', 3000, 'design_review'
FROM public.engineers;

INSERT INTO public.service_packages (engineer_id, name, description, price, consultation_type)
SELECT id, 'Quotation Request', 'Get a formal cost estimate for your construction or retrofitting project.', 800, 'quotation_request'
FROM public.engineers;

-- 6. Insert Mock Reviews
DELETE FROM public.reviews WHERE engineer_id IN (
  '11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222222'
);

INSERT INTO public.reviews (engineer_id, client_id, rating, comment, created_at) VALUES 
('11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 5, 'Engr. Juan was instrumental in ensuring our residential project in Antipolo was structurally sound.', now() - interval '2 days'),
('11111111-1111-1111-1111-111111111111', 'dddddddd-dddd-dddd-dddd-dddddddddddd', 4, 'We hired him for a commercial building audit. Very comprehensive report.', now() - interval '15 days'),
('22222222-2222-2222-2222-222222222222', 'dddddddd-dddd-dddd-dddd-dddddddddddd', 5, 'Engr. Maria provided critical soil reports that saved our project from potential foundation failure.', now() - interval '30 days');
