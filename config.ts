import {createClient} from '@supabase/supabase-js';


const superbaseURL=process.env.NEXT_PUBLIC_API_URL 

const supabaseKEY = process.env.NEXT_PUBLIC_API_KEY;

if(!supabaseKEY || !superbaseURL){
    throw new Error('Missing Supabase credentials')
}


export const supabase = createClient(supabaseKEY, superbaseURL);