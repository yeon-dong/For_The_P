import Header from "../../components/Header/Header";
import TodoContainer from "../../components/TodoContainer/TodoContainer";
import TodoInput from "../../components/TodoInput/TodoInput";
import { Container, TodayText, DateContainer, DatePickerButton, CalendarContainer, PopupMask, DatePickerButton2, DayText, TodoInputDiv, BigContainer, Footer } from "./TodoPage.style";
import { Calendar, theme } from 'antd';
const onPanelChange = (value, mode) => {
  console.log(value.format('YYYY-MM-DD'), mode);
};
import { useState, useEffect, useRef, useCallback} from "react";


function TodoPage() {
  const [calendarPopUp, setCalendarPopUp] = useState(false);
  const [todayNum, setTodayNum] = useState(0);
  const [date, setDate] = useState(new Date());
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  useEffect(() => {
    updateDayText(date);
  }, [date]);

  const updateDayText = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = week[date.getDay()];
    setDayText(`${year}년 ${month}월 ${day}일 ${dayOfWeek}요일`);
  };

  const [dayText, setDayText] = useState("");

  const PopUpCalender = () =>{
    setCalendarPopUp(prev=> !prev);
  }

  const AddDay = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    setDate(newDate);
    setTodayNum(prev => prev+1);
  }

  const SubDay = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 1);
    setDate(newDate);
    setTodayNum(prev => prev-1);
  }

  const { token } = theme.useToken();
  const wrapperStyle = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

    //todo 배열
    const [todos, setTodos] = useState([
      { id: 1, content: "과제 끝내기", isDone: false },
      { id: 2, content: "해야할 일 정리하기", isDone: false },
      { id: 3, content: "다이어리 작성하기", isDone: false },
      { id: 4, content: "과제 끝내기", isDone: true },
    ])
  
    //새로운 아이디 초기값 5
    const newId = useRef(5);
    //todos 배열에 새로운 객체를 추가하는 함수
    const onAdd = useCallback(
      (content) => {
        const todo = {
          id: newId.current,
          content,
          isDone: false,
        };
        setTodos(todos.concat(todo)); //새로 입력한 todo 합쳐서 새로운 배열 만들기
        newId.current++; //아이디 증가
      },
      [todos],
    );
  
    //할 일 완료
    const onIsDone = useCallback(
      (id) => {
        setTodos(todos => (todos.map(todo =>
          (todo.id === id ? {...todo, isDone: !todo.isDone} : todo)  
        )));
      },
      [todos],
    );
  
    //할 일 삭제
    const onRemove = useCallback(
      (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      },
      [todos],
    );

  return (
    <>
      <Header />
      <Footer>
      <TodoInputDiv>
        <TodoInput onAdd={onAdd} />
      </TodoInputDiv>
      </Footer>
      {calendarPopUp && <PopupMask onClick={PopUpCalender} />}
      <BigContainer>
      <Container>
        {todayNum == -1 && <TodayText $color={"#0E6973"}>어제 할 일</TodayText>}
        {todayNum == 0 && <TodayText  $color={"#A60A33"}>오늘 할 일</TodayText>}
        {todayNum == 1 && <TodayText $color={"#F25E7A"}>내일 할 일</TodayText>}
        {![-1,0,1].includes(todayNum) && <TodayText $color={"rgba(0,0,0,0)"}>-</TodayText>}
        <DateContainer>
          {calendarPopUp && (
            <CalendarContainer>
              <div style={wrapperStyle}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
              </div>
            </CalendarContainer>
          )}
          <DatePickerButton onClick={PopUpCalender} src="/chevron_left_double_fill.svg" />
          <DatePickerButton2 onClick={SubDay} src="/chevron_left_fill.svg" />
          <DayText>{dayText}</DayText>
          <DatePickerButton2 onClick={AddDay} src="/chevron_right_fill.svg" />
          <DatePickerButton onClick={PopUpCalender} src="/chevron_right_double_fill.svg" />
        </DateContainer>
        <TodoContainer todos={todos} onIsDone={onIsDone} onRemove={onRemove}/>
      </Container>

      </BigContainer>
    </>
    );
  }
  
  export default TodoPage;