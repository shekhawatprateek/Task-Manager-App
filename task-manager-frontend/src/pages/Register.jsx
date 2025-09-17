import { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5">Register</Typography>
      <TextField fullWidth margin="normal" label="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <TextField fullWidth margin="normal" label="Password" type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
        Register
      </Button>
    </Container>
  );
}

export default Register;
