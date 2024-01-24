"use client";
import React from "react";
import styles from "./style.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Text from "@/components/micro/Text";
import Icon from "@/components/micro/Icon";
import Image from "@/components/micro/Image";
import Flex from "@/components/micro/Flex";
import useWindowSize from "@/hooks/useWindowSize";
import { useTranslation } from "react-i18next";

import * as S from "./styles";
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
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const v = width <= 750;
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <S.Container ref={container} className={styles.cardContainer}>
      {icon.some((proj: any) => proj.includes("icon-0")) && (
        <Text variant="main-text-to-slide" color="black">
          {t("topProjects")}
        </Text>
      )}
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <Flex flexDirection="column" gap="2rem">
          <Text variant="card-title">{title}</Text>
          <Text variant="card-description-slide">{description}</Text>
        </Flex>
        <S.Section>
          <S.FlexSection>
            <Text variant="text-tech-slide">Tecnologias</Text>
            <S.Div>
              {icon.map((proj: any, i: any) => (
                <Icon
                  iconName={proj}
                  size={v ? "xxlarge" : "xxhuge"}
                  color="deepSlateBlue"
                  key={i}
                />
              ))}
            </S.Div>
          </S.FlexSection>
          <S.ImageContainer>
            <motion.div
              style={{
                scale: imageScale,
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <S.Inner>
                <Image src={`/images/${src}`} alt="image" width={"70%"} />
              </S.Inner>
            </motion.div>
          </S.ImageContainer>
        </S.Section>
      </motion.div>
    </S.Container>
  );
};

export default Card;
