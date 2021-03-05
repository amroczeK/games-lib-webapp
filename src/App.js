import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      {/**
       * Route allows /game/:id to render on the home component
       */}
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
};

export default App;
