import * as React from 'react';
import {FormControlLabel, Radio, RadioGroup } from '@mui/material';

export default function TaskCheckBox() {
    return (
        <RadioGroup name="use-radio-group" defaultValue="">
            <FormControlLabel value="completo" control={<Radio color="success" />} label="Completo" />
            <FormControlLabel value="incompleto" control={<Radio color="error" />} label="Incompleto" />
        </RadioGroup>
    );
}