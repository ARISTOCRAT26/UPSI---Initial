import { ButtonGroup, Grid, IconButton } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import Header from "./Header";

import SmallText from "./SmallText";
import ShortTextIcon from "@mui/icons-material/ShortText";
import NotesIcon from "@mui/icons-material/Notes";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import Fab from "@mui/material/Fab";

import { v4 as uuidv4 } from "uuid";
import AreaText from "./AreaText";
import Choices from "./Choices";
import Options from "./Options";
import uuid from "react-uuid";
import DatePick from "./DatePick";
import FileUpload from "./FileUpload";

import sampleData from "./sampleData.json";
import { useLocation } from "react-router-dom";

const locationMethod = (form) => {
  // we recieved location.state as param
  console.log(form)
  if (form !== null) {
    console.log("Form me kuch hai bhai!!");
    const ftitle = form.formTitle;
    return ftitle;
  }
}

function FormMaker() {
  const location = useLocation();
  //console.log(location.state.form);
  //const formData = location.state.form;

  const [formTitle, setFormTitle] = useState();
  const [formDesc, setFormDesc] = useState();
  const [upsiArray, setUpsi] = useState([]);
  //const [formData, setFormData] = useState("text");

  /* useEffect(()=>{
    let effectTitle = locationMethod(location.state.form);
    console.log("Loaded with: " + effectTitle);
    setFormTitle(effectTitle);
  },[]) */

  const locationMount = () => {
    // function to mount data to state if any!

    if (location !== null && location.state.form) {
      console.log("Location me kuch hai bhai!!");
      const locationData = location.state.form;
      setFormTitle(locationData.formTitle);
    }
  };

  const addElement = () => {
    let id = uuidv4();
    console.log("UUID: ", id);
    const newData = {
      id: uuidv4(),
      type: "text",
      value: null,
      answers: null,
      required: false,
    };
    setUpsi((prevState) => [...prevState, newData]);
  };

  const addGenericElement = (eleType) => {
    const newData = {
      id: uuid(),
      type: eleType,
      value: null,
      answers: null,
      required: false,
    };
    setUpsi((prevState) => [...prevState, newData]);
  };

  const handleFormTitle = (e) => {
    // function to handle formTitle change

    setFormTitle(e.target.value);
  };

  const handleFormDesc = (e) => {
    //function to handle formDesc change
    setFormDesc(e.target.value);
  };

  const deleteElement = (id) => {
    console.log("Delete clicked:" + id);
    setUpsi((prevState) => prevState.filter((element) => element.id !== id));
  };

  const logElements = () => {
    const prevList = [...upsiArray];
    prevList.forEach((element) => {
      console.log(
        element.id +
        "of type--" +
        element.type +
        "and values" +
        element.value +
        "is required? " +
        element.required
      );
      if (element.answers && element.answers.length > 0) {
        element.answers.forEach((eee) => {
          console.log("AnswerID" + eee.id + "AnswerVal" + eee.value);
        });
      }
    });
  };

  const exportElements = () => {
    console.log("Form Title: " + formTitle + "Form Desc: " + formDesc);
    const exportArray = [];
    const prevList = [...upsiArray];

    prevList.forEach((element) => {
      let newEle = {
        id: element.id,
        type: element.type,
        value: element.value,
        required: element.required,
        answers: null,
      };

      if (element.answers && element.answers.length > 0) {
        let answersArray = [];
        element.answers.forEach((eee) => {
          let newAns = {
            id: eee.id,
            value: eee.value,
          };
          answersArray.push(newAns);
        });
        newEle.answers = answersArray;
      }
      exportArray.push(newEle);
    });

    console.log(exportArray);
  };

  const showChoices = (id) => {
    const prevState = [...upsiArray];
    prevState.forEach((element) => {
      if (element.id === id) {
        console.log(element.answers);
      }
    });
  };

  const handleValue = (id, e) => {
    const prevState = [...upsiArray];
    prevState.forEach((element) => {
      if (element.id === id) {
        element.value = e.target.value;
      }
    });
    setUpsi(prevState);
  };

  const handleReq = (id, e) => {
    const prevState = [...upsiArray];
    prevState.forEach((element) => {
      if (element.id === id) {
        element.required = !element.required;
      }
    });
    setUpsi(prevState);
  };

  const addChoice = (id, newChoice) => {
    let newArr = upsiArray.map((el) => {
      if (el.id === id) {
        const objVal = "answers" in el ? el?.answers : [];
        return { ...el, answers: [...objVal, newChoice] };
      } else {
        return el;
      }
    });

    setUpsi(newArr);
  };

  const addAnswer = (id, newAnswer) => {
    let newArr = upsiArray.map((ele) => {
      if (ele.id === id) {
        if (ele.answers && ele.answers.length > 0) {
          // if old answers exist, then append to end
          const oldAnswers = ele.answers;
          return { ...ele, answers: [...oldAnswers, newAnswer] };
        } else {
          // if no answer exist, add new answer
          return { ...ele, answers: [newAnswer] };
        }
      } else {
        // element is not choice or options
        return ele;
      }
    });
    setUpsi(newArr);
  };

  const handleAnswer = (id, answerid, answerval) => {
    const prevState = [...upsiArray];
    prevState.forEach((element) => {
      //iterate over all element
      if (element.id === id) {
        if (element.answers && element.answers.length > 0) {
          // if answer array exists
          element.answers.forEach((ans) => {
            //iterating over answer array
            if (ans.id === answerid) {
              // if answer id matches then change val
              ans.value = answerval;
            }
          });
        }
      }
    });
    setUpsi(prevState);
    /* console.log("Handle Answer" + answerval);
    let newArr = upsiArray.map((element) => {
      if (element.id === id) {
        element?.answers &&
          element?.answers.map((ans) => {
            if (ans.id === answerid) {
              ans.value = answerval;
            }
            return element;
          });
        return element;
      } else {
        return element;
      }
    });

    setUpsi(newArr); */
  };

  const deleteAnswer = (id, answerid) => {
    const prevState = [...upsiArray];
    prevState.forEach((element) => {
      // iterate over all elements
      if (element.id === id) {
        // if element matches
        if (element.answers && element.answers.length > 0) {
          // if answer array is present
          let prevAns = element.answers.filter((ans) => ans.id !== answerid); // create new array to filter and remove answer by ID
          element.answers = prevAns; // replace old array by new array
        }
      }
    });
    setUpsi(prevState);

    /* let newArr = upsiArray.map((element) => {
      if (element.id === id) {
        let newAnswers =
          element?.answers &&
          element?.answers.filter((ans) => ans.id !== answerid);
          console.log("newAnsers:" + newAnswers);
          console.log({newAnswers})
        return { ...element, answers: newAnswers };
      } else {
        return element;
      }
    });

    setUpsi(newArr); */
  };

  return (
    <Fragment>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        sx={{ m: 8, p: 1 }}
      >
        <Grid item xs={6} md={8} lg={8} xl={10} overflow="auto">
          <Header
            title={formTitle}
            description={formDesc}
            handleTitle={handleFormTitle}
            handleDesc={handleFormDesc}
          />
          {/* {upsiArray.map((upsiEle, index) => (
            <SmallText
              key={index}
              id={upsiEle.id}
              required={upsiEle.required}
              deleteEl={deleteElement}
              handleVal={handleValue}
              handleReq={handleReq}
            />
          ))} */}

          {upsiArray.map((upsiEle, index) => {
            console.log("At index:" + index + ", we have:" + upsiEle.type);
            switch (upsiEle.type) {
              case "text":
                console.log("Trying:" + upsiEle.type);
                return (
                  <SmallText
                    key={index}
                    id={upsiEle.id}
                    value={upsiEle.value}
                    required={upsiEle.required}
                    deleteEl={deleteElement}
                    handleVal={handleValue}
                    handleReq={handleReq}
                  />
                );
              case "area":
                console.log("Trying:" + upsiEle.type);
                return (
                  <AreaText
                    key={index}
                    id={upsiEle.id}
                    value={upsiEle.value}
                    required={upsiEle.required}
                    deleteEl={deleteElement}
                    handleVal={handleValue}
                    handleReq={handleReq}
                  />
                );
              case "choices":
                console.log("Trying:" + upsiEle.type);
                return (
                  <Choices
                    key={index}
                    id={upsiEle.id}
                    value={upsiEle.value}
                    required={upsiEle.required}
                    answers={upsiEle.answers}
                    deleteEl={deleteElement}
                    handleVal={handleValue}
                    handleReq={handleReq}
                    addChoice={addAnswer}
                    handleChoice={handleAnswer}
                    delChoice={deleteAnswer}
                    showChoices={showChoices}
                  />
                );
              case "options":
                console.log("Trying:" + upsiEle.type);
                return (
                  <Options
                    key={index}
                    id={upsiEle.id}
                    value={upsiEle.value}
                    required={upsiEle.required}
                    answers={upsiEle.answers}
                    deleteEl={deleteElement}
                    handleVal={handleValue}
                    handleReq={handleReq}
                    addOption={addAnswer}
                    handleOption={handleAnswer}
                    delOption={deleteAnswer}
                    showOption={showChoices}
                  />
                );
              case "datepick":
                console.log("Trying:" + upsiEle.type);
                return (
                  <DatePick
                    key={index}
                    id={upsiEle.id}
                    value={upsiEle.value}
                    required={upsiEle.required}
                    answers={upsiEle.answers}
                    deleteEl={deleteElement}
                    handleVal={handleValue}
                    handleReq={handleReq}
                  />
                );
              case "fileupload":
                console.log("Trying:" + upsiEle.type);
                return (
                  <FileUpload
                    key={index}
                    id={upsiEle.id}
                    value={upsiEle.value}
                    required={upsiEle.required}
                    answers={upsiEle.answers}
                    deleteEl={deleteElement}
                    handleVal={handleValue}
                    handleReq={handleReq}
                  />
                );
              default:
                return <Fragment></Fragment>;
            }
          })}
        </Grid>
        <Grid
          item
          xs={1}
          md={2}
          lg={2}
          xl={2}
          borderRadius={10}
          flexDirection="column"
          position="sticky"
        >
          <Grid>
            <ButtonGroup orientation="vertical">
              <IconButton
                size="small"
                onClick={() => addGenericElement("text")}
              >
                <ShortTextIcon />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => addGenericElement("area")}
              >
                <NotesIcon />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => addGenericElement("choices")}
              >
                <CheckBoxIcon />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => addGenericElement("options")}
              >
                <RadioButtonCheckedIcon />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => addGenericElement("datepick")}
              >
                <CalendarMonthIcon />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => addGenericElement("fileupload")}
              >
                <FileUploadIcon />
              </IconButton>
              <IconButton size="small" onClick={exportElements}>
                <ContentPasteGoIcon />
              </IconButton>
            </ButtonGroup>
          </Grid>
          {/* <Grid>
            <IconButton size="large" sx={{ p: 1 }} onClick={addElement}>
              <AddCircleIcon />
            </IconButton>
          </Grid>
          <Grid>
            <IconButton size="large" sx={{ p: 1 }} onClick={logElements}>
              <ExpandMoreIcon />
            </IconButton>
          </Grid> */}
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default FormMaker;
