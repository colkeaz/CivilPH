-- Run this script in your Supabase SQL Editor to seed the database with the mock engineers.
-- It safely creates users in auth.users, which triggers your handle_new_user function,
-- and then updates the generated profile and engineer records with the full details.

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
('99999999-9999-9999-9999-999999999999', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'paolo@civilph.com', 'password123', now(), now(), now(), '{"provider":"email","providers":["email"]}', '{"firstName":"Paolo", "lastName":"Garcia", "role":"engineer"}', now(), now(), '', '', '', '')
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

-- 3. Update Engineers with Professional Details
UPDATE public.engineers SET 
  title = 'Senior Structural Engineer', 
  city = 'Metro Manila', 
  years_experience = 15, 
  prc_license_number = '0123456', 
  verification_status = 'verified', 
  rating = 4.9, 
  review_count = 42,
  specialties = ARRAY['Structural Analysis', 'Seismic Retrofitting', 'Geotechnical Evaluation', 'Project Management', 'High-Rise Construction']
WHERE id = '11111111-1111-1111-1111-111111111111';

UPDATE public.engineers SET 
  title = 'Geotechnical Specialist', 
  city = 'Cebu City', 
  years_experience = 8, 
  prc_license_number = '0654321', 
  verification_status = 'verified', 
  rating = 4.7, 
  review_count = 18,
  specialties = ARRAY['Geotechnical', 'Soil Analysis', 'Slope Stability', 'Foundation Design']
WHERE id = '22222222-2222-2222-2222-222222222222';

UPDATE public.engineers SET 
  title = 'Construction Management Consultant', 
  city = 'Davao City', 
  years_experience = 22, 
  prc_license_number = '0098765', 
  verification_status = 'verified', 
  rating = 4.6, 
  review_count = 56,
  specialties = ARRAY['Construction Mgmt', 'Residential', 'Cost Estimation', 'Quality Control']
WHERE id = '33333333-3333-3333-3333-333333333333';

UPDATE public.engineers SET 
  title = 'Residential & Green Building Specialist', 
  city = 'Metro Manila', 
  years_experience = 10, 
  prc_license_number = '0211345', 
  verification_status = 'verified', 
  rating = 4.8, 
  review_count = 31,
  specialties = ARRAY['Residential', 'Green Building', 'Structural Design', 'LEED Certification']
WHERE id = '44444444-4444-4444-4444-444444444444';

UPDATE public.engineers SET 
  title = 'Bridge & Infrastructure Engineer', 
  city = 'Metro Manila', 
  years_experience = 18, 
  prc_license_number = '0334521', 
  verification_status = 'verified', 
  rating = 4.9, 
  review_count = 24,
  specialties = ARRAY['Bridge Design', 'Road Engineering', 'Infrastructure', 'Load Analysis']
WHERE id = '55555555-5555-5555-5555-555555555555';

UPDATE public.engineers SET 
  title = 'Earthquake Engineering Specialist', 
  city = 'Quezon City', 
  years_experience = 12, 
  prc_license_number = '0445678', 
  verification_status = 'verified', 
  rating = 5.0, 
  review_count = 19,
  specialties = ARRAY['Seismic Analysis', 'Earthquake Engineering', 'NSCP Compliance', 'Structural Retrofitting']
WHERE id = '66666666-6666-6666-6666-666666666666';

UPDATE public.engineers SET 
  title = 'Commercial & Industrial Structural Engineer', 
  city = 'Iloilo City', 
  years_experience = 9, 
  prc_license_number = '0556789', 
  verification_status = 'verified', 
  rating = 4.5, 
  review_count = 14,
  specialties = ARRAY['Commercial Buildings', 'Industrial', 'Steel Design', 'Structural Analysis']
WHERE id = '77777777-7777-7777-7777-777777777777';

UPDATE public.engineers SET 
  title = 'Water Resources & Hydraulic Engineer', 
  city = 'Cebu City', 
  years_experience = 14, 
  prc_license_number = '0667890', 
  verification_status = 'verified', 
  rating = 4.8, 
  review_count = 22,
  specialties = ARRAY['Flood Control', 'Drainage Design', 'Coastal Engineering', 'Hydraulic Analysis']
WHERE id = '88888888-8888-8888-8888-888888888888';

UPDATE public.engineers SET 
  title = 'Structural Inspector & Code Compliance Expert', 
  city = 'Davao City', 
  years_experience = 6, 
  prc_license_number = '0778901', 
  verification_status = 'verified', 
  rating = 4.4, 
  review_count = 11,
  specialties = ARRAY['Building Code', 'Structural Inspection', 'Permit Processing', 'Residential']
WHERE id = '99999999-9999-9999-9999-999999999999';
