import Button from "@mui/material/Button";

const CustomButton = ({
  label,
  onClick,
  variant = "contained",
  width,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        backgroundColor: variant === "contained" ? "#0d0b0b" : "#ffffff",
        color: variant === "contained" ? "#ffffff" : "#0d0b0b",
        textTransform: "capitalize",
        width: width,
        border: "1px solid #0d0b0b",
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
