import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PropTypes from "prop-types";
import { charArray } from "utils/characters";

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

const ViewQuestion = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    // clearState()
  };

  return (
    <div>
      <Button
        size="small"
        style={{ backgroundColor: "#43A048", color: "white" }}
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<VisibilityIcon />}
        onClick={handleClickOpen}
      >
        View
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {props.question.title}
        </DialogTitle>

        <DialogContent dividers>
          {props.question.options.map((option, index) => {
            if (option.correct) {
              return (
                <Typography key={index} style={{ color: "blue", fontSize: 16 }}>
                  {charArray[index]}) {option.optionText}
                </Typography>
              );
            }
            return (
              <Typography key={index}>
                {charArray[index]}) {option.optionText}
              </Typography>
            );
          })}

          <Typography style={{ marginTop: 20, fontSize: 11 }}>
            * Correct answer is highlighted by blue color.
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

ViewQuestion.propTypes = {
  question: PropTypes.object
};

export default connect(mapStateToProps)(ViewQuestion);
