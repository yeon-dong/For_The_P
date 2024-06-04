import Header from "../../components/Header/Header";
import { SettingContainer, SettingText, UserIMG, UserID, SettingLink, SettingLinkText } from "./SettingPage.style";
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
          <SettingLink to='/setting/category'><SettingLinkText>일정 카테고리 수정하기</SettingLinkText></SettingLink>
          <SettingLink to='/setting/friend'><SettingLinkText>친구 목록 보기</SettingLinkText></SettingLink>
        </SettingContainer>
      </>
    );
  }
  
  export default SettingPage;