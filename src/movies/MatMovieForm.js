
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import * as yup from 'yup';
import { useFormik } from 'formik';

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

function MatMovieForm() {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: movieValidationSchema,
        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <>
            <Box sx={{ height: 50 }}></Box>
            <Typography variant="h4" gutterBottom component="div">
                Create New Movie
            </Typography>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '50ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="movie-name"
                        label="Enter Movie Name"
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
        
                    />
                </div>
                <div>
                    <TextField
                        id="director-name"
                        label="Enter Director Name"
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <TextField
                        id="artists-name"
                        label="Enter Artists"
                        onChange={formik.handleChange}
                    />
                </div>
                <div>
                    <Button variant="contained">Create New Movie</Button>
                </div>
            </Box>
        </>
    )
}

export default MatMovieForm;