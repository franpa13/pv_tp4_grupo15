
import './Button.css'; 

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  style,
}) => {
  const buttonClasses = `button button-${variant} button-${size} ${className} ${disabled ? 'disabled' : ''
    }`;

  return (
    <button
      type={type}
      className={buttonClasses.trim()}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};