import SessionData from "../components/user-info";
import {auth} from '@/auth';

export default async function Page() {
    const session = await auth();
    return (
        <>
        <SessionData session={session} />
        </>
    )
}