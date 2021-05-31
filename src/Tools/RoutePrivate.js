import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getSavedToken } from "./common";

const RoutePrivate = ({
  component: Component,
  render: Render,
  ...restElement
}) => {
  return (
    <Route
      {...restElement}
      render={props =>
        Render ? (
          getSavedToken() ? (
            <Render {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        ) : getSavedToken() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default RoutePrivate;
