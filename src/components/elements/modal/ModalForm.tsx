import { sendContactForm } from "@/lib/api";
import { ModalContext } from "@/pages/_app";
import { EnvelopeIcon, PaperAirplaneIcon, PhoneIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { send } from "process";
import React, { ChangeEvent, FormEvent, ReactNode, useContext, useRef, useState } from "react";
import InputField from "../forms/InputField";
import { Toaster, toast } from "react-hot-toast";
import TextArea from "../forms/TextArea";


interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function ModalForm(props: any) {
  const [openModal, closeModal] = useContext(ModalContext);
  const defaultFormData = {
    'name': '',
    'email': '',
    'phoneNumber': '',
    'message': ''
  }
  const [formData, setFormData] = useState(defaultFormData);

  const sendMail = async (event: FormEvent) => {
    event.preventDefault();
    console.log(formData);

    try {
      await sendContactForm(formData);
      toast('mail send');
      closeModal();
    } catch (error) {
      toast('mail send',{position:'top-center'});
       closeModal();

    }
  };

const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  let value: typeof formData[keyof typeof formData] = event.target.value;
  setFormData({ ...formData, [event.target.name]: value });
}
return (
  <> {
    <div className={`fixed top-0 h-screen flex justify-center items-center w-full  z-[100] `} >
          <Toaster></Toaster>
      <div onClick={closeModal} className="absolute h-full w-full bg-[#0000003f]  z-[105]"></div>
      <div onClick={(e) => { e.preventDefault() }} className="modal-box scrollbar relative z-[110] md:h-[500px] h-[90%] overflow-y-auto md:w-1/2 w-full  rounded-md bg-white px-6 py-8">
        <div className="right-1 top-1 flex z-50 justify-end  sticky cursor-pointer">
          <div onClick={closeModal} className=" w-fit  p-1 rounded-full hover:bg-red-600 transition-all hover:text-white   text-primary bg-gray-200">
            <XMarkIcon className="w-6 h-6"></XMarkIcon>
          </div>
        </div>

        <form onSubmit={sendMail}  >
          <h2 className="text-primary text-2xl font-semibold mb-8">Contact Form</h2>
          <InputField required={true} onChange={(event: ChangeEvent<HTMLInputElement>) => { handleChange(event) }} name={"name"} placeholder="John" Icon={UserIcon} type={"text"}></InputField>
          <InputField required={false} onChange={(event: ChangeEvent<HTMLInputElement>) => { handleChange(event) }} name={"email"} placeholder="johndoe@hello.com" Icon={EnvelopeIcon} type={"email"}></InputField>
          <InputField required={true} onChange={(event: ChangeEvent<HTMLInputElement>) => { handleChange(event) }} name={"phoneNumber"} placeholder="+91 856 547 4555" Icon={PhoneIcon} type={"tel"}></InputField>
          <TextArea onChange={(event: ChangeEvent<HTMLTextAreaElement>) => { handleChange(event) }} name={"message"} placeholder="I want branding and web development for my product" type={"email"} ></TextArea>
          <button onClick={(e) => e.stopPropagation()} className="btn-primary w-fit flex gap-2 items-center btn-base ml-12 md:ml-0"> Send Request <PaperAirplaneIcon className="w-6"></PaperAirplaneIcon> </button>
          {/*           <input type={"submit"}  value={"Send Request"} className="btn-primary w-fit flex gap-2 items-center btn-base ml-12 md:ml-0" /> 
 */}        </form>
      </div>
    </div>
  }

  </>
);
}
