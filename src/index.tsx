import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/constants";
import "./i18n";
import App from "./App";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

ReactDOM.render(
    <Suspense fallback={<div>Loading..</div>}>
        <ThemeProvider theme={theme}>
            <ReactQueryCacheProvider queryCache={queryCache}>
                <App />
            </ReactQueryCacheProvider>
        </ThemeProvider>
    </Suspense>,
    document.getElementById("root")
);
