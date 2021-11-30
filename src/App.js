import MovieListPage from "./movies/MovieListPage";
import MovieDetailsPage from "./movies/MovieDetailsPage";
import ButtonAppBar from "./common/AppBar";
import { Routes, Route } from "react-router-dom";
import Home from "./common/Home";
import About from "./common/About";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
