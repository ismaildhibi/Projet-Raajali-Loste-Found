import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./components/page/Home";
// import Card from './components/Card'
import Contacts from "./components/page/Contacts";
import Login from "./components/page/login";
import Signup from "./components/page/Signup";
import Add from "./components/page/Add";
import { PrivateRoute } from "./components/page/PrivateRoute";
import Details from "./components/Details";

// function component
const App = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log("searchValue: ", searchValue);
  return (
    <div>
      <Navbar search={x => setSearchValue(x)} />

      <Switch>
        <Route exact path="/" render={() => <Home test={searchValue} />} />
        <Route path="/Details/:id" component={Details} />
        <Route path="/contacts" component={Contacts} />
        <Route exact path="/login" component={Login} />
        <Route path="/Signup" component={Signup} />
        <PrivateRoute exact path="/Add" component={Add} />
        {/* <Route exact path="/Add" component={Add} /> */}

        {/* <Route path="/Add" component={Add} /> */}
        {/* <Route path="/Home" component={Home} /> */}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
