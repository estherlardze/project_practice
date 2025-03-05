"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "./supabase/client";

export async function refreshData() {
    revalidatePath("/");
}

export async function deleteTodo(id: string) {
    const { error } = await createClient()
        .from("TodoList")
        .delete()
        .eq("id", id);

    if (error) {
        console.error(error);
        return;
    }

    await refreshData();
}
