import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const updateEmail = (emailInputValue) => {
    setEmail(emailInputValue);
  };

  const updatePassword = (passwordInputValue) => {
    setPassword(passwordInputValue);
  };

  const { actions } = useContext(Context);
  const signup = async () => {
    await actions.setnewUser(email, password);
    await actions.setUser(email, password);
    navigate("/private");
  };
  return (
    <>
      <div className="w-100">
        <div className="m-0 vh-100 row justify-content-center align-items-center">
          <div className="col-auto p-0 rounded shadow">
            <div className="row p-5 text-center justify-content-center align-items-center rounded-1">
              <div className="col-auto m-0 p-5 text-center rounded-1">
                <div className="mb-5">
                  <h1 className="pb-5">Sign up</h1>
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    onChange={(e) => {
                      updateEmail(e.target.value);
                    }}
                    id="inputEmail"
                    className="w-100 my-3 border-0 border-bottom border-color-light rounded-0"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    onChange={(e) => {
                      updatePassword(e.target.value);
                    }}
                    id="inputPassword"
                    className="w-100 mt-5 mb-3 border-0 border-bottom border-color-light rounded-0"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Password"
                  />
                </div>
                <div className="ml-auto">
                  <Link to="/signup">
                    <button
                      className="btn btn-lg mt-5 mb-3 fs-4"
                      onClick={signup}
                    >
                      Enter
                    </button>
                  </Link>
                </div>
                <span>
                    Do you already have an account? <a href="/login"> Sign in </a>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
