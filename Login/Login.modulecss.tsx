import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../../css/styles.modulecss";
import { Theme, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  // InputDesign
  multilineColor: {
    color: Colors.white,
    '&::after': {
      border: `1px solid ${Colors.white}`,
    },
    '&::before': {
      borderBottom: `1px solid ${Colors.white}`,
    },
    '&:hover:not($disabled):before': {
      borderBottom: `1px solid ${Colors.white}!important`,
      '@media (hover: none)': {
        borderBottom: `1px solid ${Colors.white}`,
      },
    },
  },
  textField: {
    position: "relative",
  },
  label: {
    '&$erroredLabel': {
      color: Colors.red,
    },
    '&$focusedLabel': {
      color: Colors.white,
    },
    color: Colors.white,
    fontSize: 14,
  }
}));

const CheckSpan = styled.span`
  font-size: 15px;
`;
const CheckboxRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const ForgotLink = styled(Link)`
  display: flex;
  color: ${Colors.blue};
  text-decoration: none;
  margin-top: 9px;
  :hover {
    color: ${Colors.white};
  }
  font-size: 15px;
`;
const ButtonRow = styled.div`
  display: flex;
  margin-top: 30px;
  button {
    background-color: ${Colors.yellow};
    border: 1px solid ${Colors.yellow};
    color: ${Colors.white};
    text-decoration: none;
    width: 48%;
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
  a {
    text-decoration: none;
    width: 48%;
    margin-left: 4%;
    button {
      width: 100%;
    }
  }
`;

export { CheckSpan, CheckboxRow, ForgotLink, ButtonRow };
