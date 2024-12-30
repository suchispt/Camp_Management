import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/landingPage.scss";
import BurgerMenu from "./burgerMenu";

function LandingPage() {
  const [isClicked, setIsClicked] = useState(false);

  const isMenuClicked = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <div className="row">
        {isClicked && (
          <div className="col-2">
            <Container className="menu-panel">
              <BurgerMenu />
            </Container>
          </div>
        )}
        <div className={isClicked ? "col-10" : "col-12"}>
          <Container className="profile">
            <button onClick={isMenuClicked} className="menu-button">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <FontAwesomeIcon icon={faCircleUser} />
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
