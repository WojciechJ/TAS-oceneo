import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/custom.css';

class Profile extends Component {
  render() {
    return (

		<div className="container">


    <form onSubmit={this.handleSubmit} role="form" className="container">


                <div className="form-group row">
                <input
                type="text"
                name="email"
                className="form-control"
                value={this.props.appState.email}
                placeholder="E-mail"
                onChange={this.handleEmailChange}
                disabled
                required/>
                </div>


                <div className="form-group row">
                <input
                type="text"
                name="name"
                className="form-control"
                value={this.props.appState.name}
                placeholder="Imię"
                onChange={this.handleNameChange}
                disabled
                required/>
                </div>


                <div className="form-group row">
                <input
                type="text"
                name="surname"
                className="form-control"
                value={this.props.appState.surname}
                placeholder="Nazwisko"
                onChange={this.handleEmailChange}
                disabled
                required/>
                </div>



		</form>

		</div>

    );
  }
  constructor(props) {
    super(props)
  }
}

export default Profile;
