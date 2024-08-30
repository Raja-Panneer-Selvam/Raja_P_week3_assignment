import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import "./Dashboard.css";

const Dashboard = ({ activities }) => {
  return (
    <Grid container spacing={2} marginTop={3}>
      {activities.length > 0 ? (
        activities.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{activity.date}</Typography>
                <Typography>Steps: {activity.steps}</Typography>
                <Typography>Calories: {activity.calories}</Typography>
                <Typography>
                  Workout Time: {activity.workoutTime} mins
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="body1" color="textSecondary">
          No activities logged yet.
        </Typography>
      )}
    </Grid>
  );
};

export default Dashboard;
