import React, { lazy } from "react";
import { Redirect } from "react-router-dom";

import AuthLayout from "./layouts/Auth";
import ErrorLayout from "./layouts/Error";
import AdminDashboardLayout from "./layouts/AdminDashboard";
import UserDashboardLayout from "./layouts/UserDashboard";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/auth/admin/login" />
  },
  {
    path: "/auth",
    component: AuthLayout,
    routes: [
      {
        path: "/auth/admin/login",
        exact: true,
        component: lazy(() => import("views/admin/Login"))
      },
      {
        path: "/auth/user/login",
        exact: true,
        component: lazy(() => import("views/user/Login"))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: "/errors",
    component: ErrorLayout,
    routes: [
      {
        path: "/errors/error-401",
        exact: true,
        component: lazy(() => import("views/Error401"))
      },
      {
        path: "/errors/error-404",
        exact: true,
        component: lazy(() => import("views/Error404"))
      },
      {
        path: "/errors/error-500",
        exact: true,
        component: lazy(() => import("views/Error500"))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: "/user",
    component: UserDashboardLayout,
    routes: [
      {
        path: "/user/dashboard/question",
        exact: true,
        component: lazy(() => import("views/user/Questions"))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  },
  {
    path: "/admin",
    component: AdminDashboardLayout,
    routes: [
      {
        path: "/admin/dashboard/question",
        exact: true,
        component: lazy(() => import("views/admin/Questions"))
      },
      {
        path: "/admin/dashboard/submission/:questionId",
        exact: true,
        component: lazy(() => import("views/admin/Submission"))
      },
      {
        component: () => <Redirect to="/errors/error-404" />
      }
    ]
  }
];

export default routes;
