import { List, ListItem, ListItemText, Button } from "@mui/material";
import API from "../api/axios";

function TaskList({ tasks, refresh }) {
  const toggleStatus = async (task) => {
    await API.put(`/tasks/${task._id}`, { status: task.status === "pending" ? "done" : "pending" });
    refresh();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    refresh();
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task._id} divider>
          <ListItemText
            primary={task.title}
            secondary={`${task.description} | Status: ${task.status}`}
          />
          <Button onClick={() => toggleStatus(task)} sx={{ mr: 1 }}>
            {task.status === "pending" ? "Mark Done" : "Mark Pending"}
          </Button>
          <Button color="error" onClick={() => deleteTask(task._id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;
