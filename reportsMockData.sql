-- Run this script in your Supabase SQL Editor to seed the reports and make them visible to everyone.

-- 1. Update RLS so that ALL users can see reports (for presentation purposes)
DROP POLICY IF EXISTS "Involved parties can see reports." ON public.reports;
CREATE POLICY "Everyone can see reports." ON public.reports FOR SELECT USING (true);

-- 2. Clear old mock reports (optional, just to avoid duplicates if run multiple times)
DELETE FROM public.reports WHERE title LIKE '%Assessment%' OR title LIKE '%Analysis%' OR title LIKE '%Audit%';

-- 3. Insert Mock Reports
INSERT INTO public.reports (engineer_id, client_id, title, summary, findings, recommendations, estimated_cost_min, estimated_cost_max, status, created_at)
VALUES 
('11111111-1111-1111-1111-111111111111', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 'Structural Assessment: Quezon City Residence', 'Visual inspection of 2-story residential property following recent seismic activity. Focus on load-bearing walls and foundation integrity.', '1. Minor hairline cracks observed on exterior masonry.\n2. No significant settlement detected in foundation.\n3. Roof truss connections show slight corrosion.', '1. Seal exterior cracks with epoxy injection to prevent moisture intrusion.\n2. Clean and apply rust-inhibitor to exposed steel trusses.\n3. Schedule follow-up inspection in 2 years.', 15000.00, 25000.00, 'submitted', now() - interval '5 days'),

('22222222-2222-2222-2222-222222222222', 'dddddddd-dddd-dddd-dddd-dddddddddddd', 'Soil Analysis & Slope Stability Report', 'Geotechnical evaluation for proposed hillside development in Cebu City.', '1. Soil profile consists primarily of highly weathered limestone.\n2. Evidence of past minor landslides on the eastern slope.\n3. Groundwater table is relatively deep (>10m).', '1. Implement retaining wall structures on the eastern boundary.\n2. Ensure proper surface drainage to prevent water accumulation.\n3. Utilize deep foundation techniques (bored piles) for main structures.', 250000.00, 400000.00, 'acknowledged', now() - interval '12 days'),

('33333333-3333-3333-3333-333333333333', 'cccccccc-cccc-cccc-cccc-cccccccccccc', 'Commercial Building Quality Audit', 'Comprehensive audit of a 5-story commercial building under construction to ensure adherence to NSCP standards.', '1. Concrete compressive strength tests passed all requirements.\n2. Rebar spacing in columns C1-C4 deviates slightly from plans but within allowable tolerances.\n3. Ground floor slab lacks proper curing in some areas.', '1. Monitor C1-C4 columns during next pouring phase.\n2. Apply curing compound immediately to affected ground floor slabs.\n3. Proceed with next phase of construction.', 0.00, 0.00, 'draft', now() - interval '1 day');
