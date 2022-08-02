import React from 'react'
import Navbar from '../UI/Appbar'

const Header = (props) => {
  return (
    <Navbar showMovies={props.showMovies} />
  )
}

export default Header
