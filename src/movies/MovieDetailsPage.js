import { useParams, Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';

function MovieDetailsPage() {
    const params = useParams();

    return (
        <Box sx={{
            margin: "10px"
        }}>
            <Link to="/movies">Go Back to Movies Page</Link>
            <h3>
                Movie Details Page with ID - {params.movieId}
            </h3>
        </Box>
    )
}

export default MovieDetailsPage;