import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function MCQ({ id, title, finalval, required, handleValue, answer }) {
  return (
    <Box
      component="form"
      sx={{
        bgcolor: "#C8E5EC",
        paddingY: 3,
        marginX: "auto",
        marginY: 2,
        borderRadius: 1,
        border: 1,
      }}
    >
      <Typography variant="h5" padding={3}>
        <b>{title}</b>
      </Typography>
      <FormGroup
        sx={{
          width: "50%",
          marginX: 2,
        }}
      >
        {answer &&
          answer.length > 0 &&
          answer.map((ans, index) => {
            return (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={ans}
              />
            );
          })}
      </FormGroup>
    </Box>
  );
}

export default MCQ;
