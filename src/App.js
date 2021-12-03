import MovieListPage from "./pages/MovieListPage";
import MovieDetails from "./movies/MovieDetails";
import ButtonAppBar from "./common/AppBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MatMovieForm from "./movies/MatMovieForm";
import SampleList from "./movies/SampleList";
import CounterComp from "./movies/CounterComp";
import MovieEditForm from "./movies/MovieEditForm";
import Box from '@mui/material/Box';
import AuthContextProvider from "./contexts/AuthContext";
import NotFound from "./common/NotFound";
import ArtistsListPage from "./pages/ArtistsListPage";

function App() {
  return (
    <div>
        <AuthContextProvider>
        <ButtonAppBar />
        <Box sx={{ margin: "20px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/movies" element={<MovieListPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/edit" element={<MovieEditForm />} />
            <Route path="/movies/create" element={<MatMovieForm />} />

            <Route path="/artists" element={<ArtistsListPage />} />

            <Route path="/sample" element={<SampleList />} />
            <Route path="/counter" element={<CounterComp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
        </AuthContextProvider>
    </div>
  );
}

export default App;
