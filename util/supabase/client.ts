import { createBrowserClient } from "@supabase/ssr";
import { Database } from "@/database.types";
import { SupabaseClient } from "@supabase/supabase-js";

export const createClient = () =>
    createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    ) as SupabaseClient<Database>;
