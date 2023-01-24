import React from "react";
import LoadingToRedirect from "../Components/Shared/LoadingToRedirect";
import useAuth from "../Hooks/useAuth";

export default function PrivateRoute({ children }) {
  const loggedInUser = useAuth(false);
  return <div>{loggedInUser ? { children } : <LoadingToRedirect />}</div>;
}
