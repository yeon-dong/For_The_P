import Header from "../../components/Header/Header";
import { SettingContainer, SettingText, UserIMG, UserID, SettingLink, SettingLinkText, Footer } from "./SettingPage.style";
import {useState, useEffect} from "react";


function SettingPage() {
  const [username, setUsername] = useState("");
  const [id, setUserID] = useState("");
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const fetchUserInfo = async () => {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
          }
        };

        try {
          const response = await fetch('http://localhost:8080/auth/me', options);
          const data = await response.json();
          setUsername(data.name);
          setUserID(data.username);
        } catch (error) {
          console.error('Failed to fetch user info:', error);
        }
      };

      fetchUserInfo();
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUsername("");
  };

    return (
      <>
        <Header/>
        <SettingContainer>
          <SettingText>사용자 설정</SettingText>
          <UserIMG src='user_img.svg' />
          {username && <UserID>{username} #{id}</UserID>}
          <SettingLink $color={"black"} to='/setting/category'><SettingLinkText $color={"black"}>일정 카테고리 수정하기</SettingLinkText></SettingLink>
          <SettingLink $color={"black"} to='/setting/friend'><SettingLinkText $color={"black"}>친구 목록 보기</SettingLinkText></SettingLink>
        </SettingContainer>
        <Footer>
          <SettingLink $color={"grey"} to='/' onClick={logout}><SettingLinkText  $color={"grey"}>로그아웃 하기</SettingLinkText></SettingLink>
          <SettingLink $color={"#A60A33"} to='/'><SettingLinkText $color={"#A60A33"}>탈퇴하기</SettingLinkText></SettingLink>
        </Footer>
      </>
    );
  }
  
  export default SettingPage;