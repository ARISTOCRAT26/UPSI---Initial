import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

function DatePicker({ id, title, finalval, required, handleValue, answer }) {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-CA");

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
      <Box
        sx={{
          width: "50%",
          marginX: 2,
        }}
      >
        <input
          type="date"
          size={"large"}
          defaultValue={formattedDate}
          onChange={(e) => handleValue(id, e)}
        />
      </Box>
    </Box>
  );
}

export default DatePicker;
