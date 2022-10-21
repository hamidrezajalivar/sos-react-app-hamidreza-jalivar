import * as React from 'react';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const ButtonEffect = ({children,link}) => {
    return (

        <Stack spacing={2} direction="row">
            <Link to={link}><Button variant="outlined" sx={{ minWidth: 100,border: 1, borderColor: '#0F5098',color:"#1158A7" ,fontSize:14,boxShadow:"0px 2px 4px rgba(18, 18, 18, 0.2)"  }}> {children}</Button></Link>
        </Stack>

    );
}

export default ButtonEffect;