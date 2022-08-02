import { Grid, Container} from '@mui/material'
import React from 'react'
import './movie.module.css'
import MovieCard from './MovieCard'

const Movie = ({movies}) => {
  return (
    <Container sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', p: 2, mt: 3 }}>
      <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
            movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }
      </Grid>
  </Container>
  )
}
export default Movie;
