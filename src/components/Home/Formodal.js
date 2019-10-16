
import React from 'react';

class Formodal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return (
      <form action="#">
        <input type="text" placeholder="First Name" required/>
            <input type="text" placeholder="Last Name" required/>
            <input type="email" placeholder="Email" required/>
            <input type="text" placeholder="Phone" required/>
            <input type="password" placeholder="Password" required/>
            <button type="submit" className="bttn-mid btn-fill">Create Account</button>
      </form>
    );
  }
}

export default Formodal;
