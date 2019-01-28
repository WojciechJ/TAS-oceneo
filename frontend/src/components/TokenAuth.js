import React from 'react'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AppHeader from './AppHeader.js'
import AuthSignIn from './AuthSignIn.js'
import AuthSignOut from './AuthSignOut.js'
import PageHome from './PageHome.js'
import ProductPage from '../components/ProductPage.js'
import Footer from '../components/Footer.js';
import Ranking from '../components/Ranking.js';
import Profile from '../components/Profile.js';
import AddProduct from '../components/AddProduct.js'
const Api = require('../lib/Api.js')


class TokenAuthComponent extends React.Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  render() {
    return (
      <Router>
        <div>

          <AppHeader appState={this.state} />

          <Route exact path="/" component={PageHome} />
          <Route exact path="/ranking" component={Ranking} />
          <Route path="/product/:product_id" component={ProductPage}/>

          {!this.state.jwt &&
            <Route
              exact path="/sign-in"
              render={(routeProps) => (
                <AuthSignIn {...routeProps} propagateSignIn={this.propagateSignIn} />
              )}
            />
          }

          {this.state.jwt &&
            <Route
              exact path="/sign-out"
              render={(routeProps) => (
                <AuthSignOut {...routeProps} propagateSignOut={this.propagateSignOut} />
              )}
            />
          }
          {this.state.jwt &&
            <Route
              exact path="/addproduct"
              render={(routeProps) => (
                <AddProduct {...routeProps} appState={this.state} />
              )}
            />
          }
          {this.state.jwt &&
            <Route
              exact path="/profile"
              render={(routeProps) => (
                <Profile {...routeProps} appState={this.state} />
              )}
            />
          }

            <Footer/>
        </div>

      </Router>
    )
  }

  componentDidMount() {
    this.getUser()
    this.getPages()
  }

  defaultState() {
    return {
      cookieName: 'rails-react-token-auth-jwt',
      email: undefined,
      jwt: undefined,
      user_id: undefined,
      image: undefined,
      name: undefined,
      surname: undefined,
      pages: []
    }
  }

  constructor(props) {
    super(props)

    this.state = this.defaultState()

    this.propagateSignIn = this.propagateSignIn.bind(this)
    this.propagateSignOut = this.propagateSignOut.bind(this)
  }

  propagateSignIn(jwt, history = undefined) {
    const { cookies } = this.props
    cookies.set(this.state.cookieName, jwt, { path: '/' })
    this.getUser(history)
  }

  propagateSignOut(history = undefined) {
    const { cookies } = this.props
    cookies.remove(this.state.cookieName)
    this.setState({
      email: undefined,
      jwt: undefined,
      user_id: undefined,
      image: undefined,
      name: undefined,
      surname: undefined
    })
    if (history) history.push('/')
  }



  getUser(history = undefined) {
    const { cookies } = this.props
    let jwt = cookies.get(this.state.cookieName)
    if (!jwt) return null

    Api.getCurrentUser(jwt).then(response => {
      if (response !== undefined) {
        this.setState({
          email: response.email,
          user_id: response.id,
          image: response.image,
          name: response.name,
          surname: response.surname,
          jwt: jwt

        })
        if (history) history.push('/')
      }
      else {
        // user has cookie but cannot load current user
        cookies.remove(this.state.cookieName)
        this.setState({
          email: undefined,
          jwt: undefined,
          user_id: undefined,
          image: undefined,
          name: undefined,
          surname: undefined

        })
      }
    })
  }

}

export default withCookies(TokenAuthComponent)
