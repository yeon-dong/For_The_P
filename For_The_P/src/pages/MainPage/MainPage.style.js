import styled from "styled-components";

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
    font-weight: 800;
    font-style: normal;
    margin-top: 40px;
    background-color: white;
    border-color: black;
    width: 120%;
`;

export const SignUpButton = styled.a`
    margin-top: 20px;
    color: black;
    font-family: "Gothic A1", sans-serif;
    font-weight: 800;
    font-style: normal;
`;