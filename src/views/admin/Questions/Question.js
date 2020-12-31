import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {
  deleteQuestionFromQuestionBank,
  getAllQuestion
} from "../../../actions";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";

import { Page } from "components";

import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import DeleteIcon from "@material-ui/icons/Delete";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
// import EditQuestion from './components/EditQuestion';
import ViewQuestion from "./components/ViewQuestion";
import clsx from "clsx";
import Pagination from "@material-ui/lab/Pagination";
import AddNewQuestion from "./components/AddNewQuestion";
import EditQuestion from "./components/EditQuestion";
import useRouter from "../../../utils/useRouter";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  container: {
    marginTop: theme.spacing(1)
  },
  button: {
    marginLeft: theme.spacing(1)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  cardRoot: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: theme.spacing(0.4)
  },
  content: {
    padding: 1,
    paddingLeft: 10,
    // padding: theme.spacing(2),
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexWrap: "wrap"
    },
    "&:last-child": {
      paddingBottom: theme.spacing(0)
    }
  },
  header: {
    maxWidth: "100%",
    width: 440,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      // marginBottom: theme.spacing(2),
      flexBasis: "100%"
    }
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  stats: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexBasis: "50%"
    }
  },
  actions: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      flexBasis: "50%"
    }
  }
}));

const Question = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { history } = useRouter();
  const { className, ...rest } = props;

  useEffect(() => {
    dispatch(getAllQuestion());
  }, []);

  const renderQuestionList = questionList => {
    if (questionList.length === 0) {
      return (
        <Typography>
          No question found. Please add some question first.
        </Typography>
      );
    }
    return questionList.map(question => {
      return (
        <Card
          key={question.id}
          {...rest}
          className={clsx(classes.cardRoot, className)}
        >
          <CardContent className={classes.content}>
            <div className={classes.header}>
              <Avatar alt="Author" className={classes.avatar}>
                Q
              </Avatar>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>{question.title}</div>
              </div>
            </div>

            <div className={classes.actions}>
              <div style={{ display: "flex" }}>
                <Button
                  size="small"
                  onClick={() =>
                    history.push(`/admin/dashboard/submission/${question.id}`)
                  }
                  variant="contained"
                  className={classes.button}
                >
                  View Submission
                </Button>
                <ViewQuestion question={question} />

                <EditQuestion question={question} />

                <Button
                  size="small"
                  onClick={() =>
                    dispatch(deleteQuestionFromQuestionBank(question.id, 1))
                  }
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <Page className={classes.root} title="Question Bank">
      <Grid
        className={classes.container}
        container
        spacing={1}
        justify={"space-between"}
      >
        <h2>
          Question Bank ({props.questionList && props.questionList.length})
        </h2>
        <div>
          <AddNewQuestion />
        </div>
      </Grid>

      <Grid
        className={classes.container}
        container
        spacing={1}
        direction={"column"}
      >
        {props.questionList && renderQuestionList(props.questionList)}
      </Grid>
    </Page>
  );
};

const mapStateToProps = state => {
  return {
    questionList: state.QuestionBankReducer.questionList,
    deleteQuestionLoaderVisibility:
      state.QuestionBankReducer.deleteQuestionLoaderVisibility
  };
};

export default connect(mapStateToProps)(Question);
