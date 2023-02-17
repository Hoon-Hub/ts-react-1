import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Main2 from "./pages/Main2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/2" element={<Main2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
