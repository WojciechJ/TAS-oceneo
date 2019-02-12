import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
class EditProduct extends Component {

  constructor(props) {
  super(props);
  this.state = {details:[]};

}

componentDidMount() {
	const {
			match: {
				params: { product_id }
			}
		} = this.props;
 axios.get(`http://localhost:3000/api/products/${product_id}`)
 .then(res => {
	 console.log(res)
 const details = res.data;
	 this.setState({details})
 })
 .catch(error => console.log(error))
}



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

 this.state.id = this.refs.idVal.value;

 const { name, description, image,  product_id, user_id} = this.state;

 const product = {
	 name: this.state.name,
	 description: this.state.description,
	 image: this.state.image,
	 product_id: this.state.product_id,
	 user_id: this.props.appState.user_id
	 };

 axios.patch(`http://localhost:3000/api/products/${this.state.id}`, { product })
		 .then(res => {
			 console.log(res);
			 console.log(res.data);
		 })

 }

  render(){
    if (this.state.loading) {
      return null
    }
        return(

	<div className="container ">
      {this.state.details.map(detail =>
				<form onSubmit={this.handleSubmit} role="form" className="container">

					<hr />

					<div className="form-group row">
					<input
						type="hidden"
						name="name"
						className="form-control"
						value={detail.id}
						ref="idVal"
						required/>
					</div>


					<div className="form-group row">
					<label for="name" className="bold">Nazwa:</label>
					<input
						type="text"
						name="name"
						className="form-control"
						defaultValue={detail.name}
						onChange={this.handleNameChange}

						required/>
					</div>


					<div className="form-group row">
					<label for="image" className="bold">Zdjęcie:</label>
					<input
						type="text"
						name="image"
						className="form-control"
					  defaultValue={detail.image}
						onChange={this.handleImageChange}

						required/>
					</div>


					<div className="form-group row">
					<label for="description" className="bold">Opis:</label>
					<textarea
						name="description"
						className="form-control"
						defaultValue={detail.description}
						rows={3}
						onChange={this.handleDescriptionChange}

						required/>
					</div>

					<hr />

					<div className="form-group row">
							<div className="center">
								<input type="submit" defaultValue="Zapisz zmiany" className="btn btn-primary" />
							</div>
					</div>
			</form>


	)}

</div>

)}}


export default withRouter(EditProduct);
