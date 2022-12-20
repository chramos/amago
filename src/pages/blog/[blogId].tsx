import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import blog from "src/assets/images/blog.png";
import Container from "src/components/container";

export type ArticleProps = {};

const Article = ({}: ArticleProps) => {
  const { query } = useRouter();
  const { blogId } = query;

  return (
    <React.Fragment>
      <section className="relative">
        <Image
          src={blog.src}
          height={30}
          width={"100%"}
          objectFit="cover"
          layout="responsive"
        />
        <Container className="min-h-max">
          <div className="space-y-10 pt-5 mt-10 text-center lg:text-left relative">
            <div className="absolute bg-primary-500 top-4 px-4 py-1 ml-7">
              <p className="uppercase text-xs font-inter text-white font-bold leading-6">
                domoterapia
              </p>
            </div>
            <div className="px-6 py-4 text-left">
              <p className="text-[10px] font-inter text-[#18181850] uppercase">
                patricia pacheco / há 3 dias / 4 min para ler
              </p>
              <div className="h-4" />
              <p className="font-museo leading-6 text-xl text-[#5A3640]">
                {blogId}
              </p>
              <div className="h-4" />
              <p className="text-sm font-museo leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                pharetra tristique quam, vitae imperdiet massa interdum a.
                Aliquam erat volutpat. Proin ultrices varius dolor vel
                hendrerit. Morbi quis dui dictum, placerat ex a, semper metus.
                Morbi non purus vitae elit commodo mattis convallis id dui.
                Morbi elementum justo est, et faucibus nisl posuere dapibus.
                Aenean euismod nisi sem, a efficitur risus imperdiet a.
                Curabitur dictum gravida ligula, sed mollis sapien condimentum
                vitae. Fusce tempus cursus augue, vel bibendum purus dictum ac.
                Praesent quis euismod dui. Phasellus aliquet purus nec feugiat
                auctor. Fusce eget tempus lorem. Pellentesque urna odio,
                pharetra eu lorem eu, ullamcorper finibus lorem. Fusce non justo
                congue, efficitur sapien nec, tristique quam. Pellentesque ac
                lacinia mauris. Nulla a neque quam. Nullam sed magna nunc. Sed
                eget nunc ac dui suscipit tempus in placerat nibh. Sed nec
                sapien euismod, sagittis neque et, hendrerit magna. Nullam nibh
                sem, pharetra iaculis laoreet nec, blandit sit amet augue.
                Pellentesque leo ipsum, aliquam non suscipit ac, vulputate sit
                amet felis. Praesent semper sit amet leo et tincidunt. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis
                nunc, placerat sed tincidunt sed, condimentum quis lorem.
                Pellentesque nec ipsum vitae enim porttitor euismod eu quis
                ipsum. Integer pharetra eget mauris et tincidunt. Proin
                facilisis quam lectus, nec rhoncus tortor elementum eu. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Sed sodales purus eu odio ornare
                venenatis. Sed feugiat vehicula accumsan. Morbi vel posuere dui,
                sit amet venenatis neque. Nulla et egestas dui. Aliquam sit amet
                nisl quis odio ultrices bibendum. Nunc quis quam mattis,
                hendrerit velit vel, egestas dolor. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
                In vitae posuere orci. Quisque facilisis purus sapien, ut
                vehicula erat maximus id. Morbi nisl mauris, ornare ac felis
                quis, dictum euismod ligula. Aliquam vitae dui at sem tempor
                maximus eu sit amet leo. Nullam tempus fringilla tempus. Integer
                sollicitudin nisi ut diam tempor, ut tempus nibh faucibus. Sed a
                malesuada elit. Praesent auctor eros non mi dictum, id bibendum
                magna condimentum. Etiam iaculis faucibus finibus. Vivamus vitae
                egestas arcu. Mauris sit amet imperdiet nulla. Donec venenatis
                diam nisi, sed fringilla ligula dapibus sit amet. Ut mauris
                elit, laoreet ut aliquet in, rutrum at lectus. Nam condimentum
                ac neque in consequat. Cras eget odio sed orci aliquet semper
                quis a elit. Morbi ultricies, nisl eu efficitur maximus, diam
                sem fermentum quam, eget euismod felis est non est. Donec id
                ligula et mauris auctor condimentum. Nullam tempus vestibulum
                purus, ac posuere quam finibus ut. Etiam faucibus sapien non
                libero elementum sollicitudin. Aliquam porta non turpis ut
                faucibus. Nullam ullamcorper, leo id convallis rutrum, felis
                justo tincidunt velit, ut blandit nulla augue et neque. Aliquam
                erat volutpat.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Article;
