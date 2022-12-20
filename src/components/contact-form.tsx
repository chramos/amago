import React from "react";
import Input from "./input";
import TextArea from "./input-text-area";
import emailJS from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

type ContactFormProps = {};
const ContactForm = ({}: ContactFormProps) => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        if (!name || !phone || !email || !message) {
          return;
        }
        toast.promise(
          emailJS
            .send("service_ykc3zww", "template_qeh6w9b", {
              name,
              phone,
              email,
              message,
            })
            .then(() => {
              setName("");
              setPhone("");
              setEmail("");
              setMessage("");
            }),
          {
            loading: "Enviando",
            success: "Sua mensagem foi enviada com sucesso",
            error: "Oops, algo deu errado",
          }
        );
      }}
    >
      <Input
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={setName}
        required
      />
      <div className="flex gap-4">
        <div className="w-full">
          <Input
            type="tel"
            placeholder="Telefone"
            value={phone}
            onChange={setPhone}
            required
          />
        </div>
        <div className="w-full">
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={setEmail}
            required
          />
        </div>
      </div>
      <TextArea
        rows={8}
        placeholder="Digite sua mensagem aqui"
        value={message}
        onChange={setMessage}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center transition-all duration-200 py-3 border border-transparent text-sm uppercase font-medium font-museo rounded-full shadow-sm text-white bg-primary-500 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-200"
      >
        Enviar
      </button>
      <Toaster
        toastOptions={{
          className: "font-museo",
        }}
      />
    </form>
  );
};

export default ContactForm;
