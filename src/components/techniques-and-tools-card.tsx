export type TechniquesAndToolsCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const TechniquesAndToolsCard = ({
  icon,
  title,
  description,
}: TechniquesAndToolsCardProps) => {
  return (
    <div className="lg:text-left flex flex-col items-center lg:items-start">
      <div className="w-[88px] h-[88px] flex justify-center items-center rounded-full bg-[#7A5A5D15]">
        {icon}
      </div>
      <div className="h-4" />
      <p className="text-secondary-500 font-semibold text-2xl leading-7 font-museo">
        {title}
      </p>
      <div className="h-4" />
      <p className="text-base leading-6 font-museo">{description}</p>
    </div>
  );
};

export default TechniquesAndToolsCard;
