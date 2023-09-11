import React , { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
  const { actions } = useContext(Context);
  const logout = () => {
      actions.clearUser();
  }
  return (
    <>
      <div className="justify-content-center align-items-center mt-4">
        <div className="row">
          <h1 className="text-center p-5">Private</h1>
        </div>
        <div className="row justify-content-center align-items-center">
          This content only can be available for registered users
        </div>
        <div className="row justify-content-center align-items-center mt-4">
          <Link to="/login" className="align-middle px-4 text-center text-decoration-none fs-3" onClick={() => logout()}>
            <i className="fa-solid fa-right-from-bracket"></i> <span className="ms-1 d-none d-sm-inline">Sign out</span>
          </Link>
        </div>
      </div>
    </>
  );
};
