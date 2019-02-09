import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/custom.css';
import InfoSection from '../components/InfoSection';
import ReviewSection from '../components/ReviewSection';
import AddReviewButton from '../components/AddReviewButton'
class ProductPage extends Component {
  render() {
    return (

		<div className="container products_page">
			<InfoSection />
			<ReviewSection />
      <AddReviewButton />
		</div>

    );
  }
  constructor(props) {
    super(props)
  }
}

export default ProductPage;
