import CheckIcon from "../assets/svg/check.svg";

export type TableProps = {};

const Table = ({}: TableProps) => {
  return (
    <table className="min-w-full">
      <thead>
        <tr className="text-center">
          <th
            scope="col"
            className="relative py-3.5 pl-3 pr-4 sm:pr-6 bg-white"
          ></th>
          <th
            scope="col"
            className="py-6 px-4 font-museo font-semibold leading-8 text-xl bg-[#DCD4C820] border-r-2 border-b-2 border-white flex-grow"
          >
            Domoterapia
          </th>
          <th
            scope="col"
            className="py-6 px-4 font-museo font-semibold leading-8 text-xl bg-[#DCD4C820] border-r-2 border-b-2 border-white flex-grow"
          >
            Domoterapia + Proj. de Ambientação
          </th>
          <th
            scope="col"
            className="py-6 px-4 font-museo font-semibold leading-8 text-xl bg-[#DCD4C820] border-r-2 border-b-2 border-white flex-grow"
          >
            Domoterapia + Proj. de Interiores
          </th>
          <th
            scope="col"
            className="py-6 px-4 font-museo font-semibold leading-8 text-xl bg-[#DCD4C820] border-r-2 border-b-2 border-white flex-grow"
          >
            Domoterapia + Transformação
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {options.map((data, index) => (
          <tr
            key={index}
            className={`${
              index % 2 !== 0 ? "bg-[#DCD4C820]" : "bg-[#DCD4C850]"
            } last:bg-white text-center`}
          >
            <td className="font-museo text-lg leading-7 text-gray-900 sm:pl-6 text-left">
              {data.title}
            </td>
            <td className="text-center text-sm font-museo leading-5 px-4">
              <div className="flex items-center justify-center py-2">
                {data.Domoterapia}
              </div>
            </td>
            <td className="text-center text-sm font-museo leading-5 px-4">
              <div className="flex items-center justify-center py-2">
                {data.ambientação}
              </div>
            </td>
            <td className="text-center text-sm font-museo leading-5 px-4">
              <div className="flex items-center justify-center py-2">
                {data.interiores}
              </div>
            </td>
            <td className="text-center text-sm font-museo leading-5 px-4">
              <div className="flex items-center  justify-center py-2">
                {data.transformação}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

const options = [
  {
    title: "Estudo dos moradores",
    Domoterapia: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    ambientação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    interiores: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    transformação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
  },
  {
    title: "Análise vibracional da residência",
    Domoterapia: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    ambientação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    interiores: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    transformação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
  },
  {
    title: "Feng-shui",
    Domoterapia: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    ambientação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    interiores: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    transformação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
  },
  {
    title: "Projeto de ambientação",
    Domoterapia: "",
    ambientação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    interiores: "",
    transformação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
  },
  {
    title: "Especificação de móveis soltos",
    Domoterapia: "",
    ambientação: (
      <div className="invisible flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    interiores: "",
    transformação: "",
  },
  {
    title: "Especifcações de fornecedores",
    Domoterapia: "",
    ambientação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    interiores: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    transformação: "",
  },
  {
    title: "Projeto de interiores",
    Domoterapia: "",
    ambientação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    interiores: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    transformação: "",
  },
  {
    title: "Projeto de marcenaria",
    Domoterapia: "",
    ambientação: "",
    interiores: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    transformação: "",
  },
  {
    title: "Gerenciamento de projeto",
    Domoterapia: "",
    ambientação: "",
    interiores: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
    transformação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
  },
  {
    title: "Execução da ambientação",
    Domoterapia: "",
    ambientação: "",
    interiores: "",
    transformação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
  },
  {
    title: "Gerenciamento de equipe de mão-de-obra",
    Domoterapia: "",
    ambientação: "",
    interiores: "",
    transformação: (
      <div className="flex items-center justify-center bg-white rounded-full w-12 h-12">
        <CheckIcon />
      </div>
    ),
  },
  {
    title: "",
    Domoterapia: "Até 3 moradores",
    ambientação: "Até 150m2",
    interiores: "Até 150m2",
    transformação: "Somente serviço, materiais e mão-de-obra a parte",
  },
];
