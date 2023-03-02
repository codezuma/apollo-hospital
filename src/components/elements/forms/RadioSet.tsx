export default function RadioSet(props:{radios: string[],name:string}) {
    const {radios,name} = props;
    return <>
        <div className="w-full flex flex-wrap gap-4">
            {
                radios.map((radio,index) => {
                    return <div key={index} className="w-fit my-2">
                             <input className="peer invisible w-0" type="radio" id={`${name}${index}`} name={name} value={radio} />
                             <label className="px-4 py-2 bg-slate-50 w-fit peer-checked:bg-secondary peer-checked:text-white peer-checked:border-0 cursor-pointer text-primary border border-primary rounded-full" htmlFor={`${name}${index}`}>{radio}</label>
                           </div>
                })
            }

        </div>
    </>
}