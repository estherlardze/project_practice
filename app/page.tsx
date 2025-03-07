import { notFound } from "next/navigation";
import React from "react";

const Page = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const data = await res.json();

    if (!data.loading) {
        return notFound();
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>{data.title}</div>
            <div>{data.completed ? "Done" : "Not Done"}</div>
        </div>
    );
};

export default Page;
