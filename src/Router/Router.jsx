import React from 'react'
import { Navigate, Route, Routes, useRoutes } from 'react-router-dom'
import About from '../components/About'
import Main from '../components/Main'
import Results from '../components/Results'
import SearchBar from '../components/SearchBar'


const Router = () => {
  //! aynı componente farklı pathler atama
  const element = useRoutes([
  { path: "/", element: <Navigate to="/search" replace={true} /> },
  { path: "/search", element: <Results /> },
  { path: "/image", element: <Results /> },
  { path: "/news", element: <Results /> },
  { path: "/video", element: <Results /> },
  { path: "/about", element: <About /> },
  ]);
  return element
}

export default Router

// (
//     <div>

// <Routes>
//         {/* <Route path="/" element={<Main />} /> */}
//         <Route path="about" element={<About />} />
//         <Route path="/" element={<Navigate to="/search" replace/>} />
//         {/* <Route path="/search" element={<Results />} /> */}

//       </Routes>
//     </div>
//   )