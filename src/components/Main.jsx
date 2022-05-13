import React from 'react'
import SearchBar from './SearchBar'
import googleSvg from "../assets/Google1.svg"

const Main = () => {
  return (
    <div>
    <img src={googleSvg} alt="" />
        <SearchBar/>
    </div>
  )
}

export default Main