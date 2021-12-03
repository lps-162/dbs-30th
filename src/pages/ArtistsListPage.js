import Grid from '@mui/material/Grid';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import useDbsFetch from '../hooks/DbsFetch';
import { AuthContext } from '../contexts/AuthContext';

function ArtistsListPage() {
    const {data: artists, loading, error} = useDbsFetch("/artists")
    const context = React.useContext(AuthContext)

    const getRowTags = () => {
        const rowTags = artists.map((artist) => (
            <TableRow key={artist.id}>
                <TableCell component="th" scope="row">
                    {artist.id}
                </TableCell>
                <TableCell align="right">{artist.name}</TableCell>
                <TableCell align="right">{artist.nationality}</TableCell>
                <TableCell align="right">{artist.skills}</TableCell>
                <TableCell align="right">{artist.awards}</TableCell>
            </TableRow>
        ))
        return rowTags;
    }

    const getArtistsGrid = () => {
        return (
            <Grid container>
                <Grid>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 850 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Artist ID</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Nationality</TableCell>
                                    <TableCell align="right">Skills</TableCell>
                                    <TableCell align="right">Awards</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {artists.length > 0 ? getRowTags() : <p>No Rows Found</p>}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        )
    }

    const getProgressTag = () => {
        return (
            <Box sx={{ display: 'flex' }}>
                Loading Artists .... <CircularProgress />
            </Box>
        )
    }

    const getErrorTag = () => {
        return (
            <Box sx={{ display: 'flex' }}>
                <Alert severity="error">
                    <AlertTitle>Error Loading Artists</AlertTitle>
                    Pls check with admin
                </Alert>
            </Box>
            
        )
    }

    return (
        <Box sx={{
            margin: "20px"
            }}>
            <h3>List of Artists</h3>
            { loading && getProgressTag()}
            { artists && getArtistsGrid()}
            { error && getErrorTag() } 
        </Box>
    )
}
export default ArtistsListPage;