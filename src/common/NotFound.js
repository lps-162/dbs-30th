import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function NotFound() {
    return (
        <Alert severity="error">
            <AlertTitle>Page Not Found</AlertTitle>
            Please Contact the administrator
        </Alert>
    )
}

export default NotFound;