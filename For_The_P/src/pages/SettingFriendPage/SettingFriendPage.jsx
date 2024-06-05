import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { SettingContainer, SettingText, BackArrow, SearchBox, FriendIMG, FriendNameText, FriendContainer, FriendBox, FriendDelButton, FriendInfo } from "./SettingFriendPage.style";
import { Input, Modal, Button } from "antd";
import { useState, useCallback } from "react";
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);



function SettingFriendPage() {
  const [friends, setFriend] = useState([
    { id: 1, name: "윤예준" },
    { id: 2, name: "고재원" },
    { id: 3, name: "일정 마스터" },
    { id: 4, name: "졸업 작품 마스터" },
  ]);
  const [friendToDel,setFriendToDel] = useState(0);

  const delFriend = useCallback(
    (id) => {
      setFriend(friends.filter((friend) => friend.id !== id));
    },
    [friends],
  );

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = (id) => {
    setFriendToDel(id);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    delFriend(friendToDel);
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
          {friends.map((friend) => (<FriendBox key={friend.id}><FriendContainer>
          <FriendInfo><FriendIMG src="/user_img.svg"/>
          <FriendNameText>{friend.name}</FriendNameText></FriendInfo>
          <FriendDelButton onClick={() => showModal(friend.id)}>친구 삭제</FriendDelButton>
          </FriendContainer>
          </FriendBox>))}
          <Modal title="친구를 정말 삭제하시겠습니까?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>{friends.find(friend => friend.id === friendToDel)?.name}님의 친구 목록에서도 삭제됩니다.</p>
          </Modal>
        </SettingContainer>
      </>
    );
  }
  
  export default SettingFriendPage;