import { LoginButton, LogoContainer, Logoimg, SignUpButton } from "./MainPage.style";

function MainPage() {


  return (
    <>
        <LogoContainer>
            <Logoimg >
                <img src="/logo.svg"></img>
                <LoginButton>로그인</LoginButton>
                <SignUpButton>회원가입 하러가기</SignUpButton>
            </Logoimg>
        </LogoContainer>
        
    </>
  );
}

export default MainPage;