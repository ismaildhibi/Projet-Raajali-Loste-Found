import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    /* <div class="card text-dark bg-light ">
        <center>
          {" "}
          <img
            class="card-img-top"
            src={props.info.image}
            alt="image alt text here"
          />
        </center>

        <div class="card-body ">
          <h5 class="card-title">Name:{props.info.name}</h5>

          <p class="card-text text-left">Subject :{props.info.subject} </p>
          <p class="card-text text-left">phone :{props.info.phone}</p>
        </div>

        <div class="card-footer bg-success text-right text-danger">
          <Link
            className="nav-link text-white text-uppercase ml-5"
            to={`/Details/${props.info._id}`}
          >
            <button
              class="btn btn-outline-light btn-sm"
              onClick={() => console.log(props.info._id)}
            >
              Deatils
            </button>{" "}
          </Link>
          <button class="btn btn-outline-light btn-sm" onClick={props.delete}>
            DELETE
          </button>
        </div>
      </div> */

    <div className="card">
      <img src={props.info.image} className="card-img-top" alt="..." />
      <h5 className="card-title">Name:{props.info.name}</h5>
      <p className="card-text">Subject :{props.info.subject}</p>
      <p className="card-text">phone :{props.info.phone} </p>
      <Link to={`/Details/${props.info._id}`}>
        <button className="btn btn-primary stretched-link">Détails </button>
      </Link>
    </div>
  );
}

export default Card;

// https://img.bfmtv.com/c/630/420/ce7/8f3317623e8e711058b11c6965521.jpg

// import React from 'react';
// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';

// const Cards = () => {
//   return (
//     <div>
//       <Card>
//         <CardImg top width="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS1zCxYn26o9NUOyKBw_CmpNGv83f9srT7wa_u3lgGzD_LoHqwl" alt="Card image cap" />
//         <CardBody>
//           <CardTitle>Name:</CardTitle>
//           <CardSubtitle>Subject:</CardSubtitle>
//           <CardText>phone:</CardText>
//           <CardText>Date:</CardText>
//           <Button>DELETE</Button>
//           <Button>EDIT</Button>
//           <Button>DETAILS</Button>

//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default Cards;
