import { Link, useLocation } from "react-router-dom";
import {
  HeaderContainer,
  HeaderWrap,
  LogoImg,
  UserImg,
  HeaderLeftWrap,
  HeaderRightWrap,
  HeaderNavItem,
  HeaderCenterWrap,
  HeaderTodo,
  HeaderCalendar,
  HeaderText
} from "./Header.style";
import { useState, useEffect } from "react";

function Header() {
  const location = useLocation();

  // 경로에 따라 초기 상태를 설정
  const getInitialPage = (pathname) => {
    if (pathname == "/todo") {
      return "todo";
    } else if (pathname == "/calendar") {
      return "calendar";
    } else {
      return "";
    }
  };
  
  const [page, setPage] = useState(getInitialPage(location.pathname));

  useEffect(() => {
    setPage(getInitialPage(location.pathname));
  }, [location.pathname]);

  const goToTodo = () => {
    setPage("todo");
  };

  const goToCalendar = () => {
    setPage("calendar");
  };

  const colorProps = (prop) => {
    return page === prop;
  };

    return (
      <>
        <HeaderContainer>
          <HeaderWrap>
          <HeaderLeftWrap>
            <Link to='/todo'>
              <LogoImg src="/logo2.svg"></LogoImg>
            </Link>
          </HeaderLeftWrap>
          <HeaderCenterWrap>
            <HeaderTodo $pickColor={colorProps("todo")}><HeaderNavItem onClick={goToTodo} to='/todo'><HeaderText>할 일</HeaderText></HeaderNavItem></HeaderTodo>
            <HeaderCalendar $pickColor={colorProps("calendar")}><HeaderNavItem onClick={goToCalendar} to='/calendar'><HeaderText>일정</HeaderText></HeaderNavItem></HeaderCalendar>
          </HeaderCenterWrap>
          <HeaderRightWrap>
            <Link to='/setting'>
              <UserImg src="/user_img.svg"></UserImg>
            </Link>
          </HeaderRightWrap>
          </HeaderWrap>
        </HeaderContainer>
      </>
    );
  }
  
  export default Header;