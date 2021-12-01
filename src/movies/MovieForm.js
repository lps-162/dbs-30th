import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function MovieForm() {
    return (
        <Box sx={{
            margin: "10px"
        }}>
            <Link to="/movies">Go Back to Movies Page</Link>
            <h3>
                Create New Movie Page
            </h3>
        </Box>
    )
}

export default MovieForm;