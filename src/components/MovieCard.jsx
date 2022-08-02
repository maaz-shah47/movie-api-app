import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};
const MovieCard = ({movie}) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2, maxHeight: 400 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {movie.release_date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truncate(movie.opening_crawl, 200)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}

export default MovieCard
