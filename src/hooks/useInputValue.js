import {useState} from "react";

export const useInputValue = initialValue => {
    const [value, setValue] = useState('');
    const onChange = e => {
        const value = !e.target ? e : e.target.value
        setValue(value)
    };
    return { value, onChange }
}