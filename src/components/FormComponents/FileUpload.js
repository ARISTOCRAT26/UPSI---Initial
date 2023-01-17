import React, {useState} from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from 'axios';

function FileUpload({title }) {
  const [file, setFile] = useState()

  function handleChange(event) {
    setFile(event.target.files[0])
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const url = 'http://localhost:3000/uploadFile';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('fileName', file.name);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });

  }
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
      <Button
        type="submit"
        size="small"
        variant="contained"
        component="label"
        sx={{
          width: "35%",
          marginX: 2,
        }}
        onSubmit={handleSubmit}
      >
      <input type="file" onChange={handleChange}/>
        Upload File
        <input type="file" hidden />
      </Button>
    </Box>
  );
}

export default FileUpload;
