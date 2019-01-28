import React from 'react'

import '../css/login.css';

const Api = require('../lib/Api.js')
import {
	Link
} from 'react-router-dom';
class AuthSignInComponent extends React.Component {

  render() {
    return (
      <div className=" wrapper fadeInDown">
      {this.getFormErrors().length > 0 && this.state.formSubmitted &&
            <Alert bsStyle="danger">
              <strong>Please correct the following errors:</strong>
              <ul>
              {
                this.getFormErrors().map((message,index) =>
                  <li key={'error_message_'+index}>{message}</li>
                )
              }
              </ul>
            </Alert>
          }
        <div id="formContent">
          {/* Logo */}
          <div className="fadeIn first">
            <h1>Oceneo</h1>
          </div>

          <form onSubmit={this.handleSubmit} role="form" className="loginform">

            <input
      			autoFocus
      			type="text"
      			id="email"
      			className="fadeIn second"
      			name="email"
      			placeholder="Email"
      			onChange={this.setEmail}
      			required />

            <input
      			type="password"
      			id="authPassword"
      			className="fadeIn third"
      			name="password"
      			placeholder="Hasło"
      			onChange={this.setPassword}
      			required />

            <input
      			type="submit"
      			className="fadeIn fourth"
      			defaultValue="Zaloguj" />

          </form>



          <div id="formFooter">
            <Link className="underlineHover" to="/">Powrót do strony głównej.</Link>
          </div>
        </div>

      </div>
    )
  }

  defaultState() {
    return {
      email: {
        value: '',
        error: 'Email is required.'
      },
      password: {
        value: '',
        error: 'Password is required.'
      },
      submit: {
        error: ''
      },
      formSubmitted: false
    }
  }

  constructor(props) {
    super(props)

    this.state = this.defaultState()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.setEmail = this.setEmail.bind(this)
  }

  getFormErrors() {
    let fields = ['email', 'password', 'submit']
    let errors = []
    fields.map(field => {
      let fieldError = this.state[field].error || ''
      if (fieldError.length > 0) {
        errors.push(fieldError)
      }
    })
    return errors
  }

  setEmail(event) {
    let newVal = event.target.value || ''
    let errorMessage = newVal.length === 0 ? 'Email is required.' : ''
    this.setState({
      email: {
        value: newVal,
        error: errorMessage
      },
      submit: {
        error: ''
      }
    })
  }

  setPassword(event) {
    let newVal = event.target.value || ''
    let errorMessage = newVal.length === 0 ? 'Password is required.' : ''
    this.setState({
      password: {
        value: newVal,
        error: errorMessage
      },
      submit: {
        error: ''
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      formSubmitted: true,
      submit: {
        error: ''
      }
    })

    if (this.getFormErrors().length > 0) {
      return false
    }

    Api.authenticateUser(this.state.email.value, this.state.password.value).then(jwt => {
      if (jwt) {
        this.props.propagateSignIn(jwt, this.props.history)
      }
      else {
        this.setState({
          submit: {
            error: 'Sorry, we could not log you in with the credentials provided. Please try again.'
          }
        })
      }
    })
  }
}

export default AuthSignInComponent
