// @flow
import React from "react";
import { render } from "react-dom";

import store from "./configureStore";
import Root from "./components/Root";

import "../css/main.scss";

const entryId = "app";
const appEntry = document.getElementById(entryId);

render(<Root store={store} />, appEntry);
