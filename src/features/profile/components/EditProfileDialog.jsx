import { useState, useEffect, useContext } from "react";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import CustomButton from "../../../shared/components/CustomButton";
import { AuthContext } from "../../../features/auth/context/AuthContext.jsx";
import { useUpdateProfile } from "../hooks/useUpdateProfile";
import { SnackbarContext } from "../../../shared/context/SnackbarContext.jsx";

const EditProfileDialog = ({ open, onClose }) => {
  const { user, setAuth } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: "",
    userPhoto: null,
    avatarPreview: "",
  });
  const { mutate: updateProfile, isPending } = useUpdateProfile();
  const showSnackbar = useContext(SnackbarContext);

  useEffect(() => {
    if (open) {
      setFormData({
        fullName: user?.fullName || "",
        userPhoto: null,
        avatarPreview:
          user?.userPhoto ||
          "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg",
      });
    }
  }, [open, user]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        userPhoto: file,
        avatarPreview: URL.createObjectURL(file),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    if (formData.userPhoto) {
      formDataToSend.append("userPhoto", formData.userPhoto);
    }

    updateProfile(formDataToSend, {
      onSuccess: (data) => {
        if (setAuth) {
          setAuth((prevAuth) => ({
            ...prevAuth,
            user: data.data,
          }));
          localStorage.setItem("user", JSON.stringify(data.data));
        }
        const message = data?.message;
        showSnackbar(message, "success");
        onClose();
      },
      onError: (error) => {
        const message =
          error?.response?.data?.message || "Failed to update profile";
        showSnackbar(message, "error");
        console.error(error);
      },
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ pb: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Edit Profile</span>
          <IconButton onClick={onClose} sx={{ color: "grey.500" }}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ pt: 1, pb: 2 }}>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Avatar
              src={formData.avatarPreview}
              sx={{
                width: { xs: 60, sm: 120 },
                height: { xs: 60, sm: 120 },
                mx: "auto",
                mb: 2,
                border: "3px dashed",
                borderColor: "grey.300",
              }}
            />
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="avatar-upload"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="avatar-upload">
              <CustomButton
                component="span"
                variant="outlined"
                size="small"
                label="Change Photo"
              />
            </label>
          </Box>

          <TextField
            fullWidth
            label="Full Name"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            variant="outlined"
            sx={{ mb: 2 }}
            required
          />
        </DialogContent>

        <DialogActions sx={{ px: 1.5, pb: 3, pt: 0, justifyContent: "center" }}>
          <CustomButton
            label="Cancel"
            variant="outlined"
            onClick={onClose}
            disabled={isPending}
          />
          <CustomButton
            type="submit"
            label="Save Changes"
            disabled={!formData.fullName.trim() || isPending}
          />
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditProfileDialog;
