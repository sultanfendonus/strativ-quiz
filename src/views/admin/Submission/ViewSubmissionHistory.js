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
import moment from "moment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { isCorrectAnswer } from "utils/answer";

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

const ViewSubmissionHistory = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        size="small"
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<VisibilityIcon />}
        onClick={handleClickOpen}
      >
        View Submission History
      </Button>

      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Submission History
        </DialogTitle>

        <DialogContent dividers>
          <List className={classes.root}>
            {props.submissionObject.submissionHistory.map((history, index) => {
              return (
                <div
                  style={{ border: "1px solid black", padding: 5, margin: 5 }}
                >
                  <Typography variant="h6">
                    {history.answer}
                    {" - "}
                    {isCorrectAnswer(
                      history.answer,
                      props.submissionObject.question.options
                    )}
                  </Typography>
                  <Typography variant="subtitle2">
                    {moment(history.timestamp).fromNow()}
                  </Typography>
                </div>
              );
            })}
          </List>
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

ViewSubmissionHistory.propTypes = {
  submissionObject: PropTypes.object
};

export default connect(mapStateToProps)(ViewSubmissionHistory);
