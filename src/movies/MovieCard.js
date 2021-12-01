import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
        image={movie.posterImg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {movie.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {movie.director}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {movie.artists}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {movie.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Goto Jukebox in Youtube</Button>
      </CardActions>
    </Card>
  );
}
