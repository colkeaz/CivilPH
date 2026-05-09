-- 1. Create a function to fix missing profiles
CREATE OR REPLACE FUNCTION fix_missing_profiles() RETURNS void AS $$
DECLARE
    user_record RECORD;
BEGIN
    FOR user_record IN SELECT * FROM auth.users LOOP
        -- Check if profile exists
        IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = user_record.id) THEN
            -- Insert missing profile
            INSERT INTO public.profiles (id, first_name, last_name, role)
            VALUES (
                user_record.id,
                user_record.raw_user_meta_data->>'firstName',
                user_record.raw_user_meta_data->>'lastName',
                COALESCE(user_record.raw_user_meta_data->>'role', 'homeowner')
            );
            
            -- If the role is engineer, also create an entry in engineers table
            IF (user_record.raw_user_meta_data->>'role' = 'engineer') THEN
                INSERT INTO public.engineers (id) VALUES (user_record.id) ON CONFLICT DO NOTHING;
            END IF;
        END IF;
    END LOOP;
END;
$$ LANGUAGE plpgsql;

-- 2. Execute the function
SELECT fix_missing_profiles();

-- 3. Drop the function to clean up
DROP FUNCTION fix_missing_profiles();
