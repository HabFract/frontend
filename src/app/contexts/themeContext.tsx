import React from "react"
import { theme } from "../definitions/styled/theme"
import { ThemeProvider } from "styled-components";

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
