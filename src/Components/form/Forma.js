import React, { Component } from "react";

class Forma extends Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    select: "",
    subscription: false,
    gender: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkedHandler = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  validateName = () => {
    const { firstName } = this.state;
    if (firstName.length < 5) {
      alert(`Ismingizni 5 harfdan oshiring iltimos!`);
    }
  };

  validateEmail = () => {
    const { email } = this.state;
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexp.test(email)) {
      alert(`Email is not valid, to'g'ri yozing`);
    }
  };

  render() {
    const { firstName, email, message, select, subscription } = this.state;
    const { changeHandler, validateName, validateEmail, checkedHandler } = this;
    return (
      <div>
        <h1>Forma Validation</h1>
        <input
          type="text"
          placeholder="firstname"
          name="firstName"
          value={firstName}
          onChange={changeHandler}
          onBlur={validateName}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={changeHandler}
          onBlur={validateEmail}
        />
        <textarea
          name="message"
          value={message}
          placeholder="Message"
          onChange={changeHandler}
        ></textarea>
        <select name="select" value={select} onChange={changeHandler}>
          <option disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="subscription"
            checked={subscription}
            onChange={checkedHandler}
          />
          Subscription
        </label>
        <div className="quti">
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={changeHandler}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={changeHandler}
          />
          Female
        </div>
      </div>
    );
  }
}

export default Forma;
