import React, {ChangeEventHandler} from 'react';
import {TextField} from "@material-ui/core";

type InputProps = {
    label: string, name: string, id: string, value: string, type: string, handleChange: ChangeEventHandler<HTMLInputElement>
}

function Input({label, name, id, value, type, handleChange}: InputProps) {
    return (
        <TextField
            variant="outlined"
            margin="normal"
            type={type}
            required
            fullWidth
            id={id}
            label={label}
            name={name}
            value={value}
            onChange={handleChange}/>
    )
}

export default Input;
