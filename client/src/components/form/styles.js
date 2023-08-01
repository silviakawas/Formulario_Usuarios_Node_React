import styled from "styled-components";

const StyledFormCont = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`;
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
`;

const StyledInput = styled.input`
    margin-bottom: 15px;
`;

export {StyledFormCont, StyledForm, StyledInput};