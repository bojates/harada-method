import SessionData from "../components/user-info";
import {auth} from '@/auth';

export default async function Page() {
    const session = await auth();
    return (
        <>
        <h1>Here is the page</h1>
        <SessionData session={session} />
        </>
    )
}