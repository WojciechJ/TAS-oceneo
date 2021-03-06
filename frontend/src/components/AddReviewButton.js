import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
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
					<LinkContainer exact to={"/addreview/"+detail.id}>
            <i className="far fa-comment-dots fa-3x login-button"></i> 
					</LinkContainer>
	)}

</div>

)}}


export default withRouter(AddReviewButton);
