import styled from "styled-components";

export const ItemList = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border: 4px solid ${(props) => (props.$color)};
    border-radius: 12px;
    margin-bottom:4px;
    width: 730px;
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

export const ItemSpan = styled.span`
    margin: 10px 0px 4px 8px;
    font-family: "Gothic A1", sans-serif;
    font-weight: 700;
    font-style: normal;
    font-size : 30px;
    text-align: left;
    color: ${(props) => (props.$color)};
    word-break: break-all;
    margin-right: 10px; /* 버튼과의 간격 */
    @media (max-width: 800px) {
        font-size : 22px;
    }
`;

export const ItemButton = styled.button`
    background-color: white;
    border-color: black;
    border-width: 4px;
    padding: 20px 20px 20px 20px;
    margin: 10px 8px;
    border-radius: 12px;
`;

export const ItemButtonDone = styled.button`
    background-color: white;
    border-color: grey;
    border-width: 4px;
    font-size : 30px;
    margin: 10px 8px;
    padding: 0px 2px 0px 2px;
    border-radius: 12px;
    img{
        height: 25px;
        width: 36px;
    }
`;