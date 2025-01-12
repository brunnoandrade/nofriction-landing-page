import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "./hero-video-dialog";
import FlickeringGrid from "./magic-ui/flickering-grid";
import BackgroundHeroVideoLight from "@/assets/bg-hero-video-light.png";
import BackgroundHeroVideoDark from "@/assets/bg-hero-video-dark.png";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "eficazes",
      "assertivas",
      "transformadoras",
      "relevantes",
      "valiosas",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <>
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#114D95"
        maxOpacity={0.1}
        flickerChance={0.1}
        height={800}
      />
      <div className="w-full relative px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 py-12 lg:py-28 items-center">
            <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left max-w-lg">
              <div>
                <Button variant="secondary" size="sm" className="gap-4">
                  Conheça nossa plataforma em ação
                  <MoveRight className="w-4 h-4" />
                </Button>
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl tracking-tighter font-regular">
                  <span className="text-spektr-cyan-50">
                    Uma solução de IA que converte opiniões em orientações
                  </span>
                  <span className="relative flex w-full justify-center lg:justify-start overflow-hidden text-center md:pb-4 md:pt-1">
                    &nbsp;
                    {titles.map((title, index) => (
                      <motion.span
                        key={index}
                        className="absolute font-semibold"
                        initial={{ opacity: 0, y: "-100" }}
                        transition={{ type: "spring", stiffness: 50 }}
                        animate={
                          titleNumber === index
                            ? {
                                y: 0,
                                opacity: 1,
                              }
                            : {
                                y: titleNumber > index ? -150 : 150,
                                opacity: 0,
                              }
                        }
                      >
                        {title}
                      </motion.span>
                    ))}
                  </span>
                </h1>
                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground">
                  Transforme comentários e reviews de clientes em soluções que
                  melhoram diretamente seus negócios.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row">
                <Button size="lg" className="gap-4" variant="outline">
                  Nossos planos <MoveRight className="w-4 h-4" />
                </Button>
                <Button size="lg" className="gap-4">
                  Agende uma demo <PhoneCall className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative lg:w-[650px] ml-auto">
              <HeroVideoDialog
                className="dark:hidden block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/uSBiuW1Wp4I"
                thumbnailSrc={BackgroundHeroVideoLight}
                thumbnailAlt="Hero Video - No Friction AI"
              />
              <HeroVideoDialog
                className="hidden dark:block"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/uSBiuW1Wp4I"
                thumbnailSrc={BackgroundHeroVideoDark}
                thumbnailAlt="Hero Video - No Friction AI"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Hero };
