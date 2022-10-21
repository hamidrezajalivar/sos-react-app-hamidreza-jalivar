import * as React from 'react';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ButtonEffect = () => {
    return (

        <Stack spacing={2} direction="row">
            <Button variant="outlined" sx={{ minWidth: 100,border: 1, borderColor: '#0F5098',color:"#0F5098"   }}> ادامه</Button>
        </Stack>

    );
}

export default ButtonEffect;