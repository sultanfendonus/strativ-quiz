import React, { Fragment, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";

import { Topbar } from "./components";
import useRouter from "../../utils/useRouter";

const useStyles = makeStyles(theme => ({
  content: {
    height: "100%",
    paddingTop: 56,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64
    }
  }
}));

const Auth = props => {
  const { route } = props;
  const { history } = useRouter();

  const classes = useStyles();

  const token = window.localStorage.getItem("token");
  const role = window.localStorage.getItem("role");

  if (token && role === "admin") {
    history.push("/admin/dashboard/question");
  } else if (token && role === "user") {
    history.push("/user/dashboard/question");
  }

  return (
    <Fragment>
      <Topbar />
      <main className={classes.content}>
        <Suspense fallback={<LinearProgress />}>
          {renderRoutes(route.routes)}
        </Suspense>
      </main>
    </Fragment>
  );
};

Auth.propTypes = {
  route: PropTypes.object
};

export default Auth;
