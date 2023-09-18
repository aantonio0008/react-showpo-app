import { ThemeProvider } from "styled-components";
import fontSize from "./fontSize";
import fontFamily from "./fontFamily";
import typography from "./typography";

const theme = {
  fontSizes: fontSize,
  fontFamily: fontFamily,
  typography: typography,
};

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
