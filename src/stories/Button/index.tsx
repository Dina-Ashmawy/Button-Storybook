import { StyleButton } from './button.styled';
import { ButtonProps } from './button.props';

export const Button = ({
  size = 'medium',
  backgroundColor,
  label,
  primary,
  onClick
}: ButtonProps) => {

  return (
    <StyleButton
      size={size}
      type="button"
      style={{ backgroundColor }}
      primary={primary}
      onClick={onClick}
    >
      {label}
    </StyleButton>
  );
};
