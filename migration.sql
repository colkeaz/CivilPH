-- Run this script in your Supabase SQL Editor to add the missing columns to the engineers table
-- without dropping or recreating your existing tables.

ALTER TABLE public.engineers 
ADD COLUMN IF NOT EXISTS experience_list JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS portfolio_list JSONB DEFAULT '[]'::jsonb;
