import "./App.css";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "../About/About";
import Button from "../Button/Button";
import Contact from "./../Contact/Contact";
import Layout from "../Layout/Layout";
import Products from "../Products/Products";
import products from "./products.json";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout>
              <Products data={products} />
            </Layout>
          </Route>

          <Route path="/about">
            <Layout>
              <About />
            </Layout>
          </Route>
          <Route path="/contact">
            <Layout>
              <Contact />
            </Layout>
          </Route>
          <Button />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
