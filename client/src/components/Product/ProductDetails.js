import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import { fetchProduct } from './ProductDetailsActions';

const StyledProductDetails = styled.div`
  width: 150px;
  height: 200px;
  max-width: calc((100vw - 36px) / 2);
  font-size: ${({ theme }) => theme.font.size.mobile.xs};
`;

class ProductDetails extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProduct());
  }

  render() {
    const { error, loading, product } = this.props;

    if (error)
      return (
        <StyledProductDetails>
          <div>Error {error.message}</div>
        </StyledProductDetails>
      );

    if (loading)
      return (
        <StyledProductDetails>
          <div>Loading animation</div>
        </StyledProductDetails>
      );

    return (
      <StyledProductDetails>
        <Navbar />
        {product.map(item => (
          <p></p>
          // key={product._id}
          // slug={product.slug}
          // name={product.name}
          // price={product.price}
          // image={product.image.filename}
          // />
        ))}
      </StyledProductDetails>
    );
  }
}

const mapStateToProps = state => ({
  product: state.productDetailsReducer.items,
  loading: state.productDetailsReducer.loading,
  error: state.productDetailsReducer.error
});

export default connect(mapStateToProps)(ProductDetails);
