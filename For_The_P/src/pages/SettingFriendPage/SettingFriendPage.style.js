import styled from "styled-components";

export const BackArrow = styled.img`
    position: absolute;
    left: 26%;
    top: 76px;
`;

export const SettingContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const SettingText = styled.div`
    margin-top: 16px;
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 40px;    color: black;
`;

export const SearchBox = styled.div`
    width: 50%;
    margin-top: 24px;
`;

export const FriendBox = styled.div`
    width: 50vw;
`;

export const FriendContainer = styled.div`
    margin-top: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const FriendIMG = styled.img`
    height: 96px;
    width: 96px;
`;

export const FriendNameText = styled.div`
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 40px;
    color: black;
`;

export const FriendInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


export const FriendDelButton = styled.button`
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 40px;
    color: #A60A33;
    border-color: #A60A33;
    padding: 8px;
`;