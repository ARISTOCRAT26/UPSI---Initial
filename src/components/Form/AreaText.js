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
import React, { Fragment } from "react";

function AreaText({ id, value, required, deleteEl, handleVal, handleReq }) {
  return (
    <Fragment>
      <Box sx={{ m: 2 }}>
        <Paper elevation={2} sx={{ p: 2, borderTop: "8px soild black" }}>
          <TextField
            variant="outlined"
            placeholder="Enter your question here"
            defaultValue={value}
            fullWidth
            onChange={(e) => handleVal(id, e)}
          />
          <TextField variant="outlined" fullWidth disabled placeholder={id} multiline rows={3} />
          <ButtonGroup>
            <IconButton
              onClick={() => {
                console.log("SmallText - Deleting:" + id);
                deleteEl(id);
              }}
              size="large"
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

export default AreaText;
