import Button from "@mui/material/Button";

const CustomButton = ({ label, onClick, variant = "contained", ...props }) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        backgroundColor: variant === "contained" ? "#0d0b0b" : "#ffffff",
        color: variant === "contained" ? "#ffffff" : "#0d0b0b",
        textTransform: "capitalize",
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
