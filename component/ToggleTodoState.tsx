import { toggleTodo } from "@/util/todo";

const ToggleTodoState = ({
    id,
    completed,
}: {
    id: string;
    completed: boolean;
}) => {
    return (
        <button
            onClick={() => toggleTodo(id, !completed)}
            className={`${
                completed ? "bg-green-500" : "bg-red-500"
            } text-white px-2 py-0.5`}
        >
            {completed ? "Done" : "Not Done"}
        </button>
    );
};

export default ToggleTodoState;
