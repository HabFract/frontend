
import { toggleTheme } from "@zougt/vite-plugin-theme-preprocessor/dist/browser-utils";
import Button from "antd/lib/button";
import React from "react";


const setTheme = (scopeName) => {
  toggleTheme({
    scopeName,
  });
};

export const Switcher: React.FunctionComponent<any> = (
    _props: any,
  ) => {
    return (
        <div>
            <Button type="primary" onClick={() => setTheme('theme-default')}>
            Light Mode
            </Button>
            <Button type="default" onClick={() => setTheme('theme-dark')}>
            Dark Mode
            </Button>
        </div>
    )
  }