import Rating from '@mui/material/Rating';
import React from 'react';

const Rateing = ({score}) => {
    return (
       
            
            <>
<Rating name="read-only" value={score} readOnly />

  </>
        
    );
}

export default Rateing;