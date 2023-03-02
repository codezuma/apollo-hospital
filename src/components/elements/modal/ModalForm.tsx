import { ModalContext } from "@/pages/_app";
import { EnvelopeIcon, PaperAirplaneIcon, PhoneIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { ReactNode, useContext } from "react";
import InputField from "../forms/InputField";
import TextArea from "../forms/TextArea";


interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function ModalForm(props:any) {
  const [openModal,closeModal] = useContext(ModalContext);
  return (
     <> {
      <div  className={`fixed top-0 h-screen flex justify-center items-center w-full  z-[100] `} >
       <div onClick={closeModal} className="absolute h-full w-full bg-[#0000003f]  z-[105]"></div>
       <div onClick={(e)=>{e.preventDefault()}} className="modal-box scrollbar relative z-[110] md:h-[500px] h-[90%] overflow-y-auto md:w-1/2 w-full  rounded-md bg-white px-6 py-8">
        <div className="right-1 top-1 flex z-50 justify-end  sticky cursor-pointer">
        <div onClick={closeModal} className=" w-fit  p-1 rounded-full hover:bg-red-600 transition-all hover:text-white   text-primary bg-gray-200">
          <XMarkIcon className="w-6 h-6"></XMarkIcon>
        </div>
        </div>
       
        <form action="">
          <h2 className="text-primary text-2xl font-semibold mb-8">Contact Form</h2>
          <InputField name={"FIrst name"} placeholder="John" Icon={UserIcon} type={"text"}></InputField>
          <InputField name={"Email"} placeholder="johndoe@hello.com" Icon={EnvelopeIcon} type={"email"}></InputField>
          <InputField name={"PhoneNumber"} placeholder="+91 856 547 4555" Icon={PhoneIcon}  type={"tel"}></InputField>
          <TextArea name={"Message"} placeholder="I want branding and web development for my product" type={"email"} ></TextArea>
          <button className="btn-primary w-fit flex gap-2 items-center btn-base ml-12 md:ml-0"> Send Request <PaperAirplaneIcon className="w-6"></PaperAirplaneIcon> </button>
        </form>
      </div>
    </div>
     }
       
    </>
  );
}
