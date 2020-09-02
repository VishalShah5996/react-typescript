import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors, FontFamily } from "../../../css/styles.modulecss";

const CommonLinks = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  padding: 0;
  margin: 0;
`;

const SignupWelcomeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @media screen and (orientation: portrait) and (max-width: 767px) {
    height: 100vh;
  }
  @media screen and (orientation: landscape) and (max-width: 767px) {
    height: 100%;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 50px;
  button {
    background-color: ${Colors.yellow};
    border: 1px solid ${Colors.yellow};
    color: ${Colors.white};
    text-decoration: none;
    width: 48%;
    margin: 0 auto;
    text-transform: none;
    font-size: 18px;
    :hover {
      background-color: transparent;
      border: 1px solid ${Colors.white};
    }
    @media (max-width: 767px) {
      font-size: 15px;
    }
  }
`;
const FormTitle = styled.h4`
  margin: 0;
  font-weight: 600;
  text-transform: capitalize;
  line-height: normal;
  font-size: 15px;
  text-align: left;
  font-family: ${FontFamily.fontSans};
  color: ${Colors.white};
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 479px) {
    flex-direction: column;
  }
`;
const Column = styled.div`
  width: 48%;
  margin-right: 4%;
  display: flex;
  :last-child {
    margin-right: 0;
  }
  @media (max-width: 479px) {
    width: 100%;
    margin-right: 0;
  }
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

export {
  CommonLinks,
  FormTitle,
  Row,
  Column,
  LoginLink,
  ButtonRow,
  SignupWelcomeWrapper,
};
