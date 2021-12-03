
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';
import { useState, useEffect } from 'react';

const movieValidationSchema = yup.object({
    name: yup
        .string('Enter movie name')
        .required('Movie Name is required')
        .min(3, 'Movie should be of minimum 8 characters length')
        .max(100, 'Movie cannot exceed 100 characters length'),
    director: yup
        .string('Enter Director name')
        .min(5, 'Director name should be of minimum 5 characters length')
        .max(100, 'Director name cannot exceed 100 characters length')
        .required('Director name is required'),
    artists: yup
        .string('Enter artists name')
        .required('Artists name is required')
        .min(5, 'Artists name should be of minimum 5 characters length')
        .max(200, 'Artists name cannot exceed 200 characters length'),
});

const initialValues = {
    name: '',
    director: '',
    artists: ''
}

function MovieEditForm() {
    const navigate = useNavigate()
    const params = useParams()
    const [dataLoaded, setDataLoaded] = useState(false)

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: movieValidationSchema,
        onSubmit: values => {
            console.log(values)
            // axios post
            axios.patch("http://localhost:8080/movies/" + params.movieId, values)
                .then(res => {
                    console.log(res)
                    navigate("/movies/" + res.data.id)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    })

    useEffect(() => {
        axios.get("http://localhost:8080/movies/" + params.movieId)
            .then(res => {
                formik.setValues(res.data)
                setDataLoaded(true)
            })
            .catch(err => {
                console.log("Error fetching data")
            })
    }, [])

    

    return (
        <>
            <Box sx={{ height: 50 }}></Box>
            <Typography variant="h4" gutterBottom component="div">
                Edit Movie Details
            </Typography>
            {dataLoaded && <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="name"
                        label="Movie Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}

                    />
                </div>
                <div>
                    <TextField
                        id="director"
                        label="Director Name"
                        name="director"
                        value={formik.values.director}
                        onChange={formik.handleChange}
                        error={formik.touched.director && Boolean(formik.errors.director)}
                        helperText={formik.touched.director && formik.errors.director}
                    />
                </div>
                <div>
                    <TextField
                        id="artists"
                        label="Artists name"
                        name="artists"
                        value={formik.values.artists}
                        onChange={formik.handleChange}
                        error={formik.touched.artists && Boolean(formik.errors.artists)}
                        helperText={formik.touched.artists && formik.errors.artists}
                    />
                </div>
                <div>
                    <Button variant="contained" onClick={formik.handleSubmit}>Update Movie</Button>
                </div>
            </Box>}
        </>
    )
}

export default MovieEditForm;