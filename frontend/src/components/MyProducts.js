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



 handleSubmit = (evt) => {
this.state.id = this.refs.prID.value;
 const { id } = this.state;

 const product = {
   id: this.state.id
   };

 axios.delete(`http://localhost:3000/api/products/${this.state.id}`, { product })
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

        	<div className="row product-list" >
            <div className="col-sm-1 ">
                      <img className="gallery-container-small " src={detail.image} />
            </div>
            <div className="col-sm-3">
                <div id="parametr-1" className="col-sm "><span className="bold">Nazwa:</span> {detail.name}</div>
            </div>
            <div className="col-sm">
              <div className="row">

                <LinkContainer exact to={"/editproduct/"+detail.id}>
                    <input type="button" defaultValue="edytuj" className="btn btn-primary" />
                </LinkContainer>


                  <form onSubmit={this.handleSubmit}>
                      <input type="hidden" value={detail.id}  ref="prID" />
                      <input type="submit" defaultValue="Usuń" className="btn btn-primary" />
                  </form>
              </div>


            </div>
        	</div>

	)}

</div>

)}}


export default withRouter(MyProducts);
