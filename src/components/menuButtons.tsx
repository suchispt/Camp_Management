import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/menuButton.scss";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function MenuButtons() {
  return (
    <>
        <button className="button">
          <span>
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="button-label">Welcome</span>
        </button>
        <button className="button">
          <span>
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="button-label">Master Records</span>
        </button>
        <button className="button">
          <span>
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="button-label">Room Transaction</span>
        </button>
        <button className="button">
          <span>
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="button-label">Room Swap</span>
        </button>
        <button className="button">
          <span>
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="button-label">Camp Transfer</span>
        </button>
        <button className="button">
          <span>
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="button-label">Leave</span>
        </button>
        <button className="button">
          <span>
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="button-label">Events</span>
        </button>
        <button className="button">
          <span>
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="button-label">HR</span>
        </button>
        <button className="button">
          <span>
            <FontAwesomeIcon icon={faLink} />
          </span>
          <span className="button-label">Report</span>
        </button>
    </>
  );
}

export default MenuButtons;
