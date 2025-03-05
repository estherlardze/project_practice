"use client";
import React from "react";

const TodoItem = ({ title }: { title: string }) => {
    return (
        <div>
            <span>{title}</span>
            <button onClick={}>Delete</button>
        </div>
    );
};

export default TodoItem;
