import { Stack,Box } from '@mui/material'
import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Footer = () => {
  return (
    <div className="footer">
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{padding:"0px 30px",height: "76px",marginTop:"1rem"}} spacing={4} >
            <Box className="footer_content">
                < HomeOutlinedIcon/>
                Home
            </Box>
            <Box className="footer_content">
                <PieChartOutlineOutlinedIcon/>
                Portfolio

            </Box>
            <Box className="footer_content">
                <AccountCircleOutlinedIcon/>
                Profile
            </Box>
        </Stack>
    </div>
  )
}

export default Footer