import React, { Component } from 'react'
import axios from 'axios'
import {
	Link
} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
var sortJsonArray = require('sort-json-array');
class Ranking extends Component {

  constructor(props) {
  super(props);
  this.state = {products:[]};
}


  componentDidMount() {

  //http://oceneo-api.herokuapp.com/api/products.json
  //https://jsonplaceholder.typicode.com/users

   axios.get('http://localhost:3000/api/ranking')
   .then(res => {
     console.log(res)
	 const products = res.data;
    sortJsonArray(products, 'avg', 'des');
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
						{product.name}<br/>

            <span>Opinie: {product.opinions_count}</span><br/>
            <StarRatingComponent
              name="rating"
              starCount={5}
              editing={false}
              value={product.avg}
              starColor="#FA9302"
              renderStarIcon={() => <i className="fa fa-star " aria-hidden="true" />} />




						</h2>
					</div>
				</div>
		</div>
				)}

				</div>


		 )
		}
}


export default Ranking
