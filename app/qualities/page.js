const qualities = [
    'Courtesy',
    'Integrity',
    'Perserverance', 
    'Self control', 
    'Indomitable spirit'
];

export default function Page() {
    const qualityList =  qualities.map(quality => {
        return (
        <div key={quality}>
            <label for={quality}>{quality}</label>
            <input type="range" max={10} min={1} id={quality} list="values" name={quality} />
        </div>
        )
    });

    return (
        <main className="p-10">
            <h1 className="text-2xl font-bold">Qualities</h1>
            <h2 className="text-xl font-bold text-blue-800">Let's assess our qualities.</h2>
            <form>
            <datalist id="values">
                <option value="2"></option>
                <option value="4"></option>
                <option value="6"></option>
                <option value="8"></option>
                <option value="10"></option>
            </datalist>
                {qualityList}
            </form>
        </main>
    )
}