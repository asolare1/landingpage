import React from "react";


const Cards = (props) => {
   
  return (
        
  <div class="col">
    <div class="card h-100">
      <img src={props.imgurl}></img>
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.cardtext}</p>
      </div>
      <div class="card-footer">
      <a href={props.btnurl} class="btn btn-primary">{props.btntitle}</a>
      </div>
    </div>
  </div>
    );
};

export default Cards;