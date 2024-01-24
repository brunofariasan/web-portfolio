import React, { FC } from "react";
import { propTypes, defaultProps } from "./styles";

interface ImageProps {
  src: string;
  alt: string;
  height?: string | number;
  width?: string | number;
  opacity?: string | number;
}

const Image: FC<ImageProps> = ({
  src,
  alt,
  height = "auto",
  width = "auto",
  opacity,
}) => {
  return <img src={src} alt={alt} style={{ height, width, opacity }} />;
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
