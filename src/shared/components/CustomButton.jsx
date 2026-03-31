import Button from "@mui/material/Button";

const CustomButton = ({
  label,
  onClick,
  variant = "contained",
  width,
  disabled = false,
  startIcon,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      startIcon={startIcon}
      sx={{
        backgroundColor: variant === "contained" ? "#0d0b0b" : "#ffffff",
        color: variant === "contained" ? "#ffffff" : "#0d0b0b",
        textTransform: "capitalize",
        width: width,
        border: "1px solid #0d0b0b",
        "&:disabled": {
          backgroundColor: variant === "contained" ? "#9e9e9e" : "#e0e0e0",
          color: variant === "contained" ? "#ffffff" : "#9e9e9e",
          borderColor: "#9e9e9e",
        },
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
