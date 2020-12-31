import React, { Suspense, useState } from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { LinearProgress } from "@material-ui/core";

import { NavBar, TopBar } from "./components";
import { removeTokenAndRelevantInfo } from "../../utils/auth";

const useStyles = makeStyles(() => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  topBar: {
    zIndex: 2,
    position: "relative"
  },
  container: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden"
  },
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: "0 0 auto"
  },
  content: {
    overflowY: "auto",
    flex: "1 1 auto"
  }
}));

const AdminDashboard = props => {
  const { route } = props;

  const classes = useStyles();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);

  const handleNavBarMobileOpen = () => {
    setOpenNavBarMobile(true);
  };

  const handleNavBarMobileClose = () => {
    setOpenNavBarMobile(false);
  };

  const token = window.localStorage.getItem("token");
  const role = window.localStorage.getItem("role");

  if (!token) {
    removeTokenAndRelevantInfo();
    props.history.push("/");
  } else {
    if (role !== "admin") {
      props.history.push("/");
    }
  }
  return (
    <div className={classes.root}>
      <TopBar
        className={classes.topBar}
        onOpenNavBarMobile={handleNavBarMobileOpen}
      />
      <div className={classes.container}>
        <NavBar
          className={classes.navBar}
          onMobileClose={handleNavBarMobileClose}
          openMobile={openNavBarMobile}
        />
        <main className={classes.content}>
          <Suspense fallback={<LinearProgress />}>
            {renderRoutes(route.routes)}
          </Suspense>
        </main>
      </div>
    </div>
  );
};

AdminDashboard.propTypes = {
  route: PropTypes.object
};

export default AdminDashboard;
