import styled from "styled-components";

export const TodoList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DoneList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DoneText = styled.ul`
    text-align: left;
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 20px;
    color: grey;
    margin-left: 10px;
    margin-bottom: 4px;
    @media (max-width: 800px) {
        font-size : 16px;
    }
`;

export const DoneContainer = styled.ul`
    margin-top: 10%;
    margin-bottom: 70px;
`;