import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';
class AddReview extends Component {

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

  render(){
    if (this.state.loading) {
      return null
    }
        return(

	<div>
      {this.state.details.map(detail =>
	<div className="container">
        <div className="row">
            <div id="parametr-1" className="col-3 bold">Nazwa:</div>
            <div id="wartosc-1" className="col-sm"><p>{detail.name}</p></div>
        </div>
    </div>

	)}

</div>

)}}


export default withRouter(AddReview);
