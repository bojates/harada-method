// import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Qualities from "../../components/QualitiesSelector";

export default async function Page() {
    // const session = await getServerSession();

    // if (!session || !session.user) { 
    //     redirect('/api/auth/signin');
    // }
    
    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold">Qualities</h1>
            <h2 className="text-xl font-bold text-blue-800">Assess your qualities.</h2>
            <form>
            <datalist id="values">
                <option value="2"></option>
                <option value="4"></option>
                <option value="6"></option>
                <option value="8"></option>
                <option value="10"></option>
            </datalist>
                <Qualities />
            </form>
        </main>
    )
}