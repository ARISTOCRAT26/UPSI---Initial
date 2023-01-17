import { Delete, Upload } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  FormControlLabel,
  IconButton,
  Paper,
  Switch,
  TextField,
} from "@mui/material";
import React, { Fragment } from "react";

function FileUpload({ id, value, required, deleteEl, handleVal, handleReq }) {
  return (
    <Fragment>
      <Box sx={{ m: 2 }}>
        <Paper elevation={2} sx={{ p: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Enter your question here"
            defaultValue={value}
            onChange={(e) => handleVal(id, e)}
          />
          <Box sx={{paddingY:1}}>
            <Button variant="contained" startIcon={<Upload />}>
              Upload
            </Button>
          </Box>

          <ButtonGroup>
            <IconButton 
              onClick={() => {
                console.log("Deleting FileUpload: " + id);
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

export default FileUpload;
