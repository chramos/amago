import Link from "next/link";
import React from "react";
import blog from "src/assets/images/blog.png";
import ArticlesCard from "src/components/articles-card";
import Container from "src/components/container";

const articles = [
  {
    id: "os-5-elementos",
    title: "Os 5 elementos",
    description:
      "A base filosófica da medicina tradicional chinesa (MTC) prevê que os fenômenos do universo são itens do movimento e da...",
    publishedTime: "patricia pacheco / há 3 dias / 4 min para ler",
    image: blog,
    tag: "DOMOTERAPIA",
  },
  {
    id: "como-definir-qual-a-melhor-planta-para-o-ambiente",
    title: "Como definir qual a melhor planta para o ambiente?",
    description:
      "A base filosófica da medicina tradicional chinesa (MTC) prevê que os fenômenos do universo são itens do movimento e da...",
    publishedTime: "patricia pacheco / há 3 dias / 4 min para ler",
    image: blog,
    tag: "DOMOTERAPIA",
  },
  {
    id: "fitoenergetica-biofilia-conheça-a-energia-das-plantas",
    title: "Fitoenergética, Biofilia, conheça a energia das plantas",
    description:
      "A base filosófica da medicina tradicional chinesa (MTC) prevê que os fenômenos do universo são itens do movimento e da...",
    publishedTime: "patricia pacheco / há 3 dias / 4 min para ler",
    image: blog,
    tag: "DOMOTERAPIA",
  },
  {
    id: "setas-invisiveis",
    title: "O que são setas invisíveis?",
    description:
      "Afinal, o que são as tais setas invisíveis? Nesse artigo trazemos esse conceito na visão do Feng Shui.",
    publishedTime: "patricia pacheco / há 3 dias / 4 min para ler",
    image: blog,
    tag: "DOMOTERAPIA",
  },
];

const BlogScreen = () => {
  return (
    <React.Fragment>
      <section className="relative">
        <div className=" absolute w-full h-full mt-[313px] -z-10 bg-gradient-to-b from-[#DCD4C8] to-white" />
        <Container className="min-h-max">
          <div className="space-y-10 pt-10 text-center lg:text-left">
            <span className="text-[#030D35] text-2xl font-museo">
              Artigos Mais Recentes
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-3 pb-20 gap-4 justify-items-center">
              {articles.map((article) => (
                <Link href={`/blog/${article.id}`} key={article.id}>
                  <a>
                    <ArticlesCard
                      tag={article.tag}
                      image={article.image}
                      publishedTime={article.publishedTime}
                      title={article.title}
                      description={article.description}
                    />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default BlogScreen;
