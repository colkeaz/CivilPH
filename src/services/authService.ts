import { supabase } from '../utils/supabaseClient';

export const signup = async (userData: any) => {
  const { fullName, email, password, phone, role } = userData;
  const firstName = fullName.split(' ')[0];
  const lastName = fullName.split(' ').slice(1).join(' ') || ' ';

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        phone,
        role: role || 'homeowner',
      },
    },
  });

  if (error) throw error;
  return data;
};

export const login = async (credentials: any) => {
  const { email, password } = credentials;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;
  return data;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
};
