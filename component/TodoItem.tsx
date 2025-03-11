"use client";
import { deleteTodo } from "@/util/todo";
import React from "react";
import ToggleTodoState from "./ToggleTodoState";

const TodoItem = ({
    title,
    id,
    completed,
}: {
    title: string;
    id: string;
    completed: boolean;
}) => {
    return (
        <div className="space-x-2">
            <span>{title}</span>
            <button
                className="bg-red-500 text-white px-2 py-0.5"
                onClick={() => deleteTodo(id)}
            >
                D
            </button>
            <ToggleTodoState id={id} completed={completed} />
        </div>
    );
};

export default TodoItem;
