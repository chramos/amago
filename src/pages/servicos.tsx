import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Button from "src/components/button";
import Card from "src/components/card";
import Container from "src/components/container";
import ServicesCard from "src/components/services-card";
import Table from "src/components/table";

import CleanLogoImg from "../assets/images/clean-logo.png";
import DomoterapiaImg from "../assets/images/domoterapia.png";
import KitchenImg from "../assets/images/kitchen.png";
import BedroomImg2 from "../assets/images/service-bedroom2.png";

const ServicesScreen = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <section>
        <Container className="min-h-max">
          <div className="space-y-6 pt-20 text-center">
            <p className="text-primary-500 font-semibold leading-5 text-sm uppercase font-museo">
              Nossos Serviços
            </p>
            <p className="font-museo font-semibold leading-10 text-4xl text-secondary-500">
              Arquitetura + Domoterapia
            </p>
            <div className="h-14" />
            <ServicesCard
              cardNumber="1"
              title="Domoterapia"
              description="Através do levantamento energético da casa conseguimos identificar as energias sutis prejudiciais existentes em cada ambiente. Aplicamos técnicas de geobiologia, radiestesia e apometria vibracional, capazes de equilibrar as energias densas presentes no ambiente tornado um espaço harmonizado e equilibrado, trazendo conforto e qualidade de vida ao morador."
              image={DomoterapiaImg}
            />
            <ServicesCard
              cardNumber="2"
              title="Projeto de ambientação"
              description="Aplicamos ténicas de radiestesia, geobiologia, apometria vibracional para harmonizar as energias presentes no ambiente. Desenvolvemos o estudo completo de ambientação baseado no Feng Shui, para manter o equilíbrio e harmonia na casa e nos moradores. Desenvolvemos sugestões de decoração, com formatos e cores que favorecem o equilíbrio e entregamos uma planilha com informações de fornecedores e materiais especificados."
              image={BedroomImg2}
              textPosition="right"
            />
            <ServicesCard
              cardNumber="3"
              title="Projeto de Interiores"
              description="Desenvolvemos o estudo completo de harmonização energética da casa, através da geobiologia, radiestesia e apometria vibracional. Aplicamos as técnicas para harmonizar as energias presentes no ambiente. Desenvolvemos um projeto completo de interiores, com especificação de materiais, gesso, iluminação, marcenaria, móveis soltos, revestimentos e pintura. Todo projeto desenvolvido em cima das técnicas de harmonização física e energética do espaço. Entregamos uma planilha com especificação de materiais e fornecedores especificados."
              image={KitchenImg}
            />
            <ServicesCard
              cardNumber="4"
              title="Transformação"
              description="Desenvolvemos o estudo completo de harmonização energética da casa. Aplicamos as técnicas para equilibrar as energias sutis densas encontradas. Executamos uma transformação rápida de um ou dois ambientes escolhidos pelo morador para realizar a ambientação. Aplicamos objetos de decoração que favorecem e mantém o equilíbrio da casa e do morador."
              image={BedroomImg2}
              textPosition="right"
            />
          </div>
        </Container>
      </section>

      <section>
        <Container className="min-h-max">
          <div className="space-y-6 pt-20 text-center">
            <p className="text-primary-500 font-semibold leading-5 text-sm uppercase font-museo">
              investimento
            </p>
            <p className="font-museo font-semibold leading-10 text-4xl text-secondary-500">
              Projetos & Transformações
            </p>
            <div className="h-2 lg:h-14" />
            <div className="text-left hidden lg:block">
              <Table />
            </div>
            <div className="flex flex-col lg:hidden space-y-8">
              <Card
                title="Domoterapia"
                description="Até 3 moradores"
                features={[
                  "Estudo dos moradores",
                  "Análise vibracional da residência",
                  "Feng-shui",
                ]}
              />
              <Card
                title="Domoterapia & Proj. de Ambientação"
                description="Até 150m2"
                features={[
                  "Estudo dos moradores",
                  "Análise vibracional da residência",
                  "Feng-shui",
                  "Projeto de ambientação",
                  "Especifcações de fornecedores",
                  "Projeto de interiores",
                ]}
              />
              <Card
                title="Domoterapia & Proj. de Interiores"
                description="Até 150m2"
                features={[
                  "Estudo dos moradores",
                  "Análise vibracional da residência",
                  "Feng-shui",
                  "Especifcações de fornecedores",
                  "Projeto de interiores",
                  "Projeto de marcenaria",
                  "Gerenciamento de projeto",
                ]}
              />
              <Card
                title="Domoterapia & Transformação"
                description="Somente serviço, materiais e mão-de-obra a parte"
                features={[
                  "Estudo dos moradores",
                  "Análise vibracional da residência",
                  "Feng-shui",
                  "Projeto de ambientação",
                  "Gerenciamento de projeto",
                  "Execução da ambientação",
                  "Gerenciamento de equipe de mão-de-obra",
                ]}
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F2F2F2] mt-24 relative">
        <Container className="min-h-max relative z-10">
          <div className="text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 ">
            <div className="hidden lg:block"></div>
            <div className="pl-11 py-28 lg:backdrop-blur">
              <span className="uppercase text-primary-500 font-semibold font-museo text-sm">
                CONTATO
              </span>
              <div className="h-6" />
              <h3 className=" text-3xl text-center lg:text-left font-semibold text-secondary-500 font-museo max-w-[568px]">
                Transformações acontecem quando tudo se harmoniza
              </h3>
              <div className="h-4" />
              <p className="font-museo text-base leading-6 max-w-[568px] text-center lg:text-left">
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
          className="flex flex-col absolute inset-0 justify-center items-center opacity-60 lg:opacity-100"
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

export default ServicesScreen;
