import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

function Options({ id, title, finalval, required, handleValue, answer }) {
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
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        sx={{
          width: "50%",
          marginX: 2,
        }}
        onChange={(e) => handleValue(id, e)}
      >
        {answer &&
          answer.length > 0 &&
          answer.map((ans, index) => {
            return (
              <FormControlLabel
                key={index}
                value={ans}
                control={<Radio />}
                label={ans}
              />
            );
          })}
      </RadioGroup>
    </Box>
  );
}

export default Options;
