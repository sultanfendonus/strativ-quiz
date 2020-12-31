import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { addNewQuestionToQuestionBank } from "../../../../actions";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  container: {
    marginTop: theme.spacing(3)
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    // display: 'none',
  }
}));

const AddNewQuestion = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [statement, setStatement] = React.useState("");
  const [optionList, setOptionList] = React.useState([]);
  const [textOption, setTextOption] = React.useState("");
  const [answer, setAnswer] = React.useState(null);
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();

  const clearState = () => {
    setStatement("");
    setOptionList([]);
    setTextOption("");
    setValue("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    clearState();
  };

  const handleSubmitQuestion = () => {
    let data = {};
    data.title = statement;

    const options = optionList.map((option, index) => {
      if (index + 1 === answer) {
        option.correct = true;
      }
      return option;
    });

    data.options = options;

    if (statement === "" || optionList.length === 0 || value === "") {
      if (statement && optionList.length > 0 && value === "") {
        alert("Please choose an option before save question.");
      } else {
        alert("please input Question statement and some options.");
      }
    } else {
      console.log(data);
      dispatch(addNewQuestionToQuestionBank(data));
      setOpen(false);
      clearState();
    }
  };

  const handleChange = (event, index) => {
    setValue(event.target.value);

    console.log("Index", index);

    setAnswer(index + 1);
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
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add New
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add New Question
        </DialogTitle>

        <DialogContent dividers>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              onChange={event => setStatement(event.target.value)}
              style={{ marginBottom: 10 }}
              id="question-statement"
              label="Question Statement"
              multiline
              rows={4}
              variant="outlined"
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Add some options and choose a right answer:</Typography>
          </div>

          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" value={value}>
              {optionList.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option.optionText}
                  valueIndex={index}
                  control={<Radio />}
                  onChange={event => handleChange(event, index)}
                  label={option.optionText}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <div style={{ marginTop: 10 }}>
            <TextField
              onKeyDown={handleKeyDown}
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
            variant="contained"
            autoFocus
            onClick={handleSubmitQuestion}
            color="primary"
          >
            Add Question
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // questionAsset: state.QuestionBankReducers.questionAsset
  };
};

export default connect(mapStateToProps)(AddNewQuestion);
