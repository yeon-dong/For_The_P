import { useNavigate } from "react-router-dom";
import { LoginButton, LogoContainer, Logoimage, Logoimg, SignUpButton } from "./MainPage.style";

function MainPage() {
  const navigate = useNavigate();
  const login = () =>{
    navigate("/login");
  }

  return (
    <>
        <LogoContainer>
            <Logoimg >
                <Logoimage src="/logo.svg"></Logoimage>
                <LoginButton onClick={login}>로그인</LoginButton>
                <SignUpButton to='/signup'>회원가입 하러가기</SignUpButton>
            </Logoimg>
        </LogoContainer>
        
    </>
  );
}

export default MainPage;