import React from "react";

interface Props{
    onChange: React.ChangeEventHandler,
    onClick: React.MouseEventHandler,
    value?: string,
    placeholder?: string,
    className?: string,
    type? : string,
}

const InputCustom : React.FC<Props> = ({onChange, onClick, value, placeholder, className, type = 'text', ...otherProps}) => {
    return(
        <input
        onChange={onChange}
        onClick={onClick}
        value={value}
        placeholder={placeholder}
        className={className}
        type={type}
        {...otherProps}
        />
    )
}

export default InputCustom;