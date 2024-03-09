import { Box, Typography } from '@mui/material'
import React from 'react'

const CMFooter = () => {
  return (
  //  <Box sx={{backgroundColor:"#2979ff",width:"100%",position:"fixed",bottom:"0px"}}>
  //   <Box sx={{padding:"30px"}}>
  //   <Typography textAlign={"center"} sx={{color:"white"}}>@copyright Janisar</Typography>
  //   </Box>
    <Box sx={{ bgcolor: '#2979ff', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        @copyright Janisar
        </Typography>
      </Box>
   
  )
}

export default CMFooter
