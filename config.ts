import { createBrowserClient } from "@supabase/ssr";

const superbaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseKEY || !superbaseURL) {
    throw new Error("Missing Supabase credentials");
}

export const supabaseClient = createBrowserClient(superbaseURL, supabaseKEY);
