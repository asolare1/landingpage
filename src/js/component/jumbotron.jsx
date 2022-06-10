import React from "react";

const Jumbotron = (props) => {
    return (
        <div class="p-5 mb-4 bg-light rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">{props.title}</h1>
        <p class="col-md-8 fs-4">{props.text}</p>
        <a href={props.btnurl} class="btn btn-primary btn-lg" type="button">{props.btn}</a>
      </div>
    </div>
    );
};

export default Jumbotron;