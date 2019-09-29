import React, { Component } from 'react';
import styled from 'styled-components';

const StyledImageSlider = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  /* 100px of bottom form component + 64px of navbar and borders */
  height: calc(100vh - 100px - 64px);
`;

const StyledSliderElement = styled.img`
  max-width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

class ImageSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  async componentDidMount() {
    const imgMain = await import(
      '../../../../server/uploads/products/' + this.props.images[0].filename
    );
    const img1 = await import(
      '../../../../server/uploads/products/' + this.props.images[1].filename
    );
    const img2 = await import(
      '../../../../server/uploads/products/' + this.props.images[2].filename
    );
    const img3 = await import(
      '../../../../server/uploads/products/' + this.props.images[3].filename
    );

    await this.setState({
      // path to imported module HAS TO BE .default
      images: this.state.images.concat([
        imgMain.default,
        img1.default,
        img2.default,
        img3.default
      ])
    });
  }

  render() {
    return (
      <StyledImageSlider>
        <StyledSliderElement src={this.state.images[0]} />
      </StyledImageSlider>
    );
  }
}

export default ImageSlider;
