import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import { Page } from "components";
import gradients from "utils/gradients";
import { LoginForm } from "./components";
import Alert from "@material-ui/lab/Alert";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(6, 2)
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: "100%",
    overflow: "unset",
    display: "flex",
    position: "relative",
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
      width: "50%"
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.white,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  icon: {
    backgroundImage: gradients.green,
    color: theme.palette.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: "absolute",
    top: -32,
    left: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  loginForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  person: {
    marginTop: theme.spacing(2),
    display: "flex"
  },
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Login = props => {
  const classes = useStyles();
  const errorMessage = useSelector(state => state.OtherReducer.errorMessage);

  return (
    <Page className={classes.root} title="Login">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
          <Typography gutterBottom variant="h3">
            Admin Sign in
          </Typography>
          <Typography variant="subtitle2">
            email: admin@gmail.com, password: 123456
          </Typography>

          {errorMessage && (
            <Alert style={{ marginTop: 10 }} variant="filled" severity="error">
              {errorMessage}
            </Alert>
          )}

          <LoginForm className={classes.loginForm} history={props.history} />
          <Divider className={classes.divider} />
          <a href="/auth/user/login">Want to login as User? Click here</a>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="/images/auth.png"
          title="Cover"
        >
          <Typography color="inherit" variant="subtitle1">
            I used Dexie.js for store data in locally. Dexie.js is a wrapper of
            indexDB.
          </Typography>
          <div className={classes.person}>
            <Avatar
              alt="Person"
              className={classes.avatar}
              src="/images/sultan.jpg"
            />
            <div>
              <Typography color="inherit" variant="body1">
                Sultan Mahamud
              </Typography>
              <Typography color="inherit" variant="body2">
                Software Engineer
              </Typography>
            </div>
          </div>
        </CardMedia>
      </Card>
    </Page>
  );
};

export default Login;
