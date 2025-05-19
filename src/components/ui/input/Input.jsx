import "./input.css";

export const Input = ({
    label,
    type = "text",
    name,
    placeholder,
    value,
    onChange,
    required = false,
    disabled = false,
    ...rest
}) => {
    return (
        <div className="input-wrapper">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                {...rest}
            />
        </div>
    );
};
