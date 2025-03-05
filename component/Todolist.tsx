import { createClient } from "@/util/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: todos } = await supabase.from("TodoList").select();

    return (
        <ul>
            {todos?.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}
