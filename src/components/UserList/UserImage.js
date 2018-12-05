import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: auto;
`;

class UserImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  onImageLoad = () => {
    this.setState(() => ({
      loading: false
    }));
  };
  // renderSpinner() {
  //   if (!this.state.loading) {
  //     return null;
  //   }
  //   return <RedSpinner width={28} height={28} />;
  // }

  render() {
    const { minHeight, className, url, name, ...restProps } = this.props;
    return (
      <Wrapper>
        <ImageWrapper
          src={url}
          alt={name}
          {...restProps}
          onLoad={this.onImageLoad}
        />
        {/*this.renderSpinner()*/}
      </Wrapper>
    );
  }
}

export default UserImage;
