import React from "react";

import "../../css/components/LandingPage.scss";

const LandingPage = () => (
  <div className="LandingPage">
    <div className="LandingPage-left">
      <h1 className="LandingPage-title">Quiz Simply</h1>
    </div>
    <div className="LandingPage-right">
      <button>Take Quiz</button>
      <button>Create Quiz</button>
    </div>
  </div>
);

export default LandingPage;
