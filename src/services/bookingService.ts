import { supabase } from '../utils/supabaseClient';

export interface Appointment {
  id?: string;
  client_id: string;
  engineer_id: string;
  service_package_id: number;
  scheduled_date: string;
  scheduled_time: string;
  status?: string;
  location_address?: string;
  notes?: string;
}

export const createAppointment = async (appointment: Appointment) => {
  const { data, error } = await supabase
    .from('appointments')
    .insert([appointment])
    .select();

  if (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }

  return data[0];
};

export const getClientAppointments = async (clientId: string) => {
  const { data, error } = await supabase
    .from('appointments')
    .select(`
      *,
      engineers (
        profiles (
          first_name,
          last_name
        )
      ),
      service_packages (
        name,
        price
      )
    `)
    .eq('client_id', clientId)
    .order('scheduled_date', { ascending: false });

  if (error) {
    console.error('Error fetching client appointments:', error);
    throw error;
  }

  return data;
};

export const getEngineerAppointments = async (engineerId: string) => {
  const { data, error } = await supabase
    .from('appointments')
    .select(`
      *,
      profiles (
        first_name,
        last_name
      ),
      service_packages (
        name,
        price
      )
    `)
    .eq('engineer_id', engineerId)
    .order('scheduled_date', { ascending: false });

  if (error) {
    console.error('Error fetching engineer appointments:', error);
    throw error;
  }

  return data;
};

export const getReports = async (userId: string, role: 'homeowner' | 'engineer') => {
  const query = supabase
    .from('reports')
    .select(`
      *,
      profiles!reports_client_id_fkey (
        first_name,
        last_name
      ),
      engineers!reports_engineer_id_fkey (
        profiles (
          first_name,
          last_name
        )
      )
    `);

  if (role === 'homeowner') {
    query.eq('client_id', userId);
  } else {
    query.eq('engineer_id', userId);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching reports:', error);
    throw error;
  }

  return data;
};

export const updateReportStatus = async (reportId: string, status: string) => {
  const { data, error } = await supabase
    .from('reports')
    .update({ status })
    .eq('id', reportId)
    .select();

  if (error) {
    console.error('Error updating report status:', error);
    throw error;
  }

  return data[0];
};
