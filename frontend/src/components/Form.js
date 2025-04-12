import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  gap: 10px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid #bbb;
  font-size: 16px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: #fff;
  height: 42px;
`;

const Form = ({ onEdit }) => {
  const ref = useRef();

  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="name" type="text" placeholder="Digite seu nome" required />
      </InputArea>

      <InputArea>
        <Label>Email</Label>
        <Input name="email" type="email" placeholder="Digite seu email" required />
      </InputArea>

      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" type="tel" placeholder="Digite seu telefone" required />
      </InputArea>

      <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name="data_nascimento" type="date" required />
      </InputArea>

      <Button type="submit">Salvar</Button>
    </FormContainer>
  );
};

export default Form;
