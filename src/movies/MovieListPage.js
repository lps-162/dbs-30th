import Grid from '@mui/material/Grid';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from "react";
import { Link } from "react-router-dom";

const moviesData = [
    {
        id: 1,
        name: "Thalapathy",
        director: "Manirathnam",
        artists: "Rajinikanth, Mamooty"
    },
    {
        id: 2,
        name: "Jai Bhim",
        director: "TJ Gnanavel",
        artists: "Surya"
    },
    {
        id: 3,
        name: "Janatha Garage",
        director: "Kortala Shiva",
        artists: "NTR, Mohanlal"
    }
]

function MovieListPage() {
    const [movies, setMovies] = useState(moviesData)

    const getRowTags = () => {
        const rowTags = movies.map((movie) => (
            <TableRow key={movie.id}>
                <TableCell component="th" scope="row">
                    {movie.id}
                </TableCell>
                <TableCell align="right">{movie.name}</TableCell>
                <TableCell align="right">{movie.director}</TableCell>
                <TableCell align="right">{movie.artists}</TableCell>
                <TableCell align="right">
                    <Link to={"/movies/" + movie.id}>
                        Show Details
                    </Link>
                </TableCell>
            </TableRow>
        ))
        return rowTags;
    }

    return (
        <>
            <h3>List of Movies</h3>
            <Grid container>
                <Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 850 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Movie ID</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Director</TableCell>
                                    <TableCell align="right">Artists</TableCell>
                                    <TableCell align="right">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {getRowTags()}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>

            </Grid>
        </>
    )
}
export default MovieListPage;