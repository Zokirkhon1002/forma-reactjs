import React, { Component } from "react";

class Amaliyot extends Component {
  state = {
    password: "6243492Xan",
    email: "",
    value: "Submit",
    isAgreeWithTerms: false,
    gender: "",
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkedHandler = (e) => {
    this.setState({ isAgreeWithTerms: e.target.checked });
  };

  SaveHandler = () => {
    const { email, isAgreeWithTerms, password } = this.state;
    const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validateEmail = regexp.test(email);
    const isValidChecked = isAgreeWithTerms;

    if(!validateEmail){
        alert("sizning emailingiz qabul qilinmadi!, qaytadan harakat qilib ko'ring.");
        return;
    }
    if(password !== '6243492Xan'){
        alert("parolni o'zgartirmang!!!");
        return;
    }
    if(!isValidChecked){
        alert("qonun qoidalarga rozi bo'lishingiz kerak.");
        return
    }



    this.setState({email: '', password: "6243492Xan", isAgreeWithTerms: false});

    alert("A'zo bo'lganingiz uchun katta rahmat")
  };


  render() {
    const { password, email, value, isAgreeWithTerms } = this.state;
    const { changeHandler, checkedHandler } = this;
    return (
      <div>
        <h1>Forma Validation</h1>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={email}
          onChange={changeHandler}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={changeHandler}
        />

        <label>
          <input
            type="checkbox"
            name="isAgreeWithTerms"
            checked={isAgreeWithTerms}
            onChange={checkedHandler}
          />
          Barcha qonun qoidalarga roziman <a href="https://input-speaker.netlify.app">ko'proq o'rganish...</a>
        </label>
        <input type="submit" value={value} onClick={this.SaveHandler}></input>
      </div>
    );
  }
}

export default Amaliyot;
