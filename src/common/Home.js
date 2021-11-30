import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
    const id = 3
    return (
        <div>
            <Typography variant="h5" gutterBottom component="div">
                HomePage, Welcome to Musicality
            </Typography>
            <Link to={"/movies/" + id }>
                Show Movie Details 3
            </Link>
        </div>
    )
}

export default Home;