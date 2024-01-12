'use client'
const qualities = [
    'accountable',
'adaptable',
'authentic',
'brave',
'capable',
'caring',
'confident',
'creative',
'determined',
'ethical',
'flexible',
'highly_skilled',
'honest',
'imaginative',
'independent',
'initiative',
'innovative',
'inspired',
'inquisitive',
'empowered',
'knowledgeable',
'motivated',
'organized',
'personable',
'prepared',
'realistic',
'responsible',
'self_managed',
'strategic',
'strong_willed',
'supportive',
'trustworthy',
'visionary',
];

export default function Page() {
    let value = '';
    function handleQuality(e) {
        // console.log('changed');
        // console.log(e.target);
        // const form = e.target;
        // const formData = new FormData(form);
        value = e.target.value;
        // console.log(e.target.value)
        // alert('changed');
    }
    const qualityList =  qualities.map(quality => {
        return (
        <div key={quality} className="p-2">
            <div>
            <label htmlFor={quality} className="text-xl text-pink-900 font-semibold block">{quality}</label>
            <input onChange={handleQuality} type="range" max={10} min={1} id={quality} list="values" name={quality} />
            </div>
            <div>
            <label htmlFor={quality + '-improve'} className="py-3  block">Can be improved by: </label>
            <input className='p-1' type="text" size="38" maxLength={100} id={quality+ '-improve'}/>
            </div>
        </div>
        )
    });

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
                {qualityList}
            </form>
        </main>
    )
}