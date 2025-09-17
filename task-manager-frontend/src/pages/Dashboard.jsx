import { useState, useEffect } from "react";
import { Container, TextField, Typography, Select, MenuItem, Pagination } from "@mui/material";
import API from "../api/axios";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTasks = async () => {
    const { data } = await API.get(`/tasks?search=${search}&status=${status}&page=${page}`);
    setTasks(data.tasks);
    setTotalPages(data.pages);
  };

  useEffect(() => { fetchTasks(); }, [search, status, page]);

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h5">My Tasks</Typography>

      <TextField label="Search" fullWidth margin="normal"
        value={search} onChange={(e) => setSearch(e.target.value)} />

      <Select fullWidth value={status} onChange={(e) => setStatus(e.target.value)}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="done">Done</MenuItem>
      </Select>

      <TaskForm onTaskAdded={fetchTasks} />
      <TaskList tasks={tasks} refresh={fetchTasks} />

      <Pagination count={totalPages} page={page} onChange={(e, val) => setPage(val)} sx={{ mt: 2 }} />
    </Container>
  );
}

export default Dashboard;
