import React, { Component } from "react";
import "./creditcard.css";
class CreditCard extends Component {
  state = { number: "xxxx xxxx xxxx xxxx", name: "XXXX", valid: "xx/xx" };

  creditnbreHandler = event => {
    event.target.value = event.target.value.replace(/\D/g, "");
    event.target.value.length === 0
      ? this.setState({ number: "xxxx xxxx xxxx xxxx" })
      : this.setState({
          number: event.target.value.match(/.{1,4}/g).join("-")
        });
  };
  nameHandler = event => {
    event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
    event.target.value.length === 0
      ? this.setState({ name: "XXXX" })
      : this.setState({ name: event.target.value.toUpperCase() });
  };
  validateHandler = event => {
    event.target.value = event.target.value.replace(/\D/g, "");

    return event.target.value.length === 0
      ? this.setState({ valid: "xx/xx" })
      : ((event.target.value = event.target.value.match(/.{1,2}/g).join("/")),
        this.setState({ valid: event.target.value }));
  };
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column w-25 credit-card bg-primary text-white p-3 m-5">
          <h2 className="align-self-end">CREDIT CARD</h2>
          <img
            src="https://cdn140.picsart.com/288622685092211.png"
            className="credit-card-img"
            alt="chip"
          />
          <p className="align-self-start">{this.state.number}</p>
          <div className="d-flex justify-content-between">
            <div>
              <p>5422</p>
              <p>{this.state.name}</p>
            </div>
            <p>{this.state.valid}</p>
            <img
              src="https://riojawinetrips.com/wp-content/uploads/2019/06/visa-mastercard-logo.jpg"
              className="credit-card-img"
              alt="visa-mastercard"
            />
          </div>
        </div>
        <div className="d-flex flex-column">
          <input
            type="text"
            maxLength="16"
            placeholder=" Credit Card Number"
            className="m-2 nbre"
            onChange={this.creditnbreHandler}
          />
          <input
            type="text"
            placeholder=" Name"
            className="m-2"
            maxLength="20"
            onChange={this.nameHandler}
          />
          <input
            type="text"
            placeholder=" Validation Date"
            className="m-2"
            maxLength="5"
            onChange={this.validateHandler}
          />
        </div>
      </div>
    );
  }
}

export default CreditCard;
