import { theme } from "@/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 54.6rem;
  background: rgba(0, 0, 0, 0.98);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.div`
  padding: 5.8rem 7rem 12rem 7rem;
  display: flex;
  justify-content: center;
  gap: 8rem;

  @media (max-width: 880px) {
    flex-direction: column;
    gap: 3rem;
  }

  @media (max-width: 700px) {
    padding: 5rem 3rem 12rem 4rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Inputs = styled.div`
  display: flex;
  gap: 7rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Label = styled.label`
  font-family: Montserrat;
  font-size: 0.9rem;
  margin-bottom: 0.8rem;
  color: ${theme.colors.white};
`;

export const Input = styled.input`
  font-family: Montserrat;
  font-size: 1.4rem;
  color: ${theme.colors.white};
  font-weight: 500;
  border: none;
  border-bottom: 0.1rem solid white;
  margin-bottom: 2rem;
  padding: 1rem;
  font-size: 1.6rem;
  background-color: rgba(0, 0, 0, 0);
  color: ${theme.colors.white};
  transition: border-bottom 0.3s ease-in-out;
  outline: none;
  
  &:focus {
    border-bottom: 0.2rem solid #292929;
  }

  &::placeholder {
    color: ${theme.colors.white}; 
  }

  &:focus::placeholder {
    color: rgba(255, 255, 255, 0.8); 
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  background-color: #1c75d5;
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
