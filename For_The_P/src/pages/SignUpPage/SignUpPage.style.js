import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ValidationText = styled.div`
    margin-top: 10%;
    color: black;
    font-size: 24px;
    font-family: "Gothic A1", sans-serif;
    font-weight: 800;
    font-style: normal;
    margin-bottom: 20px;
`;

export const StyledInput = styled.input`
    padding: 10px;
    margin: 10px 0;
    border-radius: 20px;
    width: 40%;
`;

export const StyledError = styled.div`
    color: ${props => props.$errMsg ? 'red' : 'rgba(0,0,0,0)' };
`;

export const StyledButton = styled.button`
  background-color: ${props => props.$canSubmit ? 'navy' : 'gray'};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  width: 42%;
  font-size: 16px;
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

export const StyledGoLogin = styled.div`
    display: flex;
    margin-top: 20px;
    width: 40vw;
    justify-content: space-around;
`;

export const StyledGoLoginText = styled.div`
  color: black;
  font-family: "Gothic A1", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export const StyledGoLoginBtn = styled.a`
  text-decoration: none;
  color: black;
  font-family: "Gothic A1", sans-serif;
  font-weight: 800;
  font-style: normal;
`;
