import React, { useState } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function DropDown({ id, title, finalval, required, handleValue, answer }) {
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
      <FormControl
        sx={{
          width: "50%",
          marginX: 2,
        }}
      >
        <Select
          defaultValue={"default"}
          onChange={(e) => {
            handleValue(id, e);
          }}
        >
          <MenuItem value={"default"}>Select one of the values</MenuItem>
          {answer.map((ans, index) => {
            return (
              <MenuItem key={index} value={ans}>
                {ans}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropDown;
