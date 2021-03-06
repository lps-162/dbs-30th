import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function MovieFormErrCheck() {
    const [name, setName] = useState('')
    const [director, setDirector] = useState('')
    const [artists, setArtists] = useState('')
    
    const [nameError, setNameError] = useState('')
    const [directorError, setDirectorError] = useState('')
    const [artistsError, setArtistsError] = useState('')

    const navigate = useNavigate()

        
    // }
    const handleNameChange = (e) => {
        setName(e.target.value)
        setNameError('')
    }

    const handleDirectorChange = (e) => {
        setDirector(e.target.value)
        setDirectorError('')
    }

    const handleArtistsChange = (e) => {
        setArtists(e.target.value)
        setArtistsError('')
    }

    const validateData = () => {
        let isValid = true

        if (name === null || name === "") {
            setNameError("Name cannot be empty")
            isValid = false
        }
        if (director === null || director === "") {
            setDirectorError("Director cannot be empty")
            isValid = false
        }
        if (artists === null || artists === "") {
            setArtistsError("Artists cannot be empty")
            isValid = false
        }
        return isValid
    }

    const submitMovie = () => {
        const isValid = validateData()
        
        if (!isValid) {
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

    return (
        <Box sx={{
            margin: "10px"
        }}>
            <Link to="/movies">Go Back to Movies Page</Link>
            <h3>
                Create New Movie Page
            </h3>
        
            <div>
                <label>Enter Name : </label>
                <input type="text" name="name" value={name} onChange={handleNameChange} />
                <label className="errorLabel">{nameError}</label>
            </div>

            <div>
                <label>Enter Director : </label>
                <input type="text" name="director" value={director} onChange={handleDirectorChange} />
                <label className="errorLabel">{directorError}</label>
            </div>

            <div>
                <label>Enter Artists : </label>
                <input type="text" name="artists" value={artists} onChange={handleArtistsChange} />
                <label className="errorLabel">{artistsError}</label>
            </div>

            <button onClick={submitMovie}>Create Movie</button>
        </Box>
    )
}

export default MovieFormErrCheck;