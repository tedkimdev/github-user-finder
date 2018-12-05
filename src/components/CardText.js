import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  border-radius: 8px;
  padding: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-image: ${props =>
    `linear-gradient(45deg, ${props.fromColor}, ${props.toColor})`};
  box-shadow: 0px 20px 20px 0px rgba(0, 0, 0, 0.07);

  width: 300px;
  height: 100px;
`;

const Title = styled.span`
  color: ${props => props.color};
  font-size: 12px;
  font-weight: 900;
`;

const Divider = styled.div`
  margin-top: 5px;
  background-color: ${props => props.bgColor};
  width: 15%;
  height: 4px;
  border-radius: 2px;
`;

const CardText = ({
  title,
  titleColor = "white",
  preTitleColor = "white",
  dividerColor = "white",
  fromColor = "#FF770E",
  toColor = "#DB7805"
}) => (
  <Container fromColor={fromColor} toColor={toColor}>
    {title && <Title color={titleColor}>{title}</Title>}
    <Divider bgColor={dividerColor} />
  </Container>
);

CardText.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  dividerColor: PropTypes.string,
  fromColor: PropTypes.string,
  toColor: PropTypes.string
};

export default CardText;
