import MovieListPage from "./pages/MovieListPage";
import MovieDetails from "./movies/MovieDetails";
import ButtonAppBar from "./common/AppBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MovieForm from "./movies/MovieForm";
import SampleList from "./movies/SampleList";
import CounterComp from "./movies/CounterComp";

function App() {
  return (
    <div>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/movies/create" element={<MovieForm />} />
        <Route path="/sample" element={<SampleList />} />
        <Route path="/counter" element={<CounterComp />} />
      </Routes>
    </div>
  );
}

export default App;
