import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Footer from "../layouts/Footer";

class login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    const { password, email } = this.state;
    console.log(email);
    axios.post("/user/login", { password, email }).then(res =>
      //  cookies
      {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/Add");
      }
    );
  };
  configtoken = () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json"
      }
    };
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  };

  componentDidMount() {
    axios
      .get("/user/current", this.configtoken())
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
  }
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div class="container py-5">
            <div class="row">
              <div class="col-md-12">
                <h2 class="text-center mb-5"></h2>
                <div class="row">
                  <div class="col-md-6 mx-auto">
                    <div class="card border-secondary">
                      <div class="card-header">
                        <h3 class="mb-0 my-0" color="white">
                          Login
                        </h3>
                      </div>
                      <div class="form-group">
                        <label for="email1" class="col-sm-2 control-label">
                          Email:
                        </label>
                        <div class="col-sm-5">
                          <input
                            type="email"
                            class="form-control inputstl"
                            id="email1"
                            placeholder="Enter Email"
                            name="email"
                            onChange={this.handlechange}
                          />
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="password1" class="col-sm-4 control-label">
                          Password:
                        </label>
                        <div class="col-sm-5">
                          <input
                            type="password"
                            class="form-control inputstl"
                            id="password1"
                            placeholder="Password here"
                            name="password"
                            onChange={this.handlechange}
                          />
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="col-sm-offset-4 col-sm-4">
                          <button
                            type="button"
                            class="btn btn-lg btn-block btn-primary"
                            onClick={this.login}
                          >
                            Sing-in{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(login);
