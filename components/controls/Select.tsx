import React, {ChangeEventHandler} from 'react';
import {FormControl, InputLabel, MenuItem, Select as MUISelect} from "@material-ui/core";
import {Status} from "../../types/Status";

type InputProps = {
    label: string, name: string, id: string, value: string, options: Status[], handleChange: ChangeEventHandler<HTMLInputElement>
}
const Select = ({label, name, id, value, options, handleChange}: InputProps) => {
    return (
        <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id={id}>{label}</InputLabel>
            <MUISelect
                required
                labelId="demo-simple-select-outlined-label"
                id={id}
                value={value}
                name={name}
                onChange={() => handleChange}
                label={label}
            >
                {options.map((item, i) =>
                    <MenuItem value={item.value} key={i}>
                        <em>{item.label}</em>
                    </MenuItem>
                )}
            </MUISelect>
        </FormControl>
    )
}

export default Select;
