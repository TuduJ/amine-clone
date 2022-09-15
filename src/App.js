import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeDetail from "./Pages/AnimeDetail";
import Error from "./Pages/Error";
import Genre from "./Pages/Genre";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <div className="mx-5 mt-5 bg-transparent text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/genre" element={<Genre/>}/>
            <Route path="/anime/:id" element={<AnimeDetail/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
