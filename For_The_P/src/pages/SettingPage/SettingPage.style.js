import styled from "styled-components";
import { Link } from "react-router-dom";

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
    font-size : 40px;
    color: #0E6973;
`;

export const UserIMG = styled.img`
    margin-top: 12px;
    height: 166px;
    width: 166px;
`;

export const UserID = styled.div`
    margin-top: 12px;
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 40px;
    color: black;
`;

export const SettingLink = styled(Link)`
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: white;
    border: 4px solid black;
    border-radius: 12px;
    margin-bottom:4px;
    width: 600px;
    box-sizing: border-box; /* 패딩 포함하여 너비 계산 */
    /* 모바일 화면 스타일 */
    @media (max-width: 800px) {
      flex-direction: row;
      align-items: center;
      background-color: #f9f9f9; /* 모바일에서 배경색 변경 */
      padding: 4px; /* 모바일에서 패딩 조정 */
      width: 356px;
      
    }
`;

export const SettingLinkText = styled.div`
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 32px;
    color: black;
    margin-left: 10px;
    margin-top: 4px;
    @media (max-width: 800px) {
        font-size : 16px;
}
`;
