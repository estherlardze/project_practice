import { getUser } from "@/util/user";
import Link from "next/link";

async function Navbar() {
    const {
        data: { user },
        error,
    } = await getUser();

    console.log(error);

    if (!user) {
        return (
            <div>
                <Link href="/login">Login</Link>
                <Link href="/signup">Signup</Link>
            </div>
        );
    }

    return <div>{user.email}</div>;
}

export default Navbar;
