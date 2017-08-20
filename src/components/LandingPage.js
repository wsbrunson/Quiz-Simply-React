import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { sizes, colors } from '../css/cssVariables';

const LandingPageMain = styled.div`
  display: flex;
  height: ${sizes.viewportHeight};
`;

const LandingPageLeft = styled.div`
  background-color: ${colors.greyDark};
  display: flex;
  align-items: center;
  width: 70%;
`;

const LandingPageRight = styled.div`
  background-color: ${colors.greyLight};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const LandingPageTitle = styled.div`
  color: ${colors.main};
  word-spacing: 9999999px;
`;

const TakeQuickButton = styled.button`
  height: 5em;
  width: 14em;
  background-color: ${colors.main};
  border: dashed 0.2em ${colors.greyDark};
`;

const LandingPage = () =>
  <LandingPageMain>
    <LandingPageLeft>
      <LandingPageTitle>Quiz Simply</LandingPageTitle>
    </LandingPageLeft>
    <LandingPageRight>
      <TakeQuickButton>
        <Link to="/quiz/">Take Quiz</Link>
      </TakeQuickButton>
    </LandingPageRight>
  </LandingPageMain>;

export default LandingPage;
