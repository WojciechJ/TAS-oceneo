import React, { Component } from 'react'
import axios from 'axios'
import {
	Link
} from 'react-router-dom';

class ProductsContainer extends Component {

  constructor(props) {
  super(props);
  this.state = {products:[]};
}


  componentDidMount() {

  //http://oceneo-api.herokuapp.com/api/products.json
  //https://jsonplaceholder.typicode.com/users

   axios.get('http://localhost:3000/api/products')
   .then(res => {
     console.log(res)
	 const products = res.data;
     this.setState({products})
   })
   .catch(error => console.log(error))

 }

  render(){

		return(
				<div className="container">
				{this.state.products.map(product =>
				<div className="card container" key={product.id}>
				<div className="box">
					<Link to={'/product/'+product.id}>
						<div className="img container">
							<img src={product.image}/>
						</div>
					</Link>
					<div className="container">
						<h2>
						{product.name}<br/><span>{product.description}</span>
						</h2>
					</div>
				</div>
		</div>
				)}

				</div>


		 )
		}
}


export default ProductsContainer
