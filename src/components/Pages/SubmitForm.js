import React, { Fragment, useState } from "react";
import {
  Breadcrumbs,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import data from "../../data.json";
import ShortAnswer from "../FormComponents/ShortAnswer";
import BigPara from "../FormComponents/BigPara";
import Options from "../FormComponents/Options";
import MCQ from "../FormComponents/MCQ";
import DropDown from "../FormComponents/DropDown";
import DatePicker from "../FormComponents/DatePicker";
import FileUpload from "../FormComponents/FileUpload";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SubmitForm() {
  const location = useLocation();
  const clickData = location.state.form;
  const [formInfo, setFormInfo] = useState(clickData);
  const [renderForm, setRenderForm] = useState(clickData.formData);

  const handleValue = (id, e) => {
    //console.log("Edited" + e.target.value);
    const prevState = [...renderForm];
    prevState.forEach((element) => {
      //console.log("id is" + element.id);
      if (element.id === id) {
        element.finalval = e.target.value;
      }
    });
    setRenderForm(prevState);
  };

  const exportValues = () => {
    console.log("In export values");
    const prevState = [...renderForm];
    let exportArray = [];
    prevState.forEach((element) => {
      let newEle = {
        id: element.id,
        finalAnswer: element.finalval,
      };
      exportArray.push(newEle);
    });
    console.log(exportArray);
  };

  return (
    <Box overflow={"auto"} sx={{ marginTop: 2 }}>
      <Breadcrumbs sx={{ marginTop: 2 }}>
        <Link to={"/home"}>Home</Link>
        <Link to="/home/submissions">Submissions</Link>
        <Typography>FormID: {formInfo.id}</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} sx={{ m: 3, p: 3 }} maxHeight={"70vh"}>
        <Box sx={{ bgcolor: "#C8E5EC" }}>
          <Typography variant="h3" align="center">
            {formInfo.formTitle}
          </Typography>
          <Typography variant="h6" align="center">
            {formInfo.formInformation}
          </Typography>
          <Fragment>
            {renderForm.map((formElement, index) => {
              switch (formElement.type) {
                case "shortAnswer":
                  return (
                    <ShortAnswer
                      key={index}
                      id={formElement.id}
                      title={formElement.title}
                      finalval={formElement.finalval}
                      required={formElement.required}
                      handleValue={handleValue}
                    />
                  );
                case "descriptiveAnswer":
                  return (
                    <BigPara
                      key={index}
                      id={formElement.id}
                      title={formElement.title}
                      finalval={formElement.finalval}
                      required={formElement.required}
                      handleValue={handleValue}
                    />
                  );
                case "options":
                  return (
                    <Options
                      key={index}
                      id={formElement.id}
                      title={formElement.title}
                      finalval={formElement.finalval}
                      required={formElement.required}
                      answer={formElement.answer}
                      handleValue={handleValue}
                    />
                  );
                case "multipleChoice":
                  return (
                    <MCQ
                      key={index}
                      id={formElement.id}
                      title={formElement.title}
                      finalval={formElement.finalval}
                      required={formElement.required}
                      answer={formElement.answer}
                      handleValue={handleValue}
                    />
                  );
                case "selectCase":
                  return (
                    <DropDown
                      key={index}
                      id={formElement.id}
                      title={formElement.title}
                      finalval={formElement.finalval}
                      required={formElement.required}
                      answer={formElement.answer}
                      handleValue={handleValue}
                    />
                  );
                case "datePicker":
                  return (
                    <DatePicker
                      key={index}
                      id={formElement.id}
                      title={formElement.title}
                      finalval={formElement.finalval}
                      required={formElement.required}
                      handleValue={handleValue}
                    />
                  );
                case "fileUpload":
                  return (
                    <FileUpload
                      key={index}
                      id={formElement.id}
                      title={formElement.title}
                      finalval={formElement.finalval}
                      required={formElement.required}
                      handleValue={handleValue}
                    />
                  );
                default:
                  return <div>Sup</div>;
              }
            })}
          </Fragment>
          <Stack alignItems={"center"}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              sx={{ width: "50%" }}
              onClick={() => exportValues()}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
}

export default SubmitForm;
