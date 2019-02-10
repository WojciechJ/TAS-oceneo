import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
class MyProducts extends Component {

  constructor(props) {
  super(props);
  this.state = {details:[]};
}


  componentDidMount() {
	const {
      match: {
        params: { user_id }
      }
    } = this.props;


   axios.get(`http://localhost:3000/api/userproducts/${user_id}`)
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

	<div className="container ">
      {this.state.details.map(detail =>

        	<div className="row product-list ">
            <div className="col-sm-1 ">
                      <img className="gallery-container-small " src={detail.image} />
            </div>
            <div className="col-sm-3">
                <div id="parametr-1" className="col-sm "><span className="bold">Nazwa:</span> {detail.name}</div>
            </div>
            <div className="col-sm">
              <div className="row">
                <LinkContainer exact to={"/editproduct/"+detail.id}>
                      <i className="fas fa-pencil-alt fa-1x login-button col-sm-1"></i>
                </LinkContainer>

                <LinkContainer exact to={"/editproduct/"+detail.id}>
                      <i className="fas fa-trash-alt fa-1x login-button col-sm-1"></i>
                </LinkContainer>
              </div>


            </div>
        	</div>

	)}

</div>

)}}


export default withRouter(MyProducts);
