import styled from "styled-components";
import { Link } from "react-router-dom";

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
    font-size : 40px;
    color: black;
`;

export const SettingLink = styled.div`
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: ${(props) => (props.$color)};
    border-radius: 12px;
    margin-bottom:8px;
    width: 600px;
    flex-direction: column;
    align-items: center;
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
    color: white;
    margin-left: 10px;
    margin-top: 4px;
    @media (max-width: 800px) {
        font-size : 16px;
}
`;

export const Footer = styled.div`
    width: 100%;
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SettingCategory = styled.button`
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: white;
    border: 4px solid grey;
    border-radius: 12px;
    margin-bottom:8px;
    width: 600px;
    flex-direction: column;
    align-items: center;
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

export const SettingCategoryText = styled.div`
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 32px;
    color: grey;
    margin-left: 10px;
    margin-top: 4px;
    @media (max-width: 800px) {
        font-size : 16px;
}
`;