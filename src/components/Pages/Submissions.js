import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Submissions() {
  let navigate = useNavigate();
  const [availableForms, setAvailableForms] = useState([]);

  const loadData = async () => {
    await axios
      .get("http://localhost:16000/forms/published")
      .then((response) => setAvailableForms(response.data))
      .catch((error) => setAvailableForms());
  };

  const handleFormClick = (form) => {
    console.log("Handle click called:" + form.id);
    navigate("/home/submissions/form-submit", {
      state: {
        form: form,
      },
    });
  };

  useEffect(() => {
    console.log("UseEffect is called");
    loadData();
  }, []);

  return (
    <Fragment>
      <Grid
        container
        spacing={1}
        justifyContent={"flex-start"}
        sx={{ m: 1, p: 1, flexGrow: 1 }}
      >
        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Paper elevation={3} sx={{ m: 2, p: 2 }} overflow="auto">
            <Typography variant="h5">Available Forms</Typography>
            <Stack direction={"row"} overflow="auto">
              <Card
                sx={{
                  minWidth: 250,
                  maxWidth: 300,
                  m: 1,
                  p: 1,
                  bgcolor: "#aff0ee",
                }}
              >
                <CardContent sx={{ border: "rounded" }}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    UPSI Declaration
                  </Typography>
                  <Typography variant="subtitle2">
                    Fill up declaration form for all cases as per Regulation 3
                    of SEBI(PIT)
                  </Typography>
                  <Typography variant="caption">
                    Created on : 15th September 2022
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Open</Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  minWidth: 250,
                  maxWidth: 300,
                  m: 1,
                  p: 1,
                  bgcolor: "#aff0ee",
                }}
              >
                <CardContent sx={{ border: "rounded" }}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    UPSI Declaration
                  </Typography>
                  <Typography variant="subtitle2">
                    Fill up declaration form for all cases as per Regulation 3
                    of SEBI(PIT)
                  </Typography>
                  <Typography variant="caption">
                    Created on : 15th September 2022
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Open</Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  minWidth: 250,
                  maxWidth: 300,
                  m: 1,
                  p: 1,
                  bgcolor: "#aff0ee",
                }}
              >
                <CardContent sx={{ border: "rounded" }}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    UPSI Declaration
                  </Typography>
                  <Typography variant="subtitle2">
                    Fill up declaration form for all cases as per Regulation 3
                    of SEBI(PIT)
                  </Typography>
                  <Typography variant="caption">
                    Created on : 15th September 2022
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Open</Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  minWidth: 250,
                  maxWidth: 300,
                  m: 1,
                  p: 1,
                  bgcolor: "#aff0ee",
                }}
              >
                <CardContent sx={{ border: "rounded" }}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    UPSI Declaration
                  </Typography>
                  <Typography variant="subtitle2">
                    Fill up declaration form for all cases as per Regulation 3
                    of SEBI(PIT)
                  </Typography>
                  <Typography variant="caption">
                    Created on : 15th September 2022
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Open</Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  minWidth: 250,
                  maxWidth: 300,
                  m: 1,
                  p: 1,
                  bgcolor: "#aff0ee",
                }}
              >
                <CardContent sx={{ border: "rounded" }}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    UPSI Declaration
                  </Typography>
                  <Typography variant="subtitle2">
                    Fill up declaration form for all cases as per Regulation 3
                    of SEBI(PIT)
                  </Typography>
                  <Typography variant="caption">
                    Created on : 15th September 2022
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Open</Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  minWidth: 250,
                  maxWidth: 300,
                  m: 1,
                  p: 1,
                  bgcolor: "#aff0ee",
                }}
              >
                <CardContent sx={{ border: "rounded" }}>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    UPSI Declaration
                  </Typography>
                  <Typography variant="subtitle2">
                    Fill up declaration form for all cases as per Regulation 3
                    of SEBI(PIT)
                  </Typography>
                  <Typography variant="caption">
                    Created on : 15th September 2022
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Open</Button>
                </CardActions>
              </Card>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
          <Paper elevation={3} sx={{ m: 2, p: 2 }} overflow="auto">
            <Typography variant="h5">Available Forms via API</Typography>
            <Stack direction={"row"} overflow="auto">
              {availableForms.map((form, index) => {
                return (
                  /*Mapping stuff from an API*/
                  <Card
                    key={index}
                    sx={{
                      minWidth: 250,
                      maxWidth: 300,
                      m: 1,
                      p: 1,
                      bgcolor: "#aff0ee",
                    }}
                  >
                    <CardContent sx={{ border: "rounded" }}>
                      <Typography variant="h6" sx={{ textAlign: "center" }}>
                        {form.formTitle}
                      </Typography>
                      <Typography variant="subtitle2">
                        {form.formInformation}
                      </Typography>
                      <Typography variant="caption">
                        Created on : {form.formPublishDate}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        onClick={() => handleFormClick(form)}
                      >
                        Open
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={10} lg={10} xl={10} overflow="auto">
          <Paper elevation={3} sx={{ m: 2 }}>
            <Box sx={{ p: 2 }}>
              <Typography variant="h5">Previous Submissions</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Form Number</TableCell>
                    <TableCell>Form Title</TableCell>
                    <TableCell>Submit Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>rmp1-r3d2-njjg</TableCell>
                    <TableCell>UPSI Main</TableCell>
                    <TableCell>02-Sept-2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>1aaa-2c21-ggh3</TableCell>
                    <TableCell>UPSI secondary</TableCell>
                    <TableCell>01-Sept-2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>df15-65sq-65ew</TableCell>
                    <TableCell>NDA</TableCell>
                    <TableCell>01-Sept-2022</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>1aaa-2c21-ggh3</TableCell>
                    <TableCell>Others</TableCell>
                    <TableCell>01-Sept-2022</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default Submissions;
