import React, { useEffect, useContext } from "react";
import { Context } from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import injectContext from "./store/appContext";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { Private } from "./pages/private";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  const { store, actions } = useContext(Context);

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  const userIsLogged = () => {
    fetch(process.env.BACKEND_URL + `api/logged`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.Logged) {
          actions.setLogged(true);
        } else {
          actions.setLogged(false);
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      userIsLogged();
    }
  }, []);

  return (
    <div className="h-100 d-inline">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <div className="main-body justify-content-center align-items-center">
            <Routes>
              {store.logged ? (
                <>
                  <Route element={<Private />} path="/private" />
                </>
              ) : (
                true
              )}

              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<Home />} path="/" />

              <Route element={<h1>Not found!</h1>} />
            </Routes>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
