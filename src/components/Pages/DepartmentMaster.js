import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

function DepartmentMaster() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        md={8}
        sx={{
          m: 3,
          p: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: 300,
            height: 300,
            p: 3,
            m: 3,
          }}
        >
          <Typography> Welcome to DepartmentMaster</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default DepartmentMaster;
