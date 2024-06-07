import Header from "../../components/Header/Header";
import { SettingContainer, SettingText, BackArrow, SettingLink, SettingLinkText, Footer, SettingCategory, SettingCategoryText } from "./SettingCategoryPage.style";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { Modal, ColorPicker, Input } from 'antd';

const { TextArea } = Input;
const onChange = (e) => {
  console.log('Change:', e.target.value);
};

function SettingCategoryPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return (
      <>
      <Header/>
      <Link to="/setting"><BackArrow src="/left_fill.svg"></BackArrow></Link>
        <SettingContainer>
          <SettingText>일정 카테고리 수정하기</SettingText>
          <br/>
          <br/>
          <SettingLink $color={"#FAAD14"}><SettingLinkText>약속</SettingLinkText></SettingLink>
          <SettingLink $color={"#52C41A"}><SettingLinkText>여행</SettingLinkText></SettingLink>
          <SettingLink $color={"#FF4D4F"}><SettingLinkText>중요한 일정</SettingLinkText></SettingLink>
        </SettingContainer>
        <Footer>
          <SettingCategory $color={"grey"}><SettingCategoryText onClick={showModal}>카테고리 추가하기</SettingCategoryText></SettingCategory>
        </Footer>
        <Modal title="카테고리 추가하기" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <br/>
        <p>색상 설정하기</p>
        <br/>
        <ColorPicker defaultValue="#1677ff" size="large" showText />
        <br/><br/>
        <p>카테고리 이름 설정하기</p>
        <br/>
        <Input showCount maxLength={20} onChange={onChange} />
        <br/><br/>
      </Modal>
      </>
    );
  }
  
  export default SettingCategoryPage;