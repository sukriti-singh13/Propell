import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import UnmarkFunds from './pages/UnmarkFunds'
import { Box } from '@mui/material'
import Portfolio from './pages/Portfolio'

function App() {
 

  return (
    <Box sx={{maxWidth:"360px", backgroundColor:"#fff"}} >
    <Routes>
      <Route path ="/"  element={<DashBoard/>}/>
      <Route path ="unmarkFunds" element={<UnmarkFunds/>}/>
      <Route path ="portfolio" element={<Portfolio/>}/>
    </Routes>
    </Box>
  )
}

export default App
