import { Button } from "@mui/material";

const CustomButton = ({
  label,
  onClick,
  variant = "contained",
  color,
  ...props
}) => {
  return (
    <Button variant={variant} color={color} onClick={onClick} {...props}>
      {label}
    </Button>
  );
};

export default CustomButton;
