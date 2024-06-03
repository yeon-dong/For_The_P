import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  return (
    <><AuthProvider>
      <div className='root-wrap'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/calender" element={<CalenderPage />}></Route>
          <Route path="/todo" element={<NowPlayingPage />}></Route>
          <Route path="/setting" element={<PopularPage />}></Route>
          <Route path="/setting/friend" element={<TopRatedPage />}></Route>
          <Route path="/setting/category" element={<UpComingPage />}></Route>
          <Route path="/*" element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </AuthProvider>
    </>
  )
}

export default App
