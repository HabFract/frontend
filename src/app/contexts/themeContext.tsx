import React from "react"
import { Theme as ThemeDef } from "../theme/theme"
import { ThemeProvider } from "styled-components";

export const Theme = ({ children }) => <ThemeProvider theme={ThemeDef}>{children}</ThemeProvider>
