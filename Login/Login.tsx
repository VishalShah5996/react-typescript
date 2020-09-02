import React from "react";
import { Formik } from "formik";
import { Bounce } from "react-activity";

import Background from "../../../images/img.jpg";
import { Typography, colors } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

import { UserContext } from "contexts/UserContext";

import { signInQuery } from "../../../apis/Queries";

import {
  setItemToLocalStorage,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
} from "../../../utility/browserStorage/LocalStorage";
import { LogInSchema } from "../../../utility/validationSchema/LoginSchema";

import {
  // useStyles,
  CommonHtmlElement,
  Colors,
  helperTextStyles,
} from "../../../css/styles.modulecss";

import {
  CheckSpan,
  CheckboxRow,
  ForgotLink,
  ButtonRow,
  useStyles
} from "./Login.modulecss";

interface LoginFormValues {
  username: string;
  password: string;
  rememberMeChecked: boolean;
}


const RememberMeCheckbox = withStyles({
  root: {
    color: Colors.white,
    "&$checked": {
      color: Colors.yellow,
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export const Login = (props: any): JSX.Element => {
  const history = useHistory();
  const classes = useStyles();
  const helperTestClasses = helperTextStyles();

  const UserContextProvider = React.useContext(UserContext) || null;

  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }, [errorMessage]);

  const onSubmitLoginHandler = async (
    creds: LoginFormValues,
    resetForm: () => void
  ) => {
    const isRememberMe = creds && creds.rememberMeChecked;
    try {
      const data = await signInQuery(creds);
      if (data && (data.token !== null || data.token !== "")) {
        if (data.user) {
          UserContextProvider.login({
            ...data.user,
            token: data.token,
            isLoggedIn: true,
          });
          setItemToLocalStorage("user", data.user);
          setItemToLocalStorage("token", data.token);
          if (isRememberMe) {
            setItemToLocalStorage("remember-me", creds, true);
          } else {
            removeItemFromLocalStorage("remember-me");
          }
        }
      }

      if (data && data.non_field_errors) {
        setErrorMessage(
          "Sorry, we couldn't find that username and password..."
        );
        resetForm();
      }
    } catch (e) {
      resetForm();
      setErrorMessage("a network error occured");
    }
  };

  const onClickSignup = () => {
    history.push("/signup");
  };

  let decodeRememberMeObjValues = undefined;
  if (getItemFromLocalStorage("remember-me", true)) {
    decodeRememberMeObjValues =
      getItemFromLocalStorage("remember-me", true) || undefined;
  }

  if (UserContextProvider.isLoggedIn || UserContextProvider.token) {
    const page = "/User/Dashboard";
    return <Redirect to={page} />;
  }

  return (
    <>
      <CommonHtmlElement.Header>
        <CommonHtmlElement.Logo href="#">Mucktracker</CommonHtmlElement.Logo>
      </CommonHtmlElement.Header>
      <CommonHtmlElement.MainWelcomeWrapper
        style={{ backgroundImage: `url(${Background})` }}
      >
        <CommonHtmlElement.MainContainer>
          <CommonHtmlElement.WelcomeWrapper>
            <CommonHtmlElement.WelcomeBlock>
              <Typography>
                <CommonHtmlElement.Title>Mucktracker</CommonHtmlElement.Title>
                <CommonHtmlElement.MainContent>
                  Welcome back! Please login to your account.
                </CommonHtmlElement.MainContent>
              </Typography>
              <CommonHtmlElement.FormWrapper>
                <Formik
                  initialValues={{
                    username:
                      (decodeRememberMeObjValues &&
                        decodeRememberMeObjValues.username &&
                        decodeRememberMeObjValues.username) ||
                      "",
                    password:
                      (decodeRememberMeObjValues &&
                        decodeRememberMeObjValues.password &&
                        decodeRememberMeObjValues.password) ||
                      "",
                    rememberMeChecked:
                      (decodeRememberMeObjValues &&
                        decodeRememberMeObjValues.rememberMeChecked) ||
                      false,
                  }}
                  validationSchema={LogInSchema}
                  onSubmit={(values, { resetForm }) => {
                    onSubmitLoginHandler(values, resetForm);
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        type="text"
                        id="username-muck"
                        label="Username"
                        name="username"
                        className={classes.textField}
                        error={
                          errors.username && touched.username ? true : false
                        }
                        helperText={
                          errors.username && touched.username && errors.username
                        }
                        FormHelperTextProps={{ classes: helperTestClasses }}
                        fullWidth={true}
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="normal"
                        InputProps={{
                          className: classes.multilineColor,
                        }}
                        InputLabelProps={{
                          classes: {
                            root: classes.label,
                            // error: classes.erroredLabel,
                            // focused: classes.focusedLabel,
                          },
                        }}
                      />
                      <TextField
                        type="password"
                        id="password-muck"
                        label="Password"
                        name="password"
                        error={
                          errors.password && touched.password ? true : false
                        }
                        helperText={
                          errors.password && touched.password && errors.password
                        }
                        FormHelperTextProps={{ classes: helperTestClasses }}
                        fullWidth={true}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        margin="normal"
                        InputProps={{
                          className: classes.multilineColor,
                        }}
                        InputLabelProps={{
                          classes: {
                            root: classes.label,
                            // error: classes.erroredLabel,
                            // focused: classes.focusedLabel,
                          },
                        }}
                      />
                      <CheckboxRow>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <RememberMeCheckbox
                                checked={values.rememberMeChecked}
                                onChange={handleChange}
                                name="rememberMeChecked"
                              />
                            }
                            label={<CheckSpan>Remember me</CheckSpan>}
                          />
                        </FormGroup>
                        <ForgotLink to={"/login"}>Forgot Password?</ForgotLink>
                      </CheckboxRow>
                      {errorMessage && (
                        <CommonHtmlElement.HasError
                          style={{ marginTop: 10 }}
                          role="alert"
                        >
                          {errorMessage}
                        </CommonHtmlElement.HasError>
                      )}
                      <ButtonRow>
                        <Button
                          disabled={isSubmitting}
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          <span style={{ marginRight: "20px" }}>Login</span>
                          <Bounce
                            color={Colors.white}
                            animating={isSubmitting}
                          />
                        </Button>
                        <Link to={"/signup"}>
                          <Button
                            disabled={isSubmitting}
                            variant="contained"
                            color="primary"
                            onClick={onClickSignup}
                          >
                            Sign Up
                          </Button>
                        </Link>
                      </ButtonRow>
                    </form>
                  )}
                </Formik>
              </CommonHtmlElement.FormWrapper>
            </CommonHtmlElement.WelcomeBlock>
          </CommonHtmlElement.WelcomeWrapper>
        </CommonHtmlElement.MainContainer>
      </CommonHtmlElement.MainWelcomeWrapper>
    </>
  );
};

export default Login;
