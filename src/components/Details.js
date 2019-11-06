import React, { Component } from "react";
import axios from "axios";
import { Link } from "@material-ui/core";
export class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {}
    };
  }
  getinfo = () => {
    axios.get(`/info/${this.props.match.params.id}`).then(response => {
      if (response.data) {
        console.log("response", response);
        this.setState({ info: response.data });
      }
    });
  };
  deleteel = () => {
    axios.delete(`/info/${this.props.match.params.id}`).then(response => {
      if (response.data) {
        console.log("response", response);
        this.setState({ info: response.data });
      }
    });
  };

  componentDidMount() {
    this.getinfo();
  }
  render() {
    console.log(this.state);
    return (
      <div className="imagedetail">
        <div className="details">
          <img className="imagecard" src={this.state.info.image} alt="image" />
          <div className="detailcard">
            <h5>Name: {this.state.info.name}</h5>
            <p>Phone: {this.state.info.phone}</p>
            <p>Subject: {this.state.info.subject}</p>
            <Link to="/">
              <button className="btn btn-primary" onClick={this.deleteel}>
                DELETE
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
