import { supabase } from '../utils/supabaseClient';

export interface EngineerProfile {
  id: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  role: string;
  engineers: {
    title: string;
    bio: string;
    specialties: string[];
    years_experience: number;
    city: string;
    region: string;
    rating: number;
    review_count: number;
    verification_status: string;
    is_featured: boolean;
    prc_license_number?: string;
    experience_list?: any[];
    portfolio_list?: any[];
  };
}

export const getEngineers = async () => {
  const { data, error } = await supabase
    .from('profiles')
    .select(`
      id,
      first_name,
      last_name,
      avatar_url,
      role,
      engineers!inner (
        title,
        bio,
        specialties,
        years_experience,
        city,
        region,
        rating,
        review_count,
        verification_status,
        is_featured
      )
    `)
    .eq('role', 'engineer');

  if (error) {
    console.error('Error fetching engineers:', error);
    throw error;
  }

  return data as unknown as EngineerProfile[];
};

export const getEngineerById = async (id: string) => {
  const { data, error } = await supabase
    .from('profiles')
    .select(`
      id,
      first_name,
      last_name,
      avatar_url,
      role,
      phone,
      engineers!inner (
        title,
        bio,
        specialties,
        years_experience,
        city,
        region,
        rating,
        review_count,
        verification_status,
        is_featured,
        prc_license_number,
        experience_list,
        portfolio_list
      )
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching engineer:', error);
    throw error;
  }

  return data as unknown as EngineerProfile & { phone: string };
};

export const getServicePackages = async (engineerId: string) => {
  const { data, error } = await supabase
    .from('service_packages')
    .select('*')
    .eq('engineer_id', engineerId);

  if (error) {
    console.error('Error fetching service packages:', error);
    throw error;
  }

  return data;
};

export const getEngineerReviews = async (engineerId: string) => {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      profiles!reviews_client_id_fkey (
        first_name,
        last_name
      )
    `)
    .eq('engineer_id', engineerId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching engineer reviews:', error);
    throw error;
  }

  return data;
};
