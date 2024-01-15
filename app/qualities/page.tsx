import Qualities from "../components/QualitiesSelector";

export default function Page() {
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