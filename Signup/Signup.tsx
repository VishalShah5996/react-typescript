import React from "react";
import { Formik } from "formik";
import { Bounce } from "react-activity";
import { useHistory } from "react-router-dom";

import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";

import Background from "../../../images/img.jpg";

import { SignupSchema } from "../../../utility/validationSchema/SignupSchema";
import { signUpQuery } from "../../../apis/Queries";

import {
  useStyles,
  CommonHtmlElement,
  Colors,
  helperTextStyles,
} from "../../../css/styles.modulecss";

import {
  CommonLinks,
  FormTitle,
  Row,
  Column,
  LoginLink,
  ButtonRow,
  SignupWelcomeWrapper,
} from "./Signup.modulecss";

const registeringAsOptions = [
  {
    value: "Educator",
    label: "Educator",
  },
  {
    value: "Student",
    label: "Student",
  },
];

interface SignUpState {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const Signup = (props: any): JSX.Element => {
  const classes = useStyles();
  const helperTestClasses = helperTextStyles();

  const history = useHistory();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  React.useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }

    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage("");
        history.push("/login");
      }, 3000);
    }
  }, [errorMessage, successMessage]);

  const onSubmitLoginHandler = async (
    creds: SignUpState,
    resetForm: () => void
  ) => {
    try {
      const data = await signUpQuery(creds);
      if (data && (data.token !== null || data.token !== "")) {
        setSuccessMessage(
          "Congratulations, your account has been successfully created."
        );
      }

      if (data && data.non_field_errors) {
        setErrorMessage("The fields may not be a blank or ");
        resetForm();
      }
    } catch (e) {
      resetForm();
      setErrorMessage("a network error occured");
    }
  };

  return (
    <>
      <CommonHtmlElement.Header>
        <CommonHtmlElement.Logo href="#">Mucktracker</CommonHtmlElement.Logo>
      </CommonHtmlElement.Header>
      <CommonHtmlElement.MainWelcomeWrapper
        style={{ backgroundImage: `url(${Background})` }}
      >
        <CommonHtmlElement.MainContainer>
          <SignupWelcomeWrapper>
            <CommonHtmlElement.WelcomeBlock style={{ position: "relative" }}>
              <Typography>
                <CommonHtmlElement.Title>Mucktracker</CommonHtmlElement.Title>
                <CommonHtmlElement.MainContent>
                  Please complete to create your account.
                </CommonHtmlElement.MainContent>
              </Typography>
              <CommonHtmlElement.FormWrapper>
                <Formik
                  initialValues={{
                    first_name: "",
                    last_name: "",
                    username: "",
                    email: "",
                    password: "",
                    passwordConfirm: "",
                    register_as: "Educator",
                  }}
                  validationSchema={SignupSchema}
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
                      <Typography>
                        <FormTitle>About you</FormTitle>
                      </Typography>
                      <Row>
                        <Column>
                          <TextField
                            label="First name"
                            type="text"
                            name="first_name"
                            id="first_name-muck"
                            fullWidth={true}
                            margin="normal"
                            value={values.first_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              errors.first_name && touched.first_name
                                ? true
                                : false
                            }
                            helperText={
                              errors.first_name &&
                              touched.first_name &&
                              errors.first_name
                            }
                            FormHelperTextProps={{ classes: helperTestClasses }}
                            InputProps={{
                              className: classes.multilineColor,
                            }}
                            InputLabelProps={{
                              classes: {
                                root: classes.label,
                                error: classes.erroredLabel,
                                focused: classes.focusedLabel,
                              },
                            }}
                          />
                        </Column>
                        <Column>
                          <TextField
                            label="Last name"
                            type="text"
                            name="last_name"
                            id="last_name-muck"
                            fullWidth={true}
                            margin="normal"
                            value={values.last_name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              errors.last_name && touched.last_name
                                ? true
                                : false
                            }
                            helperText={
                              errors.last_name &&
                              touched.last_name &&
                              errors.last_name
                            }
                            FormHelperTextProps={{ classes: helperTestClasses }}
                            InputProps={{
                              className: classes.multilineColor,
                            }}
                            InputLabelProps={{
                              classes: {
                                root: classes.label,
                                error: classes.erroredLabel,
                                focused: classes.focusedLabel,
                              },
                            }}
                          />
                        </Column>
                      </Row>
                      <Row>
                        <TextField
                          label="Email"
                          type="email"
                          name="email"
                          id="email-basic"
                          fullWidth={true}
                          margin="normal"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={errors.email && touched.email ? true : false}
                          helperText={
                            errors.email && touched.email && errors.email
                          }
                          FormHelperTextProps={{ classes: helperTestClasses }}
                          InputProps={{
                            className: classes.multilineColor,
                          }}
                          InputLabelProps={{
                            classes: {
                              root: classes.label,
                              error: classes.erroredLabel,
                              focused: classes.focusedLabel,
                            },
                          }}
                        />
                      </Row>
                      <Row>
                        <TextField
                          type="text"
                          id="username-muck"
                          label="Username"
                          name="username"
                          error={
                            errors.username && touched.username ? true : false
                          }
                          helperText={
                            errors.username &&
                            touched.username &&
                            errors.username
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
                              error: classes.erroredLabel,
                              focused: classes.focusedLabel,
                            },
                          }}
                        />
                      </Row>
                      <Row>
                        <TextField
                          type="password"
                          id="password-muck"
                          label="Password"
                          name="password"
                          error={
                            errors.password && touched.password ? true : false
                          }
                          helperText={
                            errors.password &&
                            touched.password &&
                            errors.password
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
                              error: classes.erroredLabel,
                              focused: classes.focusedLabel,
                            },
                          }}
                        />
                      </Row>
                      <Row>
                        <TextField
                          type="password"
                          id="confirm-password-muck"
                          label="Confirm Password"
                          name="passwordConfirm"
                          error={
                            errors.passwordConfirm && touched.passwordConfirm
                              ? true
                              : false
                          }
                          helperText={
                            errors.passwordConfirm &&
                            touched.passwordConfirm &&
                            errors.passwordConfirm
                          }
                          FormHelperTextProps={{ classes: helperTestClasses }}
                          fullWidth={true}
                          value={values.passwordConfirm}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          margin="normal"
                          InputProps={{
                            className: classes.multilineColor,
                          }}
                          InputLabelProps={{
                            classes: {
                              root: classes.label,
                              error: classes.erroredLabel,
                              focused: classes.focusedLabel,
                            },
                          }}
                        />
                      </Row>
                      <Row style={{ marginTop: 25, marginBottom: 15 }}>
                        <TextField
                          id="standard-select-currency"
                          select
                          label="Registering as"
                          name="register_as"
                          fullWidth={true}
                          error={
                            errors.register_as && touched.register_as
                              ? true
                              : false
                          }
                          helperText={
                            errors.register_as &&
                            touched.register_as &&
                            errors.register_as
                          }
                          FormHelperTextProps={{ classes: helperTestClasses }}
                          value={values.register_as}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          InputProps={{
                            className: classes.multilineColor,
                          }}
                          InputLabelProps={{
                            classes: {
                              root: classes.label,
                              error: classes.erroredLabel,
                              focused: classes.focusedLabel,
                            },
                          }}
                        >
                          {registeringAsOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Row>
                      {errorMessage && (
                        <CommonHtmlElement.HasError
                          style={{ marginTop: 10 }}
                          role="alert"
                        >
                          {errorMessage}
                        </CommonHtmlElement.HasError>
                      )}
                      {successMessage && (
                        <CommonHtmlElement.HasSuccess
                          style={{ marginTop: 10 }}
                          role="alert"
                        >
                          {successMessage}
                        </CommonHtmlElement.HasSuccess>
                      )}
                      <LoginLink to={"/login"}>
                        Allready have an account? Sign in.
                      </LoginLink>
                      <ButtonRow>
                        <Button
                          disabled={isSubmitting}
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          <span style={{ marginRight: "20px" }}>Sign Up</span>
                          <Bounce
                            color={Colors.white}
                            animating={isSubmitting}
                          />
                        </Button>
                      </ButtonRow>
                      <CommonLinks>
                        <CommonHtmlElement.LinksWrapper>
                          <CommonHtmlElement.StyleLink to={"/"}>
                            Terms of use
                          </CommonHtmlElement.StyleLink>
                        </CommonHtmlElement.LinksWrapper>
                        <CommonHtmlElement.LinksWrapper>
                          <CommonHtmlElement.StyleLink to={"/"}>
                            Privacy policy
                          </CommonHtmlElement.StyleLink>
                        </CommonHtmlElement.LinksWrapper>
                      </CommonLinks>
                    </form>
                  )}
                </Formik>
              </CommonHtmlElement.FormWrapper>
            </CommonHtmlElement.WelcomeBlock>
          </SignupWelcomeWrapper>
        </CommonHtmlElement.MainContainer>
      </CommonHtmlElement.MainWelcomeWrapper>
    </>
  );
};
