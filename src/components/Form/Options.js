import { Clear, Delete, Output } from "@mui/icons-material";
import {
  Box,
  TextField,
  Paper,
  ButtonGroup,
  IconButton,
  FormControlLabel,
  Switch,
  Button,
  Radio,
} from "@mui/material";
import React, { Fragment } from "react";
import uuid from "react-uuid";

function Options({
  id,
  value,
  required,
  deleteEl,
  handleVal,
  handleReq,
  answers,
  addOption,
  delOption,
  handleOption,
  showOption,
}) {
  const createNewOption = (id) => {
    const optionData = {
      id: uuid(),
      value: "",
    };
    addOption(id, optionData);
  };
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
          {answers &&
            answers.length > 0 &&
            answers.map((option, key) => (
              <Box sx={{ display: "flex" }} key={key}>
                <Radio disabled />
                <TextField
                  variant="standard"
                  sx={{ m: 1 }}
                  fullWidth
                  key={option.id}
                  id={option.id}
                  placeholder={option.value}
                  defaultValue={option?.value}
                  onBlur={(e) => handleOption(id, option?.id, e.target.value)}
                />
                <IconButton onClick={() => delOption(id, option.id)}>
                  <Clear />
                </IconButton>
              </Box>
            ))}
          <Box>
            <Button variant="text" onClick={() => createNewOption(id)}>
              Add Option
            </Button>
          </Box>

          <ButtonGroup>
            <IconButton
              onClick={() => {
                console.log("Deleting Entire Option:" + id);
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
            <IconButton onClick={() => showOption(id)}>
              <Output />
            </IconButton>
          </ButtonGroup>
        </Paper>
      </Box>
    </Fragment>
  );
}

export default Options;
