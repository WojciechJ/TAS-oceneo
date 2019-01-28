import React from 'react'
import {Row } from 'react-bootstrap'
import ProductsContainer from '../components/ProductsContainer';
class PageHomeComponent extends React.Component {

  render() {
    return (
      <Row>
          <ProductsContainer />
      </Row>
    )
  }

  constructor(props) {
    super(props)
  }

}

export default PageHomeComponent
