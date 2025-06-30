import React from "react";
import "./Login_Signin.css";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router";
export default function Signin() {
  return (
    <>
      <main className="loginPage">
        <div className="loginContainer">
          <div>
            <h1 className="loginHeading">Sign up</h1>
          </div>
          <form>
            <div className="loginFormChild1">
              <div className="loginInputWrapper1">
                <Input
                  className={""}
                  child1={{ text: "Email or mobile number" }}
                  input={{
                    type: "text",
                    value: "",
                    name: "emailOrPhone",
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
              <div className="loginInputWrapper1">
                <Input
                  className={""}
                  child1={{ text: "Full name" }}
                  input={{
                    type: "text",
                    value: "",
                    name: "fullName",
                    onChange: () => {},
                  }}
                />
              </div>
              <div className="loginInputWrapper1">
                <Input
                  className={""}
                  child1={{ text: "User name" }}
                  input={{
                    type: "text",
                    value: "",
                    name: "username",
                    onChange: () => {},
                  }}
                />
              </div>
              <div className="loginInputWrapper1 loginInputWrapperClass2">
                <Button
                  button={{
                    className: "",
                    text: "Sign up",
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
                    text: "Sign up with facebook",
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
              All ready have an account?{" "}
              <Link to={"/login"} className="signupLink" href="#">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
