import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./payPage.css";

const PayPage = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [focus, setFocus] = useState("");

  const handleNumberChange = (event) => {
    setNumber(event.target.value.replace(/\s/g, ""));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  const handleCVCChange = (event) => {
    setCVC(event.target.value.replace(/\s/g, ""));
  };

  const handleFocusChange = (event) => {
    setFocus(event.target.name);
  };

  return (
    <div className="pay-page-container">
      <div className="pay-page">
        <div className="pay-form">
          <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
          />
          <form className="payment-form">
            <div className="pay-input">
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                value={number}
                onChange={handleNumberChange}
                onFocus={handleFocusChange}
                maxLength="19"
              />
            </div>
            <div className="pay-input">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                onFocus={handleFocusChange}
              />
            </div>
            <div className="pay-input">
              <input
                type="tel"
                name="expiry"
                placeholder="Expiration Date (MM/YY)"
                value={expiry}
                onChange={handleExpiryChange}
                onFocus={handleFocusChange}
                maxLength="5"
              />
            </div>
            <div className="pay-input">
              <input
                type="tel"
                name="cvc"
                placeholder="CVC (3 digits)"
                value={cvc}
                onChange={handleCVCChange}
                onFocus={handleFocusChange}
                maxLength="3"
              />
            </div>
            <button type="submit">Pay</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PayPage;
