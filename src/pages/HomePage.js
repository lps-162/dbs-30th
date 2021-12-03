import { Typography } from "@mui/material";
import Box from '@mui/material/Box';

function HomePage() {
    return (
        <Box sx={{
            margin: "20px"
            }}>
            <Typography variant="h5" gutterBottom component="div">
                HomePage, Welcome to Musicality
            </Typography>
        </Box>
    )
}

export default HomePage;