import {createClient} from '@supabase/supabase-js';


const superbaseURL = process.env.NEXT_PUBLIC_API_URL

const supabaseKEY = process.env.NEXT_PUBLIC_SUPABASE_KEY;


export const supabase = createClient(superbaseURL, supabaseKEY);