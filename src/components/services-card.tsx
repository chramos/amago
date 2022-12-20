import Image from "next/image";

export type ServicesCardProps = {
  cardNumber: string;
  title: string;
  description: string;
  image: any;
  textPosition?: "left" | "right";
};

const ServicesCard = ({
  image,
  cardNumber,
  title,
  description,
  textPosition,
}: ServicesCardProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-20 text-center lg:text-left grid-flow-dense">
      <div
        className={`min-h-[450px] flex flex-col justify-center ${
          textPosition === "right" ? "  lg:col-start-2" : ""
        }`}
      >
        <div className="relative flex flex-col h-[50px]">
          <p className="text-transparent text-[184px] font-museo bg-clip-text bg-gradient-to-b from-[#dbcdcf90] to-white absolute -bottom-14 -z-10 left-0 right-0 lg:left-0">
            {cardNumber}
          </p>
          <p className="font-semibold text-2xl text-secondary-500 font-museo leading-9">
            {title}
          </p>
        </div>
        {/* <div className="h-4" /> */}
        <p className="text-base font-museo leading-6">{description}</p>
      </div>
      <div className="hidden lg:block">
        <Image src={image.src} width={720} height={516} />
      </div>
    </div>
  );
};

export default ServicesCard;
