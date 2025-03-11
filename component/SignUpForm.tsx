"use client";
import { createUser } from "@/util/user";

function SignUpForm() {
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const username = formData.get("username") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { error, data } = await createUser(username, email, password);

        if (error) {
            console.error(error);
            alert(error.message);
            return;
        }

        alert("Sign up successful");
        console.log(data.user);
    }

    return (
        <div className="min-w-[300px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="border border-gray-300 rounded-md p-2"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded-md p-2"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded-md p-2"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md w-fit"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default SignUpForm;
