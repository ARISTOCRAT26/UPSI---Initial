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
import DeleteIcon from "@mui/icons-material/Delete";

function SmallText({ id, value, required, deleteEl, handleVal, handleReq }) {
  return (
    <Fragment>
      <Box sx={{ m: 2 }}>
        <Paper elevation={2} sx={{ p: 2, borderTop: "8px solid black" }}>
          <TextField
            variant="outlined"
            placeholder="Enter your question here"
            defaultValue={value}
            fullWidth
            onChange={(e) => handleVal(id, e)}
          />
          <TextField variant="outlined" fullWidth disabled placeholder={id} />
          <ButtonGroup>
            <IconButton
              onClick={() => {
                console.log("SmallText - Deleting:" + id);
                deleteEl(id);
              }}
              size="large"
            >
              <DeleteIcon />
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

export default SmallText;
