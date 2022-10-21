import * as React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ButtonEffect = ({children}) => {
    return (

        <Stack spacing={2} direction="row">
            <Button variant="outlined" sx={{ minWidth: 100,border: 1, borderColor: '#0F5098',color:"#1158A7" ,fontSize:14,boxShadow:"0px 2px 4px rgba(18, 18, 18, 0.2)"  }}> {children}</Button>
        </Stack>

    );
}

export default ButtonEffect;