import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { updateQuestionInQuestionBank } from "actions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  input: {
    // display: 'none',
  }
}));

const EditQuestion = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [statement, setStatement] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [textOption, setTextOption] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setStatement(props.question.title);
    setOptionList(props.question.options);
    props.question.options.forEach(option => {
      if (option.correct === true) {
        setValue(option.optionText);
      }
    });
  }, [props.question]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setValue("");
  };

  const handleUpdateQuestion = () => {
    let data = {};
    data.id = props.question.id;
    data.title = statement;
    data.options = optionList;

    if (statement === "" || optionList.length === 0 || value === "") {
      alert("please input necessary field.");
    } else {
      dispatch(updateQuestionInQuestionBank(data));
      handleClose();
    }
  };

  const handleChange = (event, index) => {
    setValue(event.target.value);

    optionList.forEach((option, optionIndex) => {
      if (optionIndex === index) {
        option.correct = true;
      } else {
        option.correct = false;
      }
    });
  };

  const deleteOption = index => {
    let newOptionList = optionList.filter((option, innerIndex) => {
      return innerIndex !== index;
    });
    setOptionList(newOptionList);
  };

  const handleKeyDown = event => {
    if (event.key === "Enter") {
      setOptionList([
        ...optionList,
        { optionText: textOption, correct: false }
      ]);
      setTextOption("");
    }
  };

  return (
    <div>
      <Button
        size="small"
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<EditIcon />}
        onClick={handleClickOpen}
      >
        Edit
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Question
        </DialogTitle>

        <DialogContent dividers>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              onChange={event => setStatement(event.target.value)}
              value={statement}
              style={{ marginBottom: 10 }}
              id="question-statement"
              label="Question Statement"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Options:</Typography>
          </div>

          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value}>
              {optionList.map((option, index) => (
                <div key={index}>
                  <FormControlLabel
                    key={index}
                    value={option.optionText}
                    valueIndex={index}
                    control={<Radio />}
                    onChange={event => handleChange(event, index)}
                    label={option.optionText}
                  />

                  <IconButton
                    onClick={() => deleteOption(index)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}
            </RadioGroup>
          </FormControl>

          <div style={{ marginTop: 10 }}>
            <TextField
              onKeyDown={handleKeyDown}
              autoFocus
              fullWidth={true}
              value={textOption}
              onChange={event => setTextOption(event.target.value)}
              style={{ marginBottom: 5 }}
              id="question-option"
              label="Input Option"
              placeholder="Input an option and hit enter"
              variant="outlined"
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button
            autoFocus
            variant="contained"
            onClick={handleUpdateQuestion}
            color="primary"
          >
            Update Question
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(EditQuestion);
