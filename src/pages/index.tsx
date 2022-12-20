import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import blog from "src/assets/images/blog.png";
import hero from "src/assets/images/hero.png";
import kitchen from "src/assets/images/kitchen.png";
import Button from "src/components/button";
import ContactForm from "src/components/contact-form";
import Container from "src/components/container";
import Input from "src/components/input";
import TextArea from "src/components/input-text-area";
import WhyAmagoCards from "src/components/why-amago-cards";
import CleanLogoImg from "../assets/images/clean-logo.png";
export const aspectRatio = hero.height / hero.width;
export const heroImageWidth = 740;

console.log(aspectRatio, hero.width, hero.height);

type IndexProps = {};
const Index = ({}: IndexProps) => {
  const router = useRouter();
  return (
    <React.Fragment>
      <section>
        <Container className="grid grid-cols-1 lg:grid-cols-2 min-h-max items-center">
          <div className="space-y-6 lg:max-w-xl pt-9 lg:pt-0 text-center lg:text-left">
            <span className="uppercase text-primary-500 font-semibold text-base leading-6 font-museo">
              Nós somos a âmago
            </span>
            <h3 className="text-3xl font-semibold text-secondary-500 leading-10 font-museo">
              Arquitetura que reconhece todas
              <br />
              as suas sensibilidades
            </h3>
            <p className="font-museo text-sm leading-6">
              Somos uma empresa de <b>arquitetura e domoterapia</b> que oferece
              uma transformação rápida e que faz uso de técnicas capazes de
              equilibrar e corrigir problemas e desconfortos energéticos.
              Refletindo diretamente a melhora na saúde do morador e no seu bem
              estar
            </p>
            <Button onClick={() => router.push("/contato")}>
              Solicite um orçamento
            </Button>
          </div>
          <div className="hidden lg:block">
            <Image
              src={hero.src}
              width={heroImageWidth}
              height={heroImageWidth * aspectRatio}
              alt=""
            />
          </div>
        </Container>
        <style jsx>
          {`
            section {
              min-height: auto;
              background-image: none;
              display: flex;
              align-items: center;
            }
            @media (min-width: 1024px) {
              section {
                min-height: 776px;
              }
            }
          `}
        </style>
      </section>

      <section>
        <Container className="min-h-max">
          <div className="space-y-6 pt-36 lg:pt-0 text-center lg:text-left">
            <span className="text-primary-500 font-bold text-3xl font-inter">
              Porquê a Âmago?
            </span>
            <div className="h-3" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-20">
              <WhyAmagoCards
                cardNumber={1}
                title="Porque equilibramos"
                content="As energias sutis da casa ou da empresa."
              />
              <WhyAmagoCards
                cardNumber={2}
                title="Porque você"
                content="Vai entrar em conexão com seu lar, e se beneficiar
das curas ativadas."
              />
              <WhyAmagoCards
                cardNumber={3}
                title="Porque vai elevar"
                content="a vibração do seu espaço e consequentemente
                dos moradores."
              />
              <WhyAmagoCards
                cardNumber={4}
                title="Porque conhecemos"
                content="fornecedores, materiais, e técnicas que são
                adequadas a sua necessidade."
              />
              <WhyAmagoCards
                cardNumber={5}
                title="Porque projetamos"
                content="com base em técnicas de feng-shui e
                domoterapia."
              />
              <WhyAmagoCards
                cardNumber={6}
                title="Porque entregamos pronto"
                content="a vibração do seu espaço e consequentemente
                dos moradores."
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-[#DCD3C8] to-white">
        <Container className="min-h-max">
          <div className="space-y-6 pt-9 lg:pt-28 text-center lg:text-left">
            <span className="text-4xl font-museo text-secondary-500">
              O encontro da arquitetura com a consciência das{" "}
              <span className="text-primary-500 font-semibold">energias</span>
            </span>
            <div className="h-12" />
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="pb-16 lg:pb-0">
                <p className="text-secondary-900 font-semibold text-5xl font-museo">
                  12
                </p>
                <span className="text-secondary-900 text-base font-museo">
                  anos de trabalho com arquitetura e design de interiores
                </span>
                <div className="h-6" />
                <p className="text-secondary-900 font-semibold text-5xl font-museo">
                  4
                </p>
                <span className="text-secondary-900 text-base font-museo">
                  anos de formação como Domoterapeuta
                </span>
                <div className="h-6" />
                <p className="text-secondary-900 font-semibold text-5xl font-museo">
                  33
                </p>
                <span className="text-secondary-900 text-base font-museo">
                  anos de formação como Domoterapeuta
                </span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="max-w-[488px]">
                  <span className="text-xl font-museo leading-8 text-secondary-800 ">
                    Somos uma empresa de arquitetura e domoterapia que oferece
                    uma transformação rápida e que faz uso de técnicas capazes
                    de equilibrar e corrigir problemas e desconfortos
                    energéticos. Refletindo diretamente a melhora na saúde do
                    morador e no{" "}
                    <span className="font-bold">seu bem-estar</span>.
                  </span>
                </div>
                <div className="h-6" />
                <Button onClick={() => router.push("/sobre")}>
                  SAIBA MAIS SOBRE A ÂMAGO
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="min-h-max">
          <div className="space-y-6 pt-[200px] text-center lg:text-left">
            <p className="text-primary-500 font-semibold text-sm font-museo uppercase">
              Depoimentos
            </p>
            <p className="text-secondary-500 font-semibold text-3xl font-museo">
              O que nossos clientes dizem
            </p>
            <div className="h-9" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
              <div className="flex flex-col items-center lg:items-start">
                <p className="font-museo text-base leading-6 max-w-[326px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  pellentesque mauris magna, eget ultricies velit consequat sed.
                  Cras tempus ante arcu, sit amet sollicitudin felis consectetur
                  quis.
                </p>
                <div className="h-4" />
                <div className="w-10 h-10 rounded-full bg-[#e5e5e5]" />
                <p className="font-museo font-semibold text-sm leading-6">
                  Ana Maria
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <p className="font-museo text-base leading-6 max-w-[326px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  pellentesque mauris magna, eget ultricies velit consequat sed.
                  Cras tempus ante arcu, sit amet sollicitudin felis consectetur
                  quis.
                </p>
                <div className="h-4" />
                <div className="w-10 h-10 rounded-full bg-[#e5e5e5]" />
                <p className="font-museo font-semibold text-sm leading-6">
                  Ana Maria
                </p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <p className="font-museo text-base leading-6 max-w-[326px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  pellentesque mauris magna, eget ultricies velit consequat sed.
                  Cras tempus ante arcu, sit amet sollicitudin felis consectetur
                  quis.
                </p>
                <div className="h-4" />
                <div className="w-10 h-10 rounded-full bg-[#e5e5e5]" />
                <p className="font-museo font-semibold text-sm leading-6">
                  Ana Maria
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#E5E5E5] mt-[200px] relative">
        <Container className="min-h-max relative z-10">
          <div className="space-y-6 text-center lg:text-left flex lg:items-center ">
            <div className="hidden lg:block relative z-10">
              <Image
                src={kitchen.src}
                width={heroImageWidth}
                height={heroImageWidth * aspectRatio}
                alt=""
              />
            </div>

            <div className="lg:w-[40%] lg:pl-11 pb-10">
              <span className="uppercase text-primary-500 font-semibold font-museo text-sm">
                CONTATO
              </span>
              <div className="h-6" />
              <h3 className=" text-3xl font-semibold text-secondary-500 font-museo">
                Transformações acontecem quando tudo se harmoniza
              </h3>
              <div className="h-4" />
              <p className="font-museo text-base leading-6">
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
          className=" flex-col absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('${CleanLogoImg.src}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      </section>

      <section className="pt-[150px] bg-[#F5F5F5]">
        <Container className="min-h-max">
          <div className="space-y-6 text-center">
            <p className="text-primary-500 font-semibold text-sm font-museo uppercase">
              blog
            </p>
            <p className="text-secondary-500 font-semibold text-3xl font-museo">
              Confira nossas publicações
            </p>
            <div className="h-9" />
            <div className="flex justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 pb-20 gap-16">
                <div className="max-w-[350px] bg-white cursor-pointer hover:scale-105 shadow-2xl">
                  <div>
                    <Image src={blog.src} width={416} height={240} alt="" />
                  </div>
                  <div className="p-6 text-left">
                    <p className="font-museo font-semibold text-lg text-secondary-500">
                      Erros aplicados no Home Office
                    </p>
                    <div className="h-4" />
                    <p className="text-base font-museo leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc pellentesque mauris magna, eget ultricies velit
                      consequat sed. Cras tempus ante arcu, sit amet
                      sollicitudin felis consectetur quis.
                    </p>
                    <div className="h-4" />
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#e5e5e5]" />
                      <div className="w-2" />
                      <div>
                        <p className="font-museo text-xs">Por</p>
                        <p className="font-semibold font-museo text-xs">
                          Patrícia Pacheco
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[350px] bg-white cursor-pointer hover:scale-105 shadow-2xl">
                  <div>
                    <Image src={blog.src} width={416} height={240} alt="" />
                  </div>
                  <div className="p-6 text-left">
                    <p className="font-museo font-semibold text-lg text-secondary-500">
                      Erros aplicados no Home Office
                    </p>
                    <div className="h-4" />
                    <p className="text-base font-museo leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc pellentesque mauris magna, eget ultricies velit
                      consequat sed. Cras tempus ante arcu, sit amet
                      sollicitudin felis consectetur quis.
                    </p>
                    <div className="h-4" />
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#e5e5e5]" />
                      <div className="w-2" />
                      <div>
                        <p className="font-museo text-xs">Por</p>
                        <p className="font-semibold font-museo text-xs">
                          Patrícia Pacheco
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-[350px] bg-white cursor-pointer hover:scale-105 shadow-2xl">
                  <div>
                    <Image src={blog.src} width={416} height={240} alt="" />
                  </div>
                  <div className="p-6 text-left">
                    <p className="font-museo font-semibold text-lg text-secondary-500">
                      Erros aplicados no Home Office
                    </p>
                    <div className="h-4" />
                    <p className="text-base font-museo leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc pellentesque mauris magna, eget ultricies velit
                      consequat sed. Cras tempus ante arcu, sit amet
                      sollicitudin felis consectetur quis.
                    </p>
                    <div className="h-4" />
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#e5e5e5]" />
                      <div className="w-2" />
                      <div>
                        <p className="font-museo text-xs">Por</p>
                        <p className="font-semibold font-museo text-xs">
                          Patrícia Pacheco
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="lg:-mt-[150px] pt-[200px] bg-[#DCD4C8]">
        <Container className="min-h-max">
          <div className="space-y-6 text-center items-center relative flex flex-col justify-center">
            <p className="text-secondary-500 text-2xl font-museo">
              Tenha a experiência de viver em uma casa
            </p>
            <p className="text-transparent text-6xl lg:text-[96px] font-museo bg-clip-text bg-gradient-to-b from-[#5A3640] to-[#DCD4C8] absolute left-0 right-0 top-10 md:top-5">
              Harmonizada
            </p>
            <div className="pt-32 items-center pb-40 grid grid-cols-1 lg:w-[700px]">
              <p className="font-bold text-base leading-6 text-secondary-500 font-inter">
                Entre em contato conosco!
              </p>
              <div className="h-4" />
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Index;
