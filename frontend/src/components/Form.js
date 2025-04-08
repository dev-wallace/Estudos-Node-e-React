import React from "react";
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



    

`



const Form = () => {
    const ref = userRef();
    return(
        <FormContainer ref = {ref}>
        
        </FormContainer>
    );
};

export default Form;