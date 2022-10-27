import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type ButtonLoginProps={
    onClick:React.MouseEventHandler<HTMLButtonElement>
}

export default function ButtonLogin({onClick}:ButtonLoginProps) {
    
    return (
        <Stack spacing={2} direction="column">
            <Button
            variant="outlined"
            onClick={onClick}
            >Login
            </Button>
        </Stack>
    );
}
