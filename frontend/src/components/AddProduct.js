import React, { Component } from 'react';
import axios from 'axios';
import '../css/bootstrap.css';
import '../css/custom.css';
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

class AddProduct extends Component {

	constructor() {
    super();
    };




  handleDescriptionChange = (evt) => {
    this.setState({ comment: evt.target.value });
  }

  handleSubmit = (evt) => {
    const { name, description, image,  product_id, user_id, jwt} = this.state;

	const product = {
	  name: this.state.name,
	  description: this.state.description,
	  image: this.state.image,
	  product_id: this.state.product_id,
		user_id: this.props.appState.user_id,
		jwt: this.props.appState.jwt
    };

	axios.post(`http://localhost:3000/api/products`, { product })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }


	render(){


		return(

		<div>
			<form onSubmit={this.handleSubmit} role="form" className="container">

			  <hr />
				<div className="form-group row">
				<input
				type="text"
				name="name"
				className="form-control"
				placeholder="Nazwa"
				onChange={this.handleEmailChange}
				required/>
				</div>
				<div className="form-group row">
				<input
				type="text"
				name="image"
				className="form-control"
				placeholder="Zdjęcie"
				onChange={this.handleEmailChange}
				required/>
				</div>

				<div className="form-group row">
        <textarea
				name="description"
				className="form-control"
				placeholder="Opis"
				rows={3}

				onChange={this.handleDescriptionChange}
				/>
        </div>

		<hr />


          <div className="form-group row">
            <div className="center">
              <input type="submit" defaultValue="Dodaj Produkt" className="btn btn-primary" />
            </div>
          </div>

		</form>
		<div className="container">
		<div className="form-group row">
		User Email
		<input
		type="text"
		name="email"
		className="form-control"
		value={this.props.appState.email}
		placeholder="E-mail"
		onChange={this.handleEmailChange}
		disabled
		/>
		</div>
		<div className="form-group row">
		User JWT
		<input
		type="text"
		name="email"
		className="form-control"
		value={this.props.appState.jwt}
		placeholder="E-mail"
		onChange={this.handleEmailChange}
		disabled
		/>
		</div>
		</div>
		</div>




		);


	}
}

export default AddProduct;
