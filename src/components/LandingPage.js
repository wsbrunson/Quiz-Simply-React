// @flow
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingPageMain = styled.div`
  display: flex;
  height: 100vh;
`;

const LandingPageLeft = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`;

const LandingPageRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

const LandingPageTitle = styled.div`word-spacing: 9999999px;`;

const TakeQuickButton = styled.button`
  height: 5em;
  width: 14em;
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
