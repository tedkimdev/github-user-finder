import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const WrapperList = styled.ul`
  display: flex;
  height: 60px;
  text-align: center;
`;
const StyledLi = styled.li`
  margin-right: 24px;
`;

const Count = styled.p`
  font-size: 32px;
`;

const Label = styled.p`
  font-size: 16px;
`;

const ProfileBottom = ({ className, repos, followers, following, gists }) => {
  return (
    <Wrapper className={className}>
      <WrapperList>
        <StyledLi>
          <Count>{repos}</Count> <Label>Repos</Label>
        </StyledLi>
        <StyledLi>
          <Count>{followers}</Count> <Label>Followers</Label>
        </StyledLi>
        <StyledLi>
          <Count>{following}</Count> <Label>Following</Label>
        </StyledLi>
        <StyledLi>
          <Count>{gists}</Count> <Label>Gists</Label>
        </StyledLi>
      </WrapperList>
    </Wrapper>
  );
};

export default ProfileBottom;
