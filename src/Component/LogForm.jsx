import React, { useState } from "react";
import { TextField, Button, Paper, Stack } from "@mui/material";
import "./LogForm.css";

const LogForm = ({ onAddActivity }) => {
  const [formData, setFormData] = useState({
    date: "",
    steps: "",
    calories: "",
    workoutTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddActivity(formData);
    setFormData({ date: "", steps: "", calories: "", workoutTime: "" });
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            label="Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
            required
          />
          <TextField
            label="Steps Taken"
            type="number"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Calories Burned"
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Workout Time (mins)"
            type="number"
            name="workoutTime"
            value={formData.workoutTime}
            onChange={handleChange}
            fullWidth
            required
          />
          <Button variant="contained" color="primary" type="submit">
            Log Activity
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default LogForm;
