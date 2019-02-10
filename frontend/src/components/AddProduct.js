import React, { Component } from 'react';
import axios from 'axios';
import '../css/bootstrap.css';
import '../css/custom.css';
import { Redirect } from 'react-router'
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

class AddProduct extends Component {

	constructor() {
    super();
		this.state = {
      fireRedirect: false
    }
    };

  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }
	handleImageChange = (evt) => {
    this.setState({ image: evt.target.value });
  }
	handleDescriptionChange = (evt) => {
    this.setState({ description: evt.target.value });
  }


  handleSubmit = (evt) => {
  const { name, description, image,  product_id, user_id} = this.state;

	const product = {
	  name: this.state.name,
	  description: this.state.description,
	  image: this.state.image,
	  product_id: this.state.product_id,
		user_id: this.props.appState.user_id
    };

	axios.post(`http://localhost:3000/api/products`, { product })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

		this.setState({ fireRedirect: true })
  }


	render(){
		const { from } = this.props.location.state || '/'
	  const { fireRedirect } = this.state

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
					onChange={this.handleNameChange}
					required/>
				</div>


				<div className="form-group row">
				<input
					type="text"
					name="image"
					className="form-control"
					placeholder="Zdjęcie"
					onChange={this.handleImageChange}
					required/>
				</div>


				<div className="form-group row">
        <textarea
					name="description"
					className="form-control"
					placeholder="Opis"
					rows={3}
					onChange={this.handleDescriptionChange}
			    required/>
        </div>

		    <hr />

        <div className="form-group row">
            <div className="center">
              <input type="submit" defaultValue="Dodaj Produkt" className="btn btn-primary" />
            </div>
        </div>
		</form>
		{fireRedirect && ( <Redirect to={from || '/'}/>  )}
		</div>




		);


	}
}

export default AddProduct;
