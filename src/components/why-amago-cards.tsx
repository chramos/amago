export type WhyAmagoCardsProps = {
  cardNumber: number;
  title: string;
  content: string;
};

const WhyAmagoCards = ({ cardNumber, title, content }: WhyAmagoCardsProps) => {
  return (
    <div className="relative flex flex-col h-[200px] pt-24">
      <p className="text-transparent text-[184px] font-museo bg-clip-text bg-gradient-to-b from-[#dbcdcf90] to-white absolute bottom-0 -z-10 left-0 right-0 lg:left-0">
        {cardNumber}
      </p>
      <p className="font-semibold text-2xl text-primary-500 font-museo leading-6">
        {title}
      </p>
      <div className="h-2" />
      <p className="text-sm font-museo leading-6">{content}</p>
    </div>
  );
};

export default WhyAmagoCards;
