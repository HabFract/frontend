// import React from "react";
// import { addDecorator } from "@storybook/react";
// import { Theme as ThemeDef } from "@app/theme/theme.ts"
// import { ThemeProvider } from "styled-components";
import '/src/index.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// const themeDecorator = (storyFn) => (
//     <ThemeProvider theme={ThemeDef}>
//       {storyFn()}
//     </ThemeProvider>
//   )

// addDecorator(themeDecorator);
