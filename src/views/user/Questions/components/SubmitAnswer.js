import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { reSubmitAnswer, submitAnswer } from "actions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

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

const SubmitAnswer = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [statement, setStatement] = useState("");
  const [optionList, setOptionList] = useState([]);
  const [textOption, setTextOption] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { reSubmit, question } = props;

  useEffect(() => {
    setStatement(question.title);
    setOptionList(question.options);
    if (reSubmit) {
      question.options.map(option => {
        if (option.optionText === question.answer) {
          setValue(option.optionText);
        }
      });
    }
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitAnswer = () => {
    let data = {
      submissionHistory: question.submissionHistory
        ? [...question.submissionHistory]
        : []
    };
    const user = window.localStorage.getItem("user_id");
    data.questionId = question.id;
    data.userId = user;
    data.answerValue = value;
    data.submissionHistory.push({ answer: value, timestamp: Date.now() });

    if (statement === "" || optionList.length === 0 || value === "") {
      alert("please input necessary field.");
    } else {
      console.log(data);
      if (reSubmit) {
        data.id = question.submissionId;
        dispatch(reSubmitAnswer(data));
      } else {
        dispatch(submitAnswer(data));
      }
      handleClose();
    }
  };

  const handleChange = (event, index) => {
    setValue(event.target.value);

    optionList.map((option, optionIndex) => {
      if (optionIndex === index) {
        option.correct = true;
      } else {
        option.correct = false;
      }
    });
  };

  return (
    <div>
      <Button
        size="small"
        variant="contained"
        color={reSubmit ? "secondary" : "primary"}
        className={classes.button}
        onClick={handleClickOpen}
      >
        {reSubmit ? "Submit Again" : "Submit Answer"}
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth={"sm"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {statement}
        </DialogTitle>

        <DialogContent dividers>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>Please choose an option and submit answer</Typography>
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
                </div>
              ))}
            </RadioGroup>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button
            autoFocus
            variant="contained"
            onClick={handleSubmitAnswer}
            color="primary"
          >
            Submit Answer
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(SubmitAnswer);
