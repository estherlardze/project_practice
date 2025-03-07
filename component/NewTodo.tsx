"use client";
import { createClient } from "@/util/supabase/client";
import { refreshData } from "@/util/todo";

const NewTodo = () => {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const title = formData.get("title");

        const { data, error } = await createClient().from("TodoList").insert({
            title: title,
        });

        if (error) {
            console.error(error);
            return;
        }

        console.log(data);
        await refreshData();
    }

    return (
        <form onSubmit={handleSubmit} className="grid">
            <input
                type="text"
                name="title"
                className="border"
                placeholder="New Todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default NewTodo;
