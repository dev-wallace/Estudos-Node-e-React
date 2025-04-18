import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

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

const Form = ({ onEdit, setOnEdit, getUsers }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;
      user.name.value = onEdit.nome; // alterado de 'name' para 'nome'
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_nascimento.value = onEdit.data_nascimento;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current;

    if (
      !user.name.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    try {
      if (onEdit) {
        const response = await axios.put(`http://localhost:8800/${onEdit.id}`, {
          nome: user.name.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        });
        toast.success(response.data);
      } else {
        const response = await axios.post("http://localhost:8800/", {
          nome: user.name.value,
          email: user.email.value,
          fone: user.fone.value,
          data_nascimento: user.data_nascimento.value,
        });
        toast.success(response.data);
      }

      // Limpar os campos
      user.name.value = "";
      user.email.value = "";
      user.fone.value = "";
      user.data_nascimento.value = "";

      setOnEdit(null);
      getUsers();
    } catch (error) {
      // Verificando a resposta do erro e mostrando a mensagem real
      const errorMessage =
        error.response?.data || error.message || "Erro desconhecido.";
      toast.error(errorMessage);
    }
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
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
