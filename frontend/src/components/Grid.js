import React from "react";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";
import {FaTrash,FaEdit} from 'react-icons/fa';

const Table = styled.table`
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    max-width: 800px;
    word-break: break-all;
    margin-top: 20px auato;
    width: 100%;
    
    `
export const Thead = styled.thead``;
export const Tr = styled.tr``;
export const Th = styled.th`
    taxt-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
    
    @media (max-width: 500px){
        ${(props)=> props.onlyWeb && 'display: none;'} 
    }
`;


const Grid = () => {
    return(
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
        </Table>

    );
};
export default Grid;