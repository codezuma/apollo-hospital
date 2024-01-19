import { sendContactForm } from "@/lib/api";
import { ModalContext } from "@/pages/_app";
import { EnvelopeIcon, GiftIcon, PaperAirplaneIcon, PhoneIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { send } from "process";
import React, { ChangeEvent, FormEvent, ReactNode, useContext, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import InputField from "./elements/forms/InputField";
import TextArea from "./elements/forms/TextArea";
import { useRouter } from "next/router";


interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function ContactFormSmall(props: any) {
  const defaultFormData = {
    'name': '',
    'email': '',
    'phoneNumber': '',
    'message': ''
  }
  const [formData, setFormData] = useState(defaultFormData);
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter();

  const sendMail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formRef.current?.reset();
    try {
      await sendContactForm(formData);
      toast.success('Form Submitted');
      router.push("/thank-you");
      //download pdf
      downloadPDF();
      
    } catch (error) {
      toast('Error Acuured Please Try Again', { position: 'top-center' });
      console.error(error);
    }
  };
  function downloadPDF() {
    if(typeof window === 'undefined') return;
    const link = document.createElement('a');
    link.href = '/apollo-clinic-free-consultaion-card.pdf'; // Replace with your PDF file's URL
    link.download = 'apollo-clinic-free-consultaion-card.pdf'; // The name of the downloaded file
    link.dispatchEvent(new MouseEvent('click'));
}

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value: typeof formData[keyof typeof formData] = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }
  return (
    <>
      <div className={` w-full flex justify-start items-center`} >
        <Toaster></Toaster>
        <form ref={formRef} className="w-full flex-col flex" onSubmit={(e: FormEvent<HTMLFormElement>) => sendMail(e)}  >
          <h2 className="text-white  text-2xl font-semibold px-4 mb-2">Get 2 Free Consultations & Enjoy a special limited-time discount</h2>
          <p className="text-gray-300 px-4 mb-6"> Enjoy a special limited-time discount.  </p>
          <InputField required={true} onChange={(event: ChangeEvent<HTMLInputElement>) => { handleChange(event) }} name={"name"}  Icon={UserIcon} type={"text"}></InputField>
          <InputField required={false} onChange={(event: ChangeEvent<HTMLInputElement>) => { handleChange(event) }} name={"email"}  Icon={EnvelopeIcon} type={"email"}></InputField>
          <InputField required={true} onChange={(event: ChangeEvent<HTMLInputElement>) => { handleChange(event) }} name={"phoneNumber"}  Icon={PhoneIcon} type={"tel"}></InputField>
          <TextArea onChange={(event: ChangeEvent<HTMLTextAreaElement>) => { handleChange(event) }} name={"Message"} placeholder="Your message here" type={"email"} ></TextArea>
          <button onClick={(e) => e.stopPropagation()} className="  justify-center btn-primary w-full flex gap-2 items-center btn-base ml-12 md:ml-0"> Get Free Consutation <GiftIcon className="w-6"/> </button>
        </form>
      </div>
    </>
  );
}
