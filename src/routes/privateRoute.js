import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "context/userContext";
import { isEmpty } from "lodash";

export function PrivateRoute({ children, ...rest }) {
  const { isAuthenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !isEmpty(isAuthenticated()) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
