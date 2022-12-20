import Image from "next/image";

import React from "react";
import Button from "./button";
import ContactBackground from "../assets/images/contact-background.png";
import Container from "./container";

type ContactSectionProps = {};
const ContactSection = ({}: ContactSectionProps) => {
  return (
    <section className="bg-[#DCD4C8] mt-[200px] relative">
      <div className="hidden lg:block absolute  flex-1 w-full h-full">
        <Image src={ContactBackground.src} layout="fill" objectFit="cover" />
      </div>
      <Container className="min-h-max">
        <div className="text-center lg:text-left grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:block"></div>
          <div className="lg:pl-11 py-28 backdrop-blur">
            <span className="uppercase text-primary-500 font-semibold font-museo text-sm">
              CONTATO
            </span>
            <div className="h-6" />
            <h3 className=" text-3xl font-semibold text-secondary-500 font-museo max-w-[568px]">
              Transformações acontecem quando tudo se harmoniza
            </h3>
            <div className="h-4" />
            <p className="font-museo text-base leading-6 max-w-[568px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pellentesque mauris magna, eget ultricies velit consequat sed.
              Cras tempus ante arcu, sit amet sollicitudin felis consectetur
              quis.
            </p>
            <div className="h-6" />
            <Button>Entre em contato</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
