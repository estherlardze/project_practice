"use server";
import { createClient } from "./supabase/server";

async function createUser(username: string, email: string, password: string) {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                username,
            },
        },
    });

    return { data, error };
}

async function login(email: string, password: string) {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    return { data, error };
}

async function getUser() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getUser();

    return { data, error };
}

export { createUser, login, getUser };
