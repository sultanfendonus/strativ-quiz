/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Button,
  colors,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";
import useRouter from "utils/useRouter";
import { adminSignOut } from "actions";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  flexGrow: {
    flexGrow: 1
  },
  search: {
    backgroundColor: "rgba(255,255,255, 0.1)",
    borderRadius: 4,
    flexBasis: 300,
    height: 36,
    padding: theme.spacing(0, 2),
    display: "flex",
    alignItems: "center"
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: "inherit"
  },
  searchInput: {
    flexGrow: 1,
    color: "inherit",
    "& input::placeholder": {
      opacity: 1,
      color: "inherit"
    }
  },
  searchPopper: {
    zIndex: theme.zIndex.appBar + 100
  },
  searchPopperContent: {
    marginTop: theme.spacing(1)
  },
  trialButton: {
    marginLeft: theme.spacing(2),
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    "&:hover": {
      backgroundColor: colors.green[900]
    }
  },
  trialIcon: {
    marginRight: theme.spacing(1)
  },
  notificationsButton: {
    marginLeft: theme.spacing(1)
  },
  notificationsBadge: {
    backgroundColor: colors.orange[600]
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TopBar = props => {
  const { onOpenNavBarMobile, className, ...rest } = props;
  const classes = useStyles();
  const { history } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    let mounted = true;

    return () => {
      mounted = false;
    };
  }, []);

  const handleLogout = () => {
    dispatch(adminSignOut(history));
  };

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <RouterLink to="/">
          <Typography variant="h3" style={{ color: "white" }}>
            Strativ Quiz
          </Typography>
        </RouterLink>
        <div className={classes.flexGrow} />

        <Button
          className={classes.logoutButton}
          color="inherit"
          onClick={handleLogout}
        >
          <InputIcon className={classes.logoutIcon} />
          Sign out
        </Button>

        <Hidden lgUp>
          <IconButton color="inherit" onClick={onOpenNavBarMobile}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default TopBar;
