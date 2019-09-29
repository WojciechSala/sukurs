import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import { fetchProduct } from './ProductDetailsActions';
import ImageSldier from './ProductDetailsImageSlider';
import ProductForm from './ProductDetailsForm';

const StyledProductDetails = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: ${({ theme }) => theme.font.size.mobile.s};
`;

const StyledProductDescription = styled.div`
  width: 245px;
  margin: 50px auto;

  p {
    font-weight: ${({ theme }) => theme.font.weight.light};
    line-height: 18px;
  }
`;

class ProductDetails extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProduct(this.props.match.params.slug));
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
        <ImageSldier
          images={[product.image, product.img1, product.img2, product.img3]}
        />

        <ProductForm
          name={product.name}
          price={product.price}
          sizes={product.sizes}
        />
        <StyledProductDescription>
          <h1>KILKA SŁÓW</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
            imperdiet lectus, venenatis iaculis diam. Nunc egestas mi vitae mi
            luctus bibendum. Vivamus consequat magna at ligula interdum, ac
            viverra lectus luctus. Integer lobortis id urna quis auctor.
            Maecenas pellentesque auctor risus vitae egestas. In ac suscipit
            odio. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla quis enim vehicula,
            pulvinar elit nec, interdum ante. Donec sollicitudin blandit cursus.
          </p>
        </StyledProductDescription>
      </StyledProductDetails>
    );
  }
}

const mapStateToProps = state => ({
  product: state.productDetailsReducer.item,
  loading: state.productDetailsReducer.loading,
  error: state.productDetailsReducer.error
});

export default connect(mapStateToProps)(ProductDetails);
