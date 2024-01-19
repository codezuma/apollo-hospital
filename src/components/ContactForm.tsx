import { sendContactForm } from "@/lib/api";
import { ModalContext } from "@/pages/_app";
import { EnvelopeIcon, PaperAirplaneIcon, PhoneIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/solid";
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
function downloadPDF() {
  if(typeof window === 'undefined') return;
  const link = document.createElement('a');
  link.href = '/apollo-clinic-free-consultaion-card.pdf'; // Replace with your PDF file's URL
  link.download = 'apollo-clinic-free-consultaion-card.pdf'; // The name of the downloaded file
  link.dispatchEvent(new MouseEvent('click'));
}

export default function ContactForm(props: any) {
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
      downloadPDF();
    } catch (error) {
      toast('Error Acuured Please Try Again', { position: 'top-center' });

    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let value: typeof formData[keyof typeof formData] = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  }
  return (
    <>
      <div className={`container-main w-full flex justify-start items-center`} >
        <Toaster></Toaster>
        <form ref={formRef} className="w-full md:w-3/4" onSubmit={(e: FormEvent<HTMLFormElement>) => sendMail(e)}  >
          <h2 className="text-primary text-2xl font-semibold mb-8">Contact Form</h2>
          <InputField required={true} onChange={(event: ChangeEvent<HTMLInputElement>) => { handleChange(event) }} name={"name"} placeholder="John" Icon={UserIcon} type={"text"}></InputField>
          <InputField required={false} onChange={(event: ChangeEvent<HTMLInputElement>) => { handleChange(event) }} name={"email"} placeholder="johndoe@hello.com" Icon={EnvelopeIcon} type={"email"}></InputField>
          <InputField required={true} onChange={(event: ChangeEvent<HTMLInputElement>) => { handleChange(event) }} name={"phoneNumber"} placeholder="+91 856 547 4555" Icon={PhoneIcon} type={"tel"}></InputField>
          <TextArea onChange={(event: ChangeEvent<HTMLTextAreaElement>) => { handleChange(event) }} name={"message"} placeholder="Your message here" type={"email"} ></TextArea>
          <button onClick={(e) => e.stopPropagation()} className="btn-primary w-fit flex gap-2 items-center btn-base ml-12 md:ml-0"> Submit <PaperAirplaneIcon className="w-6"></PaperAirplaneIcon> </button>
        </form>
      </div>
    </>
  );
}
