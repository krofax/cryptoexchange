import React from 'react';



class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
      <form action="#">
        <input type="email" placeholder="Email" required/>
        <input type="password" placeholder="Password" required/>
        <button type="submit" className="bttn-mid btn-fill">Login</button>
      </form>
    );
  }
}

export default FormLogin;