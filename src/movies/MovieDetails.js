import { useParams, Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import axios from 'axios'
import { useState } from 'react';
import MovieCard from './MovieCard';

function MovieDetails() {
    const [movie, setMovie] = useState(null)
    const params = useParams();

    React.useEffect(() => {
        const url = "http://localhost:8080/movies/" + params.movieId
        axios.get(url)
            .then(res => {
               setMovie(res.data) 
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

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
                { movie && 
                    <MovieCard movie={movie} collection={{ boxOffice : 90, international: 300 }}>
                        <h3>Just extra information</h3>
                        <p>One more p tag</p>
                    </MovieCard>
                }
            </Box>
        </>
    )
}

export default MovieDetails;