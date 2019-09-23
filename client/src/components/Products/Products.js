import React, { Component } from 'react';
import styled from 'styled-components';
import Product from '../Product';
import { fetchProducts } from './ProductsActions';
import { connect } from 'react-redux';

const StyledProducts = styled.div`
  width: calc(100vw - 32px);
  padding: 0 16px;
  margin: 40px 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 50px;
  justify-items: center; /** will depend on Product.js odd and even */
`;

class Products extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { error, loading, products } = this.props;

    if (error)
      return (
        <StyledProducts>
          <div>Error {error.message}</div>
        </StyledProducts>
      );

    if (loading)
      return (
        <StyledProducts>
          <div>Loading animation</div>
        </StyledProducts>
      );

    return (
      <StyledProducts>
        <ul>
          {products.map(product => (
            <li key={product._id}>{product.name}</li>
          ))}
        </ul>

        {/* <span>{product}</span> */}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </StyledProducts>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.items,
  loading: state.productsReducer.loading,
  error: state.productsReducer.error
});

export default connect(mapStateToProps)(Products);
