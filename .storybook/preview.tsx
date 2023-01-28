import React from "react";
require("../src/example/common/dayjs.setup");
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../src/example/material-ui/theme";

export const withMuiTheme = (Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
  </ThemeProvider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [withMuiTheme];
