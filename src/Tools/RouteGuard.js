import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getSavedToken } from "./common";

const RouteGuard = ({
  component: Component,
  render: Render,
  ...restElement
}) => {
  return (
    <Route
      {...restElement}
      render={props =>
        Render ? (
          !getSavedToken() ? (
            <Render {...props} />
          ) : (
            <Redirect to={{ pathname: "/current" }} />
          )
        ) : !getSavedToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/current" }} />
        )
      }
    />
  );
};

export default RouteGuard;
