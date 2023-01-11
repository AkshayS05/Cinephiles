import React from "react";
import {CssBaseline} from '@mui/material';
import {Routes,Route} from 'react-router-dom';
import {SeriesInformation,Series,Actors,Profile,NavBar} from './'
const App = () => {
  return (
    <div>
    <CssBaseline />
    <NavBar />
      <main>
        <Routes>
            <Route path='/' element="Home" />
            <Route path='/series' element={<Series />} />
            <Route path='/series/:id' element={<SeriesInformation />} />
            <Route path='/actors/:id' element={<Actors />} />
            <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;