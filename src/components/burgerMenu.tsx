import "../styles/burgerMenu.scss";
import MenuButtons from "./menuButtons";
import Card from "react-bootstrap/Card";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BurgerMenu() {
  return (
    <>
      <Card className="logo">
        <p>Camp</p>
        <Card className="profile-menu">
          <FontAwesomeIcon icon={faCircleUser} />
        </Card>
        <Card className="Menu">
          <p>Menu</p>
        </Card>
        <Card className="button-card">
        <MenuButtons></MenuButtons>
        </Card>
      </Card>
    </>
  );
}

export default BurgerMenu;
