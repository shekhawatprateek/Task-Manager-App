import { useState } from "react";
import { TextField, Button } from "@mui/material";
import API from "../api/axios";

function TaskForm({ onTaskAdded }) {
  const [form, setForm] = useState({ title: "", description: "" });

  const handleSubmit = async () => {
    await API.post("/tasks", form);
    setForm({ title: "", description: "" });
    onTaskAdded();
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <TextField label="Title" fullWidth margin="normal"
        value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <TextField label="Description" fullWidth margin="normal"
        value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <Button variant="contained" fullWidth onClick={handleSubmit}>
        Add Task
      </Button>
    </div>
  );
}

export default TaskForm;
