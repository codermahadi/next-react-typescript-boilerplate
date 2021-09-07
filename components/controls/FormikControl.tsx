import React from "react";
import Input from "./Input";
import Select from "./Select";

function FormikControl(props: any) {
    const {control, ...rest} = props;

    switch (control) {
        case 'input':
            return <Input {...rest}/>;

        case 'select':
            return <Select {...rest}/>;
        default:
            return null
    }
}

export default FormikControl;
