import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, FontFamily } from "../../../css/styles.modulecss";

const RightWrapper = styled.div`
  display: flex;
  color: ${Colors.white};
`;

const WelcomeBlock = styled.div`
  width: 100%;
  max-width: 750px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${Colors.black};
  padding: 25px;
  color: ${Colors.white};
  text-align: center;
  border: 1px solid ${Colors.dark_grey};
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 500;
  text-transform: uppercase;
  line-height: normal;
  font-size: 35px;
  font-family: ${FontFamily.fontSans};
`;

const MainContent = styled.p`
  max-width: 550px;
  margin: 0 auto;
  font-size: 24px;
  line-height: normal;
  margin-top: 15px;
  margin-bottom: 25px;
  font-family: ${FontFamily.fontSans};
`;

const LoginLink = styled(Link)`
  color: ${Colors.yellow};
  text-decoration: none;
  font-size: 15px;
  font-family: ${FontFamily.fontSans};
  :hover {
    color: ${Colors.yellow_hover};
  }
`;

const ExploreButton = styled.button`
  color: ${Colors.white};
  text-transform: uppercase;
  padding: 15px 30px;
  font-size: 15px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid ${Colors.white};
  margin: 0 auto;
  display: flex;
  margin-bottom: 15px;
  font-family: ${FontFamily.fontSans};
  :focus {
    outline: 0;
  }
  :hover {
    border: 1px solid ${Colors.yellow};
    background-color: ${Colors.yellow};
  }
`;

export {
  RightWrapper,
  WelcomeBlock,
  Title,
  MainContent,
  LoginLink,
  ExploreButton,
};
