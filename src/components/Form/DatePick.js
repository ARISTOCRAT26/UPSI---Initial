import { Delete } from "@mui/icons-material";
import {
  Box,
  ButtonGroup,
  FormControlLabel,
  IconButton,
  Paper,
  Switch,
  TextField,
} from "@mui/material";
import React, { Fragment, useState } from "react";

import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DatePick({ id, value, required, deleteEl, handleVal, handleReq }) {
  const [val, setVal] = useState();
  return (
    <Fragment>
      <Box sx={{ m: 2 }}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <TextField
            variant="outlined"
            placeholder="Enter your question here"
            defaultValue={value}
            fullWidth
            onChange={(e) => handleVal(id, e)}
          />
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                readOnly
                inputFormat="DD/MM/YYYY"
                value={val}
                renderInput={(params) => <TextField {...params} />}
                onChange={(newValue) => {
                  setVal(newValue);
                }}
              />
            </LocalizationProvider>
          </Box>

          <ButtonGroup>
            <IconButton
              onClick={() => {
                console.log("Deleting Date: " + id);
                deleteEl(id);
              }}
            >
              <Delete />
            </IconButton>
            <FormControlLabel
              control={
                <Switch checked={required} onChange={() => handleReq(id)} />
              }
              label="Required"
            />
          </ButtonGroup>
        </Paper>
      </Box>
    </Fragment>
  );
}

export default DatePick;
