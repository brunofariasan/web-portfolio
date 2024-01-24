import React, { useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import * as S from "./styles";
import "@/styles/styles.scss";
import Lenis from "@studio-freight/lenis";
import Card from "./Card";
import { projects } from "./mockData";

export const Slide: React.FC = ({}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <S.Container>
      <S.ProgressIndicator
        style={{
          scaleY: scrollYProgress,
        }}
      />
      <S.Section>
        <S.Main ref={container}>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <>
                <Card
                  key={`p_${i}`}
                  i={i}
                  {...project}
                  progress={scrollYProgress}
                  range={[i * 0.25, 1]}
                  targetScale={targetScale}
                />
              </>
            );
          })}
        </S.Main>
      </S.Section>
    </S.Container>
  );
};
