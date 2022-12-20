import Image from "next/image";
import Link from "next/link";
import LogoFull from "src/assets/svg/logo-full.svg";
import Logo from "src/assets/svg/logo.svg";
import FacebookImg from "../assets/images/facebook.jpg";
import InstagramImg from "../assets/images/insta.png";
import Container from "./container";

export type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <Container className="min-h-max">
      <div className="flex flex-col lg:flex-row pt-12 text-center lg:text-left items-center lg:items-start">
        <Logo className="block lg:hidden" width="42px" height="42px" />
        <div className="h-10 lg:h-0" />
        <LogoFull className="hidden lg:block" width="159px" height="72px" />
        <div className="lg:pl-20">
          <p className="uppercase font-semibold text-sm font-museo pb-1">
            E-mail
          </p>
          <p className="font-museo text-sm">patricia@amagofloripa.com.br</p>
          <div className="h-6" />
          <p className="uppercase font-semibold text-sm font-museo pb-1">
            Telefone
          </p>
          <p className="font-museo text-sm">(48) 9 9103 3550</p>
        </div>
        <div className="h-6 lg:h-0" />
        <div className="lg:pl-44">
          <p className="uppercase font-semibold text-sm font-museo pb-1">
            Endereço
          </p>
          <p className="font-museo text-sm">
            Rodovia Dr. Antônio Luiz Moura Gonzaga, 3339
            <br /> - Sala 105 - Rio Tavares
            <br /> Florianópolis - SC
          </p>
        </div>
      </div>
      <div className="h-16" />
      <div className="flex w-full justify-between items-center pb-4">
        <p className="font-museo text-sm">
          amago © 2021 - Todos os direitos reservado
        </p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <div className="hover:cursor-pointer">
              <Image src={FacebookImg.src} width={35} height={35} />
            </div>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <div className="hover:cursor-pointer">
              <Image src={InstagramImg.src} width={35} height={35} />
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
