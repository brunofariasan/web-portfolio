import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { getCoordinatesFromAddress } from "@/service/googleMapsService";
import * as S from "./styles";
import Text from "../micro/Text";
import Flex from "../micro/Flex";
import { TEXT } from "./constants";

interface CenterType {
  lat: number;
  lng: number;
}

export function Map() {
  const [center, setCenter] = useState<CenterType | null>(null);

  useEffect(() => {
    const endereco = "belo-horizonte-mg";

    const fetchCoordinates = async () => {
      try {
        const coordinates = await getCoordinatesFromAddress(endereco);
        setCenter(coordinates);
      } catch (error) {
        console.error("Erro ao obter as coordenadas:", error);
      }
    };

    fetchCoordinates();
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBJiygldMaOem_uP7LAVjZtWz9RZ1xCvdg",
  });

  const containerStyle = {
    height: "100%",
    top: "0",
    left: "0",
    width: "134%",
  };

  const darkMapStyles = [
    {
      featureType: "all",
      elementType: "all",
      stylers: [
        {
          invert_lightness: "true",
        },
        {
          saturation: -100, // Define a saturação como -150 para remover cores indesejadas
        },
        {
          lightness: -40, // Ajuste o valor para controlar a opacidade. Quanto menor, mais escuro.
        },
        {
          gamma: 0.5,
        },
        {
          hue: "#435158",
        },
      ],
    },
    {
      featureType: "poi", // Aplica especificamente aos pontos de interesse
      stylers: [
        {
          visibility: "off", // Oculta todos os pontos de interesse
        },
      ],
    },
  ];

  const options = {
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    draggable: false,
    clickableIcons: false,
    styles: darkMapStyles,
    disableDefaultUI: true, // desativa todos os controles padrão
    visibility: "off",
  };

  return isLoaded && center ? (
    <S.Container>
      <S.Watermark>
        <Text variant="section-watermark-white" component="h1">
          {TEXT.TEXT_WATERMARK}
        </Text>
      </S.Watermark>
      <S.MapSection>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
          options={options}
        />
      </S.MapSection>
      <S.Section>
        <S.TextSection>
          <Flex justify="space-around">
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                L
              </Text>
            </S.I>
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                E
              </Text>
            </S.I>
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                {TEXT.TEXT_T}
              </Text>
            </S.I>
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                S
              </Text>
            </S.I>
          </Flex>

          <Flex justify="space-around">
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                W
              </Text>
            </S.I>
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                O
              </Text>
            </S.I>
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                R
              </Text>
            </S.I>
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                K
              </Text>
            </S.I>
          </Flex>
          <Flex justify="space-around">
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                T
              </Text>
            </S.I>
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                O
              </Text>
            </S.I>
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                G
              </Text>
            </S.I>
            <S.I>
              <Text variant="title-on-top-of-map" component="h1">
                E
              </Text>
            </S.I>
          </Flex>
        </S.TextSection>
      </S.Section>
    </S.Container>
  ) : (
    <div>Loading...</div>
  );
}
