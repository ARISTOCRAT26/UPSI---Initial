import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function BigPara({ id, title, finalval, required, handleValue }) {
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

      <TextField
        multiline
        defaultValue={finalval}
        variant="standard"
        onChange={(e) => {
          handleValue(id, e);
        }}
        sx={{
          width: "75%",
          marginX: 2,
        }}
      />
    </Box>
  );
}

export default BigPara;
