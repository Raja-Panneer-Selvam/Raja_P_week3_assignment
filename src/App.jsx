import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Dashboard from "./Component/Dashboard";
import LogForm from "./Component/LogForm";
import "./App.css";

const App = () => {
  const [activities, setActivities] = useState([]);

  // Load activities from local storage on initial render
  useEffect(() => {
    const savedActivities =
      JSON.parse(localStorage.getItem("activities")) || [];
    setActivities(savedActivities);
  }, []);

  // Save activities to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  // Function to handle new activity submission
  const handleAddActivity = (activity) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  };

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Fitness Challenge Tracker
      </Typography>
      <LogForm onAddActivity={handleAddActivity} />
      <Dashboard activities={activities} />
    </Container>
  );
};

export default App;
