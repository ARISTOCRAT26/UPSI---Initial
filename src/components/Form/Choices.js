import {
  Clear,
  Delete,
  Output,
} from "@mui/icons-material";
import {
  Box,
  TextField,
  Paper,
  ButtonGroup,
  IconButton,
  FormControlLabel,
  Switch,
  Button,
  Checkbox,
} from "@mui/material";
import React, { Fragment } from "react";
import uuid from "react-uuid";

function Choices({
  id,
  value,
  required,
  deleteEl,
  handleVal,
  handleReq,
  answers,
  addChoice,
  delChoice,
  handleChoice,
  showChoices,
}) {
  const createNewChoice = (id) => {
    const choiceData = {
      id: uuid(),
      value: "",
    };
    addChoice(id, choiceData);
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
            answers.map((choice, key) => (
              <Box sx={{ display: "flex" }} key={key}>
                <Checkbox disabled />
                <TextField
                  variant="standard"
                  sx={{ m: 1 }}
                  fullWidth
                  key={choice.id}
                  id={choice.id}
                  placeholder={choice.value}
                  defaultValue={choice?.value}
                  onBlur={(e) => handleChoice(id, choice?.id, e.target.value)}
                />
                <IconButton onClick={() => delChoice(id, choice.id)}>
                  <Clear />
                </IconButton>
              </Box>
            ))}
          <Box>
            <Button variant="text" onClick={() => createNewChoice(id)}>
              Add choice
            </Button>
          </Box>

          <ButtonGroup>
            <IconButton
              onClick={() => {
                console.log("Deleting Entire Choice Question:" + id);
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
            <IconButton onClick={() => showChoices(id)}>
              <Output />
            </IconButton>
          </ButtonGroup>
        </Paper>
      </Box>
    </Fragment>
  );
}

export default Choices;
