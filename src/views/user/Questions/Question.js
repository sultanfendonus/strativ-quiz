import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { getAllQuestion, getSubmittedQuestions } from "../../../actions";
import { makeStyles } from "@material-ui/styles";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";

import { Page } from "components";
// import EditQuestion from './components/EditQuestion';
import clsx from "clsx";
import SubmitQuestion from "./components/SubmitAnswer";
import { charArray } from "utils/characters";

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
    marginBottom: theme.spacing(0.6)
  },
  content: {
    // padding: 1,
    paddingLeft: 10,
    padding: theme.spacing(2),
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexWrap: "wrap"
    },
    "&:last-child": {
      paddingBottom: theme.spacing(2)
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
  const { className, ...rest } = props;

  useEffect(() => {
    dispatch(getAllQuestion());
    dispatch(getSubmittedQuestions());
  }, []);

  const renderQuestionList = questionList => {
    if (questionList.length === 0) {
      return (
        <Typography>
          No question found. Please add some question first.
        </Typography>
      );
    }

    questionList.forEach((question, index) => {
      const result = props.submittedQuestionList.find(
        item => item.questionId === question.id
      );
      if (result) {
        questionList[index].answer = result.answerValue;
        questionList[index].submissionId = result.id;
        questionList[index].submissionHistory = result.submissionHistory;
      }
    });

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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <Typography variant="h5">{question.title}</Typography>
                {question.options.map((option, index) => {
                  return (
                    <Typography>
                      {charArray[index]}) {option.optionText}
                    </Typography>
                  );
                })}
              </div>
            </div>

            <div className={classes.actions}>
              <div style={{ display: "flex" }}>
                {question.answer ? (
                  <SubmitQuestion question={question} reSubmit={true} />
                ) : (
                  <SubmitQuestion question={question} />
                )}
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
          Question List ({props.questionList && props.questionList.length})
        </h2>
      </Grid>

      <Grid
        className={classes.container}
        container
        spacing={1}
        direction={"column"}
      >
        {props.questionList &&
          props.submittedQuestionList &&
          renderQuestionList(props.questionList)}
      </Grid>
    </Page>
  );
};

const mapStateToProps = state => {
  return {
    questionList: state.QuestionBankReducer.questionList,
    submittedQuestionList: state.AnswerReducer.submittedQuestionList
  };
};

export default connect(mapStateToProps)(Question);
