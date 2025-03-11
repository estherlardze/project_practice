"use server";
import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/server";
import { cookies } from "next/headers";

export async function refreshData() {
    revalidatePath("/");
}

export async function deleteTodo(id: string) {
    const cookieStore = cookies();
    const { error } = await createClient(cookieStore)
        .from("TodoList")
        .delete()
        .eq("id", parseInt(id));

    if (error) {
        console.error(error);
        return;
    }

    await refreshData();
}

export async function toggleTodo(id: string, completed: boolean) {
    const cookieStore = cookies();
    const { error } = await createClient(cookieStore)
        .from("TodoList")
        .update({ completed })
        .eq("id", parseInt(id));

    if (error) {
        console.error(error);
        return;
    }

    await refreshData();
}
