import React, { Component }  from 'react';
import {Navbar, NavbarBrand} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/bootstrap.css';
import '../css/custom.css';

class AppHeaderComponent extends Component {



  render() {
    return (
      <header className="container">


        <Navbar color="faded" >

          <NavbarBrand className="mr-auto"><span className="mainlogo"><h1>Oceneo</h1></span></NavbarBrand>

          <LinkContainer exact to="/">
              <span ><i className="fas fa-home fa-2x login-button"></i></span>
          </LinkContainer>

          <LinkContainer exact to="/ranking">
              <span ><i className="fab fa-hackerrank fa-2x login-button"></i></span>
          </LinkContainer>

          {!this.props.appState.jwt &&
              <LinkContainer exact to="/sign-in">
                <span ><i className="fas fa-sign-in-alt fa-2x login-button"></i></span>
              </LinkContainer>
            }

            {this.props.appState.jwt &&
              <LinkContainer exact to="/profile">
                  <i className="fas fa-user fa-2x login-button"></i>
              </LinkContainer>
            }
            {this.props.appState.jwt &&
              <LinkContainer exact to={"/myproducts/"+this.props.appState.user_id}>
                  <i className="fas fa-list fa-2x login-button"></i>
              </LinkContainer>
            }
            {this.props.appState.jwt &&

              <LinkContainer exact to="/addproduct">
                <i className='far fa-plus-square fa-2x login-button'></i>
              </LinkContainer>

            }
            {this.props.appState.jwt &&

              <LinkContainer exact to="/sign-out">
                <i className='fas fa-sign-out-alt fa-2x login-button'></i>
              </LinkContainer>

            }





		   <form className="searchbar row" role="search">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Funkcjonalność do zaimplementowania" name="srch-term" id="srch-term" />
              <div className="input-group-btn">
                <button className="btn btn-outline-success form-control-menu" type="submit">Szukaj</button>
              </div>
            </div>
        </form>
        </Navbar>
        {/*MENU--//*/}
      </header>

    )
  }

  constructor(props) {
    super(props)
  }

}

export default AppHeaderComponent
