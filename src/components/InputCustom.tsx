import React from "react";
import '../sass/_components/inputCustom.scss'

interface Props{
    onChange: React.ChangeEventHandler,
    value?: string,
    placeholder?: string,
    className?: string,
    type? : string,
}

const InputCustom : React.FC<Props> = ({onChange, value, placeholder, className, type = 'text', ...otherProps}) => {
    return(
        <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`inputCustom${className ? ` ${className} ` : ''}`}
        type={type}
        {...otherProps}
        />
    )
}

export default InputCustom;