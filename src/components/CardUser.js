import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 8px;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  align-items: center;
  overflow: hidden;

  width: 100%;
  background: white;
  margin: 10px 0;
`;

const Photo = styled.div`
  background-position: center center;
  background-image: url(${props => props.bgPhoto});
  background-color: ${props => props.bgColor};
  background-size: cover;

  width: 80px;
  height: 100%;
  margin-right: 20px;
`;

const Content = styled.div`
  border-right: 8px;
  color: white;
  background-color: white;

  width: calc(100% - 100px);
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: ${props => props.color};
  display: block;
  height: 48px;
  line-height: 48px;
`;

const CardUser = ({
  className,
  bgPhoto,
  bgColor = "#DBE0E6",
  title,
  titleColor = "#1F2126"
}) => (
  <Container className={className}>
    <Photo bgPhoto={bgPhoto} bgColor={bgColor} />
    <Content>{title && <Title color={titleColor}>{title}</Title>}</Content>
  </Container>
);

CardUser.propTypes = {
  title: PropTypes.string,
  bgPhoto: PropTypes.string,
  bgColor: PropTypes.string
};

export default CardUser;
