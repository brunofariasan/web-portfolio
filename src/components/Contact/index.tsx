import Flex from "../micro/Flex";
import Text from "../micro/Text";
import { TEXT } from "./constants";
import * as S from "./styles";
export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mensagem enviada!");
  };
  return (
    <S.Container>
      <S.Section>
        <Flex flexDirection="column">
          <Text variant="contact-section-title-description">
            {TEXT.TEXT_PROJECTS}
          </Text>
          <Text variant="title-section-contact">Get in touch —</Text>
        </Flex>
        <Flex flexDirection="column" gap="2.5rem">
          <Text variant="description-contact">{TEXT.DESCRIPTION}</Text>
          <S.Form onSubmit={handleSubmit}>
            <S.Inputs>
              <Flex flexDirection="column" width="100%">
                <S.Label htmlFor="name">Nome</S.Label>
                <S.Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome"
                  required
                />
              </Flex>
              <Flex flexDirection="column" width="100%">
                <S.Label htmlFor="email">E-mail</S.Label>
                <S.Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  required
                />
              </Flex>
            </S.Inputs>
            <Flex flexDirection="column" width="100%">
              <S.Label htmlFor="message">Mensagem</S.Label>
              <S.Input
                as="textarea"
                id="message"
                name="message"
                placeholder="Digite sua mensagem aqui"
                rows={4}
                required
              ></S.Input>
            </Flex>
            <S.Button type="submit">{TEXT.TEXT_BUTTON}</S.Button>
          </S.Form>
        </Flex>
      </S.Section>
    </S.Container>
  );
}
