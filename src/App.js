import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Login from './login';
import Signup from './signup';
import Home from "./home";
import Quiz from "./quiz";
import Resultpage from "./resultpage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="home" element={<Home />} />
          <Route path="quiz" element={<Quiz/>} />
          <Route path="resultpage" element={<Resultpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
