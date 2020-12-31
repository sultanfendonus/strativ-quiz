import React, { useEffect } from "react";
import { useParams } from "react-router";
import {
  deleteQuestionFromQuestionBank,
  getSubmissionByQuestionId
} from "actions";
import { connect, useDispatch } from "react-redux";
import { Avatar, Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Page } from "../../../components";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import ViewQuestion from "../Questions/components/ViewQuestion";
import EditQuestion from "../Questions/components/EditQuestion";
import DeleteIcon from "@material-ui/icons/Delete";
import { userAccounts } from "../../../constant/account";
import ViewSubmissionHistory from "./ViewSubmissionHistory";
import { isCorrectAnswer } from "utils/answer";

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

const ViewSubmission = props => {
  const { questionId } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getSubmissionByQuestionId(parseInt(questionId)));
  }, []);

  const renderSubmissionList = submissionList => {
    if (submissionList.length === 0) {
      return (
        <Typography>
          No Submission Found for this question! Please check back later.
        </Typography>
      );
    }

    submissionList.forEach((question, index) => {
      const result = userAccounts.find(
        item => item.id === parseInt(question.userId)
      );
      if (result) {
        submissionList[index].user = result;
      }
    });

    return submissionList.map(item => {
      return (
        <Card key={item.id} className={clsx(classes.cardRoot)}>
          <CardContent className={classes.content}>
            <div className={classes.header}>
              <Avatar alt="Author" className={classes.avatar}>
                P
              </Avatar>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h6">
                  {item.user && item.user.name}
                </Typography>
                <Typography variant="subtitle2">
                  Last Submitted Answer - <b>{item.answerValue}</b>{" "}
                  {/*{isCorrectAnswer(item.answerValue, item.question.options)*/}
                  {/*  ? "true"*/}
                  {/*  : "false"}*/}
                  {/*{isCorrectAnswer(item.answerValue, item.question.options)}*/}
                  {isCorrectAnswer(item.answerValue, item.question.options)}
                </Typography>
              </div>
            </div>

            <div className={classes.actions}>
              <ViewSubmissionHistory submissionObject={item} />
            </div>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <Page className={classes.root} title="Submissions">
      <Grid
        className={classes.container}
        container
        spacing={1}
        justify={"space-between"}
      >
        <h2>
          Submission ({props.submissionList && props.submissionList.length})
        </h2>
      </Grid>

      <Grid
        className={classes.container}
        container
        spacing={1}
        direction={"column"}
      >
        {props.submissionList && renderSubmissionList(props.submissionList)}
      </Grid>
    </Page>
  );
};

const mapStateToProps = state => {
  return {
    submissionList: state.AnswerReducer.submissionList
  };
};

export default connect(mapStateToProps)(ViewSubmission);
