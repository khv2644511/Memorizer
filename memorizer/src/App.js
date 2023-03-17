import "./App.css";
import "./index.css";
import DayList from "./component/DayList.tsx";
import Header from "./component/Header.tsx";
import Day from "./component/Day.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmptyPage from "./component/EmptyPage.tsx";
import CreateWord from "./component/CreateWord.tsx";
import CreateDay from "./component/CreateDay.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/*" element={<EmptyPage />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="/*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
