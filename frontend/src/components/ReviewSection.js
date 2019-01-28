import React, { Component } from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

class ReviewSection extends Component {

  constructor(props) {
  super(props);
  this.state = {
  rates:[],
  rating: 1,
  rating_custom_icon: 1

  };

}


  componentDidMount() {
	const {
      match: {
        params: { product_id }
      }
    } = this.props;

   axios.get(`http://localhost:3000/api/products/${product_id}/rates`)
   .then(res => {
     console.log(res)
	 const rates = res.data;
     this.setState({rates})
   })
   .catch(error => console.log(error))
 }



  render(){


		return(

			<div id="comments" className="container products">
				{this.state.rates.map(rate =>

				<div className="row" key={rate.id}>
					<div className="col-3 col-lg-2">
						<i className="far fa-user-circle fa-2x"></i>
						<div className="review-block-name"></div>
						<div className="review-block-date">{(new Date()).toLocaleDateString('en-US', rate.created_at)}<br /></div>
					</div>

				<div className="col-9 col-lg-10">


                  <div className="review-block-rate">
                    <StarRatingComponent
          					name="rating"
          					starCount={5}
          					editing={false}
          					value={rate.value}
          					starColor="#FA9302"
				             renderStarIcon={() => <span><i className="fa fa-star fa-2x" aria-hidden="true" /></span>} />
                  </div>
				  <div className="review-block-description">{rate.comment}{rate.name}</div>
                  <hr />

{/*col-sm-10*/}</div>
				<hr/>

{/*row*/}</div>

)}

{/*container products*/}</div>

)
}
}





export default withRouter(ReviewSection);
