import { useParams, Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import axios from 'axios'
import { useState } from 'react';
import MovieCard from './MovieCard';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function MovieDetails() {
    const [movie, setMovie] = useState(null)
    const params = useParams();
    const [errorMessage, setErrorMessage] = useState(null)

    React.useEffect(() => {
        const url = "http://localhost:8080/movies/" + params.movieId
        axios.get(url)
            .then(res => {
                setMovie(res.data)
                setErrorMessage(null)
            })
            .catch(err => {
                if (err.response.status === 404) {
                    setErrorMessage("Movie Not Found")
                }
            })
    }, [])

    const likeMovie = () => {
        alert("Liked the movie - movie details")
    }

    return (
        <>
            <Box sx={{
                margin: "10px"
            }}>
                <Link to="/movies">Go Back to Movies Page</Link>
            </Box>
            <Box sx={{
                margin: "10px"
            }}>
                {movie &&
                    <MovieCard movie={movie} 
                            collection={{ boxOffice: 90, international: 300 }}
                            likeFn={likeMovie}>
                        <h3>Just extra information</h3>
                        <p>One more p tag</p>
                    </MovieCard>
                }
                {errorMessage && <Alert severity="error">
                    <AlertTitle>{errorMessage}</AlertTitle>
                    Please go back to list of movies
                </Alert>}
            </Box>
        </>
    )
}

export default MovieDetails;