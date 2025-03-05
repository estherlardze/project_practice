import Todolist from "@/component/Todolist";
import NewTodo from "@/component/NewTodo";
import React from "react";

const Page = () => {
    return (
        <div>
            <Todolist />
            <NewTodo />
        </div>
    );
};

export default Page;
