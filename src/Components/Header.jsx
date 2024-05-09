import React from 'react';
import logo from "../Images/logo.png"
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <div className='header'><img style={{height:'50px' , margin:"5px" , borderRadius:"17px" , marginLeft:"35px"}} src={logo} alt="Logo" /> 
    <Typography variant="h5" sx={{marginTop:"14px" , marginLeft:"5px" , color:"grey"}}>Keep
    </Typography> 
    </div>
  )
}

export default Header