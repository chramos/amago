import Image from "next/image";
import React from "react";
import ContactForm from "src/components/contact-form";
import Container from "src/components/container";
import Input from "src/components/input";
import TextArea from "src/components/input-text-area";
import AmagoLocationImg from "../assets/images/amago-location.png";

const ContactScreen = () => {
  const [value, setValue] = React.useState("");
  return (
    <React.Fragment>
      <section className="bg-gradient-to-b from-[#DCD4C8] to-white">
        <Container className="min-h-max">
          <div className="text-left relative grid grid-cols-1 lg:grid-cols-2 items-center lg:items-start lg:flex-row pt-16 gap-32 pb-44">
            <div className="flex flex-col">
              <p className="font-semibold text-lg leading-6 text-secondary-800 font-museo">
                Entre em contato conosco!
              </p>
              <div className="h-4" />
              <ContactForm />
            </div>
            <div>
              <p className="font-bold text-base leading-6 text-secondary-800 font-museo uppercase">
                Onde estamos
              </p>
              <div className="h-4" />
              <p className="text-secondary-800 uppercase font-semibold text-sm font-museo">
                Endereço
              </p>
              <div className="h-2" />
              <p className="font-museo text-sm ">
                Rodovia Dr. Antônio Luiz Moura Gonzaga, 3339 - Sala 105 - Rio
                Tavares <br />
                Florianópolis - SC
              </p>
              <div className="h-4" />
              <Image src={AmagoLocationImg.src} width={560} height={344} />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default ContactScreen;
