import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

type TheButton={
    onClick:React.MouseEventHandler<HTMLButtonElement>
}

export default function ButtonCadastrar({onClick}:TheButton) {

    return (
        <Stack spacing={2} direction="column">
                <Button
                variant="outlined"
                onClick={onClick}
                >
                    Criar Conta
                </Button>
        </Stack>
    );
}
