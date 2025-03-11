import { createClient } from "@/util/supabase/server";
import { cookies } from "next/headers";
import TodoItem from "./TodoItem";

export default async function Page() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data: todos } = await supabase.from("TodoList").select();

    return (
        <ul className="space-y-2">
            {todos?.map((todo) => (
                <li className="list-none" key={todo.id}>
                    <TodoItem
                        title={todo.title}
                        id={todo.id}
                        completed={todo.completed}
                    />
                </li>
            ))}
        </ul>
    );
}
