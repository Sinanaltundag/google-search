import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Main from '../components/Main'


const Router = () => {
  return (
    <div>

<Routes>
        <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Router