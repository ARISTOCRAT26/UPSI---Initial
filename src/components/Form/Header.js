import { Box, Stack, Paper, TextField } from "@mui/material";
import React, { Fragment } from "react";
import Button from "@mui/material/Button";

function Header({ title, handleTitle, description, handleDesc }) {
  return (
    <Fragment>
      <Box>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            p: 1,
            m: 1,
          }}
        >
          <Button sx={{ textTransform: 'none' }} variant="contained" color="secondary"><b>
            Save</b>
          </Button>
          <Button sx={{ marginLeft: 2, textTransform: 'none' }} variant="contained" color="secondary"><b>
            Preview</b>
          </Button>
          <Button sx={{ marginLeft: 2, textTransform: 'none' }} variant="contained" color="secondary"><b>
            Publish</b>
          </Button>
        </Stack>
      </Box>

      <Box sx={{ m: 2 }}>
        <Paper elevation={2} sx={{ p: 2, borderTop: "8px solid black" }}>
          <TextField
            defaultValue={title}
            placeholder={"Untitled Form 1"}
            variant="standard"
            name="Title"
            fullWidth
            sx={{ marginTop: 2 }}
            onChange={(e) => handleTitle(e)}
          />
          <TextField
            defaultValue={description}
            placeholder={"Form Description"}
            variant="standard"
            name="description"
            fullWidth
            onChange={(e) => handleDesc(e)}
            sx={{ marginY: 2 }}
          />
        </Paper>
      </Box>
    </Fragment>
  );
}

export default Header;
