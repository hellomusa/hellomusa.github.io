import "./FunkyButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FunkyButton = (props) => {
  return (
    <>
    <a class="btn btn-4" href={props.url}><FontAwesomeIcon icon={props.icon} /></a>
    </>
  );
}

export default FunkyButton;