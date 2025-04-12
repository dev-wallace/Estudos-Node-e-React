import React, {useRef} from "react";
import styled from "styled-components";
const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flax-warp: wrap;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;



    

`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;

`;
const Input = styled.input`
    padding: 0 10px;
    border-radius:5px;
    border:  1px solid #bbb;
    font-size: 16px;
    width: 100%;
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

`
const Form = ({onEdit}) => {
    const ref = userRef();
    return(
        <FormContainer ref = {ref}>
        <InputArea>
        <Label>Nome</Label>
        <Input name = "name" type = "text" placeholder = "Digite seu nome" required/>
        </InputArea>
        <InputArea> 
        <Label>Email</Label>
        <Input name = "email" type = "email" placeholder = "Digite seu email" required/>
        
        </InputArea>
        <InputArea>
        <Label>Telefone</Label>
        <Input name = "fone" type = "tel" placeholder = "Digite seu telefone" required/>
        </InputArea>

        <InputArea>
        <Label>Data de Nascimento</Label>
        <Input name = "data_nascimento" type = "date" placeholder = "Digite sua data de nascimento" required/>
        </InputArea>
        <Button type = "submit">Salvar</Button>
        </FormContainer>
    );
};

export default Form;