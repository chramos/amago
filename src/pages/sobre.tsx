import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import LogoFull from "src/assets/svg/logo-full.svg";
import Button from "src/components/button";
import Container from "src/components/container";
import TechniquesAndToolsCard from "src/components/techniques-and-tools-card";
import AboutAmagoImg1 from "../assets/images/about-amago1.png";
import AboutAmagoImg2 from "../assets/images/about-amago2.png";
import CleanLogoImg from "../assets/images/clean-logo.png";
import PatriciaImg from "../assets/images/patricia.png";
import ArchitectureIcon from "../assets/svg/architecture.svg";
import DowsingIcon from "../assets/svg/dowsing.svg";
import GeobiologyIcon from "../assets/svg/geobiology.svg";
import InternalDecorationIcon from "../assets/svg/internal-decoration.svg";
import ProjectManagementIcon from "../assets/svg/project-management.svg";
import YingYangIcon from "../assets/svg/yin-yang.svg";

const AboutScreen = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <section className="bg-gradient-to-b from-[#DCD4C8] to-white">
        <Container className="min-h-max">
          <div className="space-y-6 pt-20 pb-32 text-center flex flex-col items-center">
            <p className="font-museo text-base leading-6 font-semibold text-primary-500 uppercase">
              Nossa missão
            </p>
            <p className="font-semibold font-museo leading-8 text-2xl text-secondary-500 max-w-[800px]">
              Nossa missão é sermos instrumento de transformação. Transformar o
              espaço, e esse espaço transformar a vida da pessoa, fazendo fluir
              a energia da casa e do morador.
            </p>
            <div className="flex items-center lg:gap-14 pt-20">
              <div className="hidden lg:block">
                <Image src={PatriciaImg.src} width={480} height={480} />
              </div>
              <div className="text-left">
                <p className="font-museo font-semibold leading-5 text-sm text-primary-500 text-center lg:text-left uppercase">
                  Quem sou eu
                </p>
                <div className="h-8 lg:h-4" />
                <p className="font-museo font-semibold text-3xl text-secondary-500 left-9">
                  Patricia Pacheco
                </p>
                <div className="h-8 lg:h-4" />
                <p className="max-w-[480px] font-museo text-base leading-7 font-normal">
                  Sou esposa, mãe, arquiteta e domoterapeuta.
                  <br /> Acredito que temos muito para crescer, muito à
                  melhorar, muito à aprender.
                  <br /> Estamos em constantes transformações, sejam elas
                  internas ou externas.
                  <br /> A busca pelo contato com nosso ser, está cada vez mais
                  aflorado dentro de nós.
                  <br /> E eu farei parte desse processo entregando ambientes
                  saudáveis para facilitar essa vivência, esse encontro consigo
                  mesmo.
                  <br />
                  <br />
                  Um abraço, nos encontramos na jornada da vida.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#E5E5E5]">
        <Container className="min-h-max">
          <div className="text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
            <div className="my-20">
              <p className=" text-sm font-semibold font-museo leading-5 text-primary-500 uppercase">
                SOBRE a âmago
              </p>
              <div className="h-6" />
              <LogoFull
                className="hidden lg:block"
                width="159px"
                height="72px"
              />
              <div className="h-6" />
              <p className="font-museo text-base left-6">
                A Âmago é resultado da minha jornada de vida em busca da cura.
                Uma busca que me fez vivenciar vários modelos de terapias, me
                fazendo crescer e me apropriar do meu próprio ser.
                <br />
                <br />
                Precisei buscar o equilíbrio do meu corpo, da minha mente e da
                minha alma. Para então conseguir viver de maneira saudável,
                porque até então ela tinha sido vivenciada, sempre com muita
                dor.
                <br />
                <br />
                Com tanta batalha conquistada durante minha vida, eu precisava
                encontrar uma forma de dividir esse aprendizado, esse
                conhecimento e levar isso para o outro.
                <br />
                <br />
                Então uni minha formação acadêmica com aprofundamento
                terapêutico, criando ambientes energeticamente saudáveis que
                favorecem a pessoa ter esse encontro com ela mesma.
                <br />
                <br />
                Um formato de cura do lar. Um trabalho para o outro, de encontro
                com seu ser, sua essência, seus valores e suas raízes
                familiares. Onde as plantas, as cores, os elementos utilizados,
                os objetos escolhidos, toquem o morador diariamente, o fazendo
                estar em sintonia com esse novo lar.
                <br />
                <br />
                Um lar harmônico, equilibrado, saudável, reflete no morador,
                traz saúde, equilíbrio, e a vida passa ser vivenciada com um
                novo olhar, com um novo sentir.
                <br />
                <br />A sintonia do seu eu com seu novo espaço, um espaço
                sagrado, uma arquitetura íntima, de fortaleza, de
                reabastecimento e equilíbrio para quem vive ali.
              </p>
            </div>
            <div className="hidden lg:block">
              <Image src={AboutAmagoImg1.src} width={720} height={516} />
              <Image src={AboutAmagoImg2.src} width={720} height={516} />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="min-h-max">
          <div className="space-y-6 pt-20 text-center">
            <p className="font-museo text-sm leading-5 font-semibold text-primary-500 uppercase">
              TÉCNICAS E FERRAMENTAS
            </p>
            <p className="font-museo font-semibold text-4xl text-secondary-500 leading-10">
              Arquitetura + Domoterapia
            </p>
            <div className="h-16" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
              <TechniquesAndToolsCard
                icon={<YingYangIcon />}
                title="Feng-shui"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque mauris magna, eget ultricies velit consequat sed. Cras tempus ante arcu, sit amet sollicitudin felis consectetur quis."
              />
              <TechniquesAndToolsCard
                icon={<DowsingIcon />}
                title="Radiestesia"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque mauris magna, eget ultricies velit consequat sed. Cras tempus ante arcu, sit amet sollicitudin felis consectetur quis."
              />
              <TechniquesAndToolsCard
                icon={<GeobiologyIcon />}
                title="Geobiologia"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque mauris magna, eget ultricies velit consequat sed. Cras tempus ante arcu, sit amet sollicitudin felis consectetur quis."
              />
              <TechniquesAndToolsCard
                icon={<ArchitectureIcon />}
                title="Arquitetura"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque mauris magna, eget ultricies velit consequat sed. Cras tempus ante arcu, sit amet sollicitudin felis consectetur quis."
              />
              <TechniquesAndToolsCard
                icon={<InternalDecorationIcon />}
                title="Decoração de interiores"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque mauris magna, eget ultricies velit consequat sed. Cras tempus ante arcu, sit amet sollicitudin felis consectetur quis."
              />
              <TechniquesAndToolsCard
                icon={<ProjectManagementIcon />}
                title="Gerenciamento de projetos"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pellentesque mauris magna, eget ultricies velit consequat sed. Cras tempus ante arcu, sit amet sollicitudin felis consectetur quis."
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#DCD4C8] mt-[200px] relative">
        <Container className="min-h-max relative z-10">
          <div className="text-center lg:text-left grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block"></div>
            <div className="pl-11 py-28 lg:backdrop-blur">
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
              <Button onClick={() => router.push("/contato")}>
                Entre em contato
              </Button>
            </div>
          </div>
        </Container>
        <div
          className="flex flex-col absolute inset-0 justify-center items-center opacity-30 lg:opacity-100"
          style={{
            backgroundImage: `url('${CleanLogoImg.src}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </section>
    </React.Fragment>
  );
};

export default AboutScreen;
