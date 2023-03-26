    import { UserIcon } from "@heroicons/react/24/solid";
    import { ChangeEvent } from "react";
    import { JsxElement, VoidExpression } from "typescript";
    interface InputFieldProps extends React.HTMLAttributes<HTMLInputElement>{
        Icon:any,
        name:string,
        type:string,
        required:boolean
    } 
    export default function InputField(props:InputFieldProps) {

        const {name,required,Icon,type,onChange} = props;   
        return <>
            <div className="w-full px-4 ">
                <div className="md:mb-8 mb-4">
                    <label className="mb-3 capitalize block text-base font-medium text-deepforestlight">
                        {name.split("-").join(" ")}<span className="text-red-500">{required? '*':''}</span>
                    </label>
                    <div className="relative">
                        <input required={required} type={type} onChange={onChange} name={name}  className={`w-full rounded-xl border border-form-stroke p-3 pl-12 text-primary placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]`} />
                        <span className="absolute top-1/2 left-4 -translate-y-1/2">
                            <Icon className="w-6 h-6 text-gray-300"></Icon>
                        </span>
                    </div>
                </div>
            </div>
        </>
    }
