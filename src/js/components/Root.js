// @flow
import React from "react";
import { Provider } from "react-redux";

import Routes from "./Routes";

type TypeAppPropTypes = { store: {} };

const Root = ({ store }: TypeAppPropTypes) => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default Root;
