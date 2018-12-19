import React, { Component } from "react";

import styled, { css, createGlobalStyle } from "styled-components";
import { Search } from "styled-icons/material";

import { mobile, phone } from "../../utils/media";
import rem from "../../utils/rem";
import { resetInput } from "../../utils/form";

const INPUT_ID = "user-search-input";

const GreySearch = styled(Search)`
  color: whitesmoke;
  width: 2rem;
  height: 2rem;
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  ${resetInput};
  appearance: none;
  flex: 0 0 auto;
  width: 150px;
  line-height: ${rem(20)};
  font-size: 15px;

  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: whitesmoke;
  border-radius: 3px;

  ::placeholder {
    color: currentColor;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
  :focus {
    ::placeholder {
      opacity: 0.8;
    }
  }
`;

const Button = styled.button.attrs({
  htmlFor: INPUT_ID
})`
  ${resetInput};

  cursor: pointer;
  display: flex;
  &:hover,
  &:focus {
    opacity: 0.7;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const setInputValue = input => state => ({
  input: input
});

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.inputRef = React.createRef();
  }

  handleChange = e => {
    this.setState(setInputValue(e.target.value));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { input } = this.state;
    if (input === "") return;
    onSubmit(input);
  };

  render() {
    return (
      <FormWrapper onSubmit={this.handleSubmit}>
        <Input
          id={INPUT_ID}
          ref={this.inputRef}
          placeholder="Search for users"
          onMouseEnter={() => {
            this.inputRef.current.focus();
          }}
          onChange={this.handleChange}
          value={this.state.input}
          type="text"
        />
        <Button type="submit">
          <GreySearch />
        </Button>
      </FormWrapper>
    );
  }
}

export default SearchForm;
