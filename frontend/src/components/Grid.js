import React from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import { FaTrash, FaEdit } from "react-icons/fa";

const Table = styled.table`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  max-width: 800px;
  word-break: break-word;
  margin-top: 20px auto;
  width: 100%;
`;

export const Tbody = styled.tbody``;
export const Thead = styled.thead``;
export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none;"}
  }
`;

export const Td = styled.td`
  padding: 10px 0;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none;"}
  }
`;

const Grid = ({ users, getUsers }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/users/${id}`);
      toast.success("Usuário deletado com sucesso!");
      getUsers(); // Atualiza a lista
    } catch (error) {
      toast.error("Erro ao deletar usuário.");
    }
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item, i) => (
          <Tr key={i}>
            <Td width="30%">{item.nome}</Td>
            <Td width="30%">{item.email}</Td>
            <Td width="20%" onlyWeb>{item.fone}</Td>
            <Td alignCenter width="5%">
              <FaEdit style={{ cursor: "pointer" }} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id)} style={{ cursor: "pointer" }} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
