import React, { Component } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import { connect } from "react-redux";
import { getinfos, deleteinfos } from "../../actions";
// import Add from '../../components/page/Add'
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getinfos();
  }
  render() {
    console.log("x: ", this.props);
    return (
      <div>
        <Carousel />
        <div className="titre">
          <h2>
            <span>THE WORLD'S LARGEST YES WE FOUND COMPANY</span>
          </h2>
        </div>
        <div className="intro-text">
          <p>
            Rajaali was founded to help address the increasing cost and
            time-consuming problem of valuable portable items being lost or
            stolen. Recovery tags have been designed to fit virtually any
            valuables such as keys, luggage, cell phones, wallets, laptops,
            sports equipment and even cats & dogs!
          </p>
        </div>

        <div
          style={{ display: "flex", flexWrap: "wrap", margin: "100px 149px" }}
        >
          {this.props.info
            .filter(e =>
              e.subject.toLowerCase().includes(this.props.test.toLowerCase())
            )
            .map(e => (
              <Card
                key={e._id}
                info={e}
                delete={() => this.props.deleteinfos(e._id)}
                getinfos={this.getinfos}
              />
            ))}
        </div>

        {/* <Add getinfos={this.getinfos} /> */}
      </div>
    );
  }
}

export default connect(
  state => {
    return { info: state.info, search: state.inputSearch };
  },
  { getinfos, deleteinfos }
)(Home);

// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { getinfos, deleteinfos } from "../../actions";

// class Home extends Component {
//   componentWillMount() {
//     this.props.getinfos();
//   }
//   render() {
//     return (
//       <div className="card">
//         {this.props.info.map((el, i) => (
//           <div
//             key={i}
//             style={{
//               border: "2px solid black",
//               width: "300px",
//               margin: "20px",
//               textAlign: "center"
//             }}
//           >

//            <img className="imgobject" src={el.image} />
//             <h1>Name: {el.name}</h1>
//             <h2>Email: {el.email} </h2>
//             <h3>Tel: {el.phone}</h3>
//             <h4>subject: {el.subject}</h4>

//             {/* <Link to={`/updatecontact/${el._id}`}> */}
//               <button>Update</button>
//             {/* </Link> */}
//             <button
//               onClick={() => {
//                 this.props.deleteinfos(el._id);
//               }}
//             >
//               Delete
//             </button>
//            <button>DETAILS</button>

//           </div>
//         ))}
//       </div>
//     );
//   }
// }
// export default connect(
//   state => {
//     return { contact: state.info };
//   },
//   { getinfos, deleteinfos }
// )(Home);

// import React, { Component } from 'react'
// import Card from './components/Card'
// export default class Home extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//              info:[]
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {
//         this.state.map.info(e=>(

//      <Card
//      key={e._id}

//      users={e}
//      edit={()=>{this.handeleEdit()}}
//      delete={()=>{this.handeleDelete(e._id)}}
//      />

//         ))
//                 }
//             </div>
//         )
//     }
// }
