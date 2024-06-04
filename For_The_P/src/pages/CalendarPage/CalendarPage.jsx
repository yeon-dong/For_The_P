import Header from "../../components/Header/Header";
import React, { useState } from 'react';
import { Badge, Calendar, Switch } from 'antd';
import { SwitchDiv, SwitchText } from "./CalendarPage.style";

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: 'warning',
          content: '친구 만나기',
        },
        {
          type: 'success',
          content: '해야할 일 1',
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: 'warning',
          content: '친구 만나기 4',
        },
        {
          type: 'success',
          content: '해야할 일 2',
        },
        {
          type: 'error',
          content: '과제 마감일 이다',
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: 'warning',
          content: '친구 만나기 2',
        },
        {
          type: 'success',
          content: '해야할 일인데 이름이 길...',
        },
        {
          type: 'error',
          content: '과제 마감일 1',
        },
        {
          type: 'error',
          content: '과제 마감일 2',
        },
        {
          type: 'error',
          content: '과제 마감일 3',
        },
        {
          type: 'error',
          content: '과제 마감일 4',
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};

function CalendarPage() {
  const [checked, setChecked] = useState(true);

  const onSwitch = () => {
    setChecked(prev => !prev);
  };

  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

    return (
      <>
        <Header/>
        <SwitchDiv>
          <Switch defaultChecked onChange={onChange} onClick={onSwitch} />
          <SwitchText>{checked ? "일정 보기" :"할일 보기"}</SwitchText>
        </SwitchDiv>
        <Calendar cellRender={cellRender} />
      </>
    );
  }
  
  export default CalendarPage;