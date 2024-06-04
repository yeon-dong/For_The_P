import styled from "styled-components";
import {Link} from "react-router-dom";

export const HeaderContainer = styled.div`
    background-color: white;
    border-bottom-width: 2px;
    border-style : solid;
    border-color: whitesmoke;
`;

export const HeaderWrap = styled.div`
    height: 10%;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between
`;

export const HeaderLeftWrap = styled.div`
    display: flex;
`;
export const LogoImg = styled.img`
    margin-top: 4px;
    margin-left: 20px;
    max-height: 60px;
    max-weight: 118px;
    @media (max-width: 800px) {
        height: 40px;
        width: 40px;
    }
`;

export const UserImg = styled.img`
    margin-top: 4px;
    margin-right: 20px;
    max-height: 56px;
    max-width: 56px;
    @media (max-width: 800px) {
        height: 40px;
        width: 40px;
    }
`;

export const HeaderRightWrap = styled.div`

`;

export const HeaderCenterWrap = styled.div`
    display: flex;
`;

export const HeaderTodo = styled.div`
    margin-left: 60px;
    margin-right: 60px;
    border-bottom-width: 6px;
    border-style : solid;
    border-color: ${(props) => (props.$pickColor ? '#0E6973' : 'whitesmoke')};
    padding-top: 2px;
    padding-bottom: 8px;
    padding-right: 24px;
    padding-left: 24px;
    transition: border-color 0.5s;
    &:hover{
        border-color: #0E6973;
    }
    @media (max-width: 800px) {
        padding-right: 4px;
        padding-left: 4px;
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 10px;
        width:64px;
    }
`;

export const HeaderCalendar = styled.div`
    margin-left: 60px;
    margin-right: 60px;
    border-bottom-width: 6px;
    border-style : solid;
    border-color:  ${(props) => (props.$pickColor ? '#0E6973' : 'whitesmoke')};
    padding-top: 2px;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 8px;
    transition: border-color 0.5s;
    &:hover{
        border-color: #0E6973;
    }
    @media (max-width: 800px) {
        padding-right: 4px;
        padding-left: 4px;
        margin-left: 40px;
        margin-right: 40px;
        margin-top: 10px;
        width:64px;
    }
`;

export const HeaderText = styled.div`
    margin-top: 10px;
    color: black;
    text-decoration: none;
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 40px;
    transition: color 0.5s;
    &:hover{
        color: #0E6973;
    }
    @media (max-width: 800px) {
        font-size : 28px;
        text-align:center;
    }
`;

export const HeaderNavItem = styled(Link)`
    margin-bottom: 12px;
`;