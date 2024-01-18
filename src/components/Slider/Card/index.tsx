"use client";
import styles from "./style.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import React from "react";

import * as S from "./styles";

import Text from "@/components/micro/Text";
import Icon from "@/components/micro/Icon";
import Image from "@/components/micro/Image";

const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
  icon,
}: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <S.Container ref={container} className={styles.cardContainer}>
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <S.H2>{title}</S.H2>
        <S.H4>{description}</S.H4>
        <S.Body>
          <S.Div2>
            <Text variant="text-footer">Tecnologias</Text>
            <S.Div>
              {icon.map((proj: any, i: any) => (
                <Icon iconName={proj} size="xxhuge" color="black" key={i} />
              ))}
            </S.Div>
          </S.Div2>
          <S.ImageContainer>
            <motion.div
              style={{
                scale: imageScale,
                display: "flex",
                alignItems: "center",
                paddingTop: "46px",
              }}
            >
              <S.Inner>
                <Image src={`/images/${src}`} alt="image" width={"70%"} />
              </S.Inner>
            </motion.div>
          </S.ImageContainer>
        </S.Body>
      </motion.div>
    </S.Container>
  );
};

export default Card;
