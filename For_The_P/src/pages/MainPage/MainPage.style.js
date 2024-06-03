import styled from "styled-components";
import { Link } from "react-router-dom";

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Logoimg = styled.div`
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LoginButton = styled.button`
    font-family: "Gothic A1", sans-serif;
    font-weight: 500;
    font-style: normal;
    margin-top: 40px;
    background-color: white;
    border-color: black;
    padding-top: 16px;
    padding-bottom: 16px;
    width: 140%;
    &:hover{
        color: #7B68EE;
    }
`;

export const SignUpButton = styled(Link)`
    margin-top: 24px;
    color: black;
    font-family: "Gothic A1", sans-serif;
    font-weight: 800;
    font-style: normal;
`;