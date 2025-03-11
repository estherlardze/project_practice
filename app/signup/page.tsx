import SignUpForm from "@/component/SignUpForm";

function SignUpPage() {
    return (
        <div className="flex flex-col items-center w-full mt-10">
            <h1 className="text-4xl font-bold">Sign Up</h1>
            <SignUpForm />
        </div>
    );
}

export default SignUpPage;
