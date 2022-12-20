import Image, { ImageProps } from "next/image";

export type ArticlesCardProps = {
  image: ImageProps;
  publishedTime: string;
  title: string;
  description: string;
  tag: string;
};

const ArticlesCard = ({
  image,
  publishedTime,
  title,
  description,
  tag,
}: ArticlesCardProps) => {
  return (
    <div className="max-w-[350px] bg-white cursor-pointer hover:scale-105 transition-all shadow-2xl">
      <div className="relative">
        <Image src={image.src} width={416} height={240} />
        <div className="absolute bg-primary-500 top-4 px-4 py-1">
          <p className="uppercase text-xs font-inter text-white font-bold leading-6">
            {tag}
          </p>
        </div>
      </div>
      <div className="p-4 h-[200px] text-left">
        <p className="text-[10px] font-inter text-[#18181850] uppercase">
          {publishedTime}
        </p>
        <div className="h-4" />
        <p className="font-museo leading-6 text-xl text-[#5A3640]">{title}</p>
        <div className="h-4" />
        <p className="text-sm font-museo leading-6 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ArticlesCard;
