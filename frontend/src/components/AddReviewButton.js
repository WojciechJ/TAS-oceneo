import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from "react-dom";
import { withRouter } from "react-router";
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import ReviewSection from '../components/ReviewSection';
class AddReviewButton extends Component {
 
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
  
 
   axios.get(`https://oceneo-api.herokuapp.com/api/products/${product_id}`)
   .then(res => {
     console.log(res)
	 const details = res.data;
     this.setState({details})
   })
   .catch(error => console.log(error))
 }
 
  render(){
 
        return(
 
	<div>
      {this.state.details.map(detail => 
	<div className="row">
		<div className="container">
					<Link to={'/addreview/'+detail.id}><input type="button" value="Dodaj opinię" className="add btn btn-outline-primary"></input></Link>
				</div>
	</div>
	)}

</div>

)}}
 
 
export default withRouter(AddReviewButton);