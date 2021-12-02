import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function MovieForm() {
    const [name, setName] = useState('')
    const [director, setDirector] = useState('')
    const [artists, setArtists] = useState('')
    const [errors, setErrors] = useState([])
    
    const navigate = useNavigate()

    // const handleChange = (e) => {
    //     console.log(e.target.name)
    //     switch(e.target.name) {
    //         case "name":
    //             setName(e.target.value)
    //             break;
    //         case "director":
    //             setDirector(e.target.value)
    //             break
    //         case "artists":
    //             setArtists(e.target.value)
    //     }
        
    // }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleDirectorChange = (e) => {
        setDirector(e.target.value)
    }

    const handleArtistsChange = (e) => {
        setArtists(e.target.value)
    }

    const submitMovie = () => {
        let isValid = true
        let errors = []

        if (name === null || name === "") {
            errors.push("Name cannot be empty")
            isValid = false
        }
        if (director === null || director === "") {
            errors.push("Director cannot be empty")
            isValid = false
        }
        if (artists === null || artists === "") {
            errors.push("Artists cannot be empty")
            isValid = false
        }
        if (!isValid) {
            setErrors(errors)
            return
        };

        // get form data
        const movie = { name, director, artists }

        // axios post
        axios.post("http://localhost:8080/movies", movie)
            .then(res => {
                console.log(res)
                navigate("/movies/" + res.data.id)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getErrorTag = () => {
        return (
            <Box sx={{ display: 'flex' }}>
                <Alert severity="error">
                    <AlertTitle>Invalid Movie Data</AlertTitle>
                        {errors.map(e => <li>{e}</li>)}
                </Alert>
            </Box>
            
        )
    }

    return (
        <Box sx={{
            margin: "10px"
        }}>
            <Link to="/movies">Go Back to Movies Page</Link>
            <h3>
                Create New Movie Page
            </h3>
            {errors.length>0 && getErrorTag()}
            <div>
                <label>Enter Name : </label>
                <input type="text" name="name" value={name} onChange={handleNameChange} />
            </div>

            <div>
                <label>Enter Director : </label>
                <input type="text" name="director" value={director} onChange={handleDirectorChange} />
            </div>

            <div>
                <label>Enter Artists : </label>
                <input type="text" name="artists" value={artists} onChange={handleArtistsChange} />
            </div>

            <button onClick={submitMovie}>Create Movie</button>
        </Box>
    )
}

export default MovieForm;