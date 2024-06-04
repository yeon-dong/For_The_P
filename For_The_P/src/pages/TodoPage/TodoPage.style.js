import styled from "styled-components";

export const BigContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

export const TodayText = styled.div`
    margin-top: 16px;
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 28px;
    color: ${(props) => (props.$color)};
    text-decoration: underline;
`;

export const DateContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const DatePickerButton = styled.img`
    height: 70px;
    width: 70px;
    cursor: pointer;
    @media (max-width: 800px) {
        height: 44px;
        width: 44px;
    }
`;

export const DatePickerButton2 = styled.img`
    height: 90px;
    width: 90px;
    cursor: pointer;
    @media (max-width: 800px) {
        height: 44px;
        width: 44px;
    }
`;

export const CalendarContainer = styled.div`
    display: absolute; /*hide setting*/
    position: fixed;
    left: 50%;
    top: 40%;
    width: 20%; /*가로길이 설정은 여기서*/
    margin-left: -10%; /*width의 반만큼 음수로*/
    height: 300px; /*세로길이 설정은 여기서*/
    margin-top: -150px; /*height의 반만큼 음수로*/
    z-index: 1000;
`;

export const PopupMask = styled.div`
    position: fixed;
    width: 100%;
    height: 1000px;
    top: 0px;
    left: 0px;
    display: block; 
    background-color:#000;
    opacity: 0.8;
`;

export const DayText = styled.div`
    margin-top: 8px;
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 40px;
    color : black;
    @media (max-width: 800px) {
        font-size : 22px;
    }
`;

export const Footer = styled.div`
    width: 100%;
    height: 70px;
    bottom: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TodoInputDiv = styled.div`

`;