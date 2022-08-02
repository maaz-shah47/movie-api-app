import React, { useState } from 'react'
import { Button, Container, Paper, TextField } from '@mui/material'

const AddMovie = () => {
  const [movieName, setMovieName] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleMovieNameChange = () => {

  }
  return (
    <Container sx={{display: 'flex', justifyContent: 'center'}}>
      <Paper sx={{p:3, minWidth:600}}>
        <h2>Add Movie</h2>
        <TextField id="movie-name" onChange={handleMovieNameChange} label="Movie Name" variant="standard" fullWidth style={{marginBottom: '20px'}} />
        <TextField id="release_date" label="Release Date" variant="standard" fullWidth style={{marginBottom: '20px'}} />
        <TextField
          id="outlined-multiline-flexible"
          fullWidth
          style={{marginBottom: '20px'}}
          label="Movie Description"
          multiline
          minRows={4}
        />
        <Button onClick={handleSubmit} variant="contained">Add Movie</Button>
      </Paper>
    </Container>
  )
}

export default AddMovie
