import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { SettingContainer, SettingText, BackArrow, SearchBox } from "./SettingFriendPage.style";
import { Input } from "antd";
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

function SettingFriendPage() {


    return (
      <>
        <Header/>
        <Link to="/setting"><BackArrow src="/left_fill.svg"></BackArrow></Link>
        <SettingContainer>
          <SettingText>친구 목록 수정하기</SettingText>
          <SearchBox>
          <Search
            placeholder="찾고 싶은 친구 아이디를 입력하세요!"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
          />
          </SearchBox>
        </SettingContainer>
      </>
    );
  }
  
  export default SettingFriendPage;