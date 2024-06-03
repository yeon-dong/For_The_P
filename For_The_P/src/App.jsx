import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import SettingFriendPage from "./pages/SettingFriendPage/SettingFriendPage";
import SettingCategoryPage from "./pages/SettingCategoryPage/SettingCategoryPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import './App.css'

function App() {

  return (
    <>
      <div className='root-wrap'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/calendar" element={<CalendarPage />}></Route>
          <Route path="/todo" element={<TodoPage />}></Route>
          <Route path="/setting" element={<SettingPage />}></Route>
          <Route path="/setting/friend" element={<SettingFriendPage />}></Route>
          <Route path="/setting/category" element={<SettingCategoryPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
