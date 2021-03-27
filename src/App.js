import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portolio";
import ContactMe from "./components/pages/ContactMe";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/ContactMe" component={ContactMe} />
            <Route default path="*" component={Home} />
          </Switch>
        </Router>
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
