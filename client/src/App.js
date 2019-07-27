import React from "react";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";

import { Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tweedData: [],
      formQuery: "",
      userName: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    //console.log("THIS IS HANDLE SUBMIT STATE", this.state);
    this.setState(prevState => ({
      tweedrData: prevState.tweedrData.push(this.state.formQuery)
    }));
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <main>
          <Header userName={this.state.userName} />
          <Switch>
            <Route path="/login" render={() => <Login />} />
            <Route path="/logout" render={() => <Logout />} />
            <Route path="/login" render={() => <Register />} />
            <Route
              path="/user-profile"
              rendeer={() => <UserProfile userName={userName} />}
            />
            <Route
              path="/"
              render={props => (
                <Home
                  {...props}
                  tweedData={this.state.tweedData}
                  formQuery={this.state.formQuery}
                  handleChange={this.state.handleChange}
                  handleSubmit={this.state.handleSubmit}
                />
              )}
            />
          </Switch>
          <Footer userName={this.state.userName} />
        </main>
      </div>
    );
  }
}

export default App;
