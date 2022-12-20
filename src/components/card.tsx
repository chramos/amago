import React from "react";

type CardProps = {
  title: string;
  description: string;
  features: string[];
};
const Card = ({ title, description, features }: CardProps) => {
  return (
    <div className=" w-[22rem] p-6 py-12 shadow-lg border border-gray-100 flex flex-col self-center rounded-lg space-y-8">
      <div className="relative z-10 space-y-2">
        <h2 className="font-museo font-semibold text-3xl text-primary-500">
          {title}
        </h2>
        <p className="font-museo text-xs uppercase text-secondary-500 font-semibold">
          {description}
        </p>
      </div>
      <div className="space-y-2 flex flex-col justify-center items-center">
        {[
          "Estudo dos moradores",
          "Análise vibracional da residência",
          "Feng-shui",
          "Projeto de ambientação",
          "Especificação de móveis soltos",
          "Especifcações de fornecedores",
          "Projeto de interiores",
          "Projeto de marcenaria",
          "Gerenciamento de projeto",
          "Execução da ambientação",
          "Gerenciamento de equipe de mão-de-obra",
        ].map((feature) => {
          const isActive = features.some((feat) => feat === feature);

          return (
            <div className="flex items-center" key={feature}>
              {isActive ? (
                <h3 className="font-museo flex self-center text-center text-[13px] text-primary-500">
                  &#10003;&nbsp;
                </h3>
              ) : null}
              <h3
                className={`font-museo flex self-center text-center text-[13px]  ${
                  isActive ? "text-black" : "line-through text-gray-400"
                }`}
              >
                {feature}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
