import React from "react";
import "./Login_Signin.css";
import Input from "../components/Input";
import Button from "../components/Button";
import Header from "../components/Header";
import { Link } from "react-router";

export default function Login() {
  return (
    <>
      <main className="loginPage">
        <div className="loginContainer">
          <div>
            <h1 className="loginHeading">Login</h1>
          </div>
          <form>
            <div className="loginFormChild1">
              <div className="loginInputWrapper1">
                <Input
                  className={""}
                  child1={{ text: "Email or username" }}
                  input={{
                    type: "text",
                    value: "",
                    name: "username",
                    onChange: () => {},
                  }}
                />
              </div>
              <div className="loginInputWrapper1">
                <Input
                  className={""}
                  child1={{ text: "password" }}
                  input={{
                    type: "password",
                    value: "",
                    name: "password",
                    onChange: () => {},
                  }}
                />
              </div>
              <div className="loginInputWrapper1 loginInputWrapperClass2">
                <Button
                  button={{
                    className: "",
                    text: "Log in",
                  }}
                />
              </div>
              <div className="loginInputWrapper1 loginInputWrapperClass3">
                <div className="loginDevider"></div>
                <div className="loginDeviderText"> OR</div>
                <div className="loginDevider"></div>
              </div>
              <div className="loginInputWrapper1 loginInputWrapperClass2 loginInputWrapperClass4">
                <Button
                  button={{
                    className: "",
                    text: "Log in with facebook",
                  }}
                />
              </div>
            </div>
            <div className="loginFormChild2">
              {" "}
              <span>Forgot password?</span>
            </div>
          </form>
        </div>
        <div className="loginContainer">
          <div className="signupContainer">
            <div>
              New in insragram?{" "}
              <Link to={"/signin"} className="signupLink" href="#">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
