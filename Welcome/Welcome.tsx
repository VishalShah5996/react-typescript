import React from "react";
import { Typography } from "@material-ui/core";
import Background from "../../../images/img.jpg";

import { CommonHtmlElement } from "../../../css/styles.modulecss";

import {
  RightWrapper,
  WelcomeBlock,
  Title,
  MainContent,
  LoginLink,
  ExploreButton,
} from "./Welcome.modulecss";

export const Welcome = (): JSX.Element => {
  return (
    <div>
      <CommonHtmlElement.Header>
        <CommonHtmlElement.Logo href="#">Mucktracker</CommonHtmlElement.Logo>
        <RightWrapper>
          <CommonHtmlElement.LinksWrapper>
            <CommonHtmlElement.StyleLink to={"/login"}>
              Sign In
            </CommonHtmlElement.StyleLink>
          </CommonHtmlElement.LinksWrapper>
          <CommonHtmlElement.LinksWrapper>
            <CommonHtmlElement.StyleLink to={"/signup"}>
              Sign Up
            </CommonHtmlElement.StyleLink>
          </CommonHtmlElement.LinksWrapper>
        </RightWrapper>
      </CommonHtmlElement.Header>
      <CommonHtmlElement.MainWelcomeWrapper
        style={{ backgroundImage: `url(${Background})` }}
      >
        <CommonHtmlElement.MainContainer>
          <CommonHtmlElement.WelcomeWrapper>
            <WelcomeBlock>
              <Typography>
                <Title>Welcome to Mucktracker</Title>
                <MainContent>
                  A news application for assigned learning or individual
                  research.
                </MainContent>
                <ExploreButton>Explore</ExploreButton>
                <LoginLink to={"/login"}>
                  Allready have an account? Sign in.
                </LoginLink>
              </Typography>
            </WelcomeBlock>
          </CommonHtmlElement.WelcomeWrapper>
        </CommonHtmlElement.MainContainer>
      </CommonHtmlElement.MainWelcomeWrapper>
    </div>
  );
};
