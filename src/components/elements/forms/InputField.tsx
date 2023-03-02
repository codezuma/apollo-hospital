import { UserIcon } from "@heroicons/react/24/solid";
import { JsxElement } from "typescript";

export default function InputField(props:{name:string,type:'text'|'email'|'tel',Icon:any,placeholder:string}) {
    const {name,type,Icon,placeholder} = props;
    return <>
        <div className="w-full px-4 ">
            <div className="md:mb-8 mb-4">
                <label className="mb-3 block text-base font-medium text-deepforestlight">
                    {name}
                </label>
                <div className="relative">
                    <input type={type} placeholder={placeholder} className={`w-full rounded-xl border border-form-stroke p-3 pl-12 text-primary placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]`} />
                    <span className="absolute top-1/2 left-4 -translate-y-1/2">
                         <Icon className="w-6 h-6 text-gray-300"></Icon>
                    </span>
                </div>
            </div>
        </div>
    </>
}
