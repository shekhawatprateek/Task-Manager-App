import { useState } from "react";
import { Container, TextField, Button, Typography, Link } from "@mui/material";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const { data } = await API.post("/auth/login", form);
      onLogin(data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h5">Login</Typography>
      
      <TextField
        fullWidth margin="normal"
        label="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <TextField
        fullWidth margin="normal"
        label="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      
      <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
        Login
      </Button>

      {/* 👇 Add Register Link here */}
      <Typography sx={{ mt: 2 }}>
        Don’t have an account?{" "}
        <Link component="button" variant="body2" onClick={() => navigate("/register")}>
          Register
        </Link>
      </Typography>
    </Container>
  );
}

export default Login;
