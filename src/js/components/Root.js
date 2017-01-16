// @flow
import React from "react";
import { Provider } from "react-redux";

import App from "./App";

type TypeAppPropTypes = { store: {} };

const Root = ({ store }: TypeAppPropTypes) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
