import React, { useContext, useState } from "react";
import ExpandedUserDetails from "./ExpandedUserDetails";
import DeletionPopup from "./DeletionPopup";
import EditPage from "./EditPage";
import { user } from "../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/UserDetail.css";

function UserDetail(props) {
  let [isDeletClicked, setIsDeleteClicked] = useState(false);

  let { details, isOpened, setOpenedAccordionIndex, openedAccordionIndex } =
    props;

  let { picture, first, last, id, age } = details;

  let userContext = useContext(user);

  // this function handles the click on any any accordion header and checks - if the editing is happening on some accordion then dont do any thing otherwise set openedAccordionIndex
  function handleAccordionClick() {
    if (userContext.editClickedFor) return;
    if (openedAccordionIndex === id) setOpenedAccordionIndex(null);
    else setOpenedAccordionIndex(id);
  }

  function handleDelete(id) {
    setIsDeleteClicked(true);
  }

  function handleEdit() {
    if (age < 18) {
      alert("User must be an adult to edit the details!");
      return;
    }
    userContext.setEditClickedFor(id);
  }

  //  if editting is happenig for a user then open EditPage else open the ExpandedUserDetails
  if (userContext.editClickedFor === id) {
    return (
      <div className="accordion-wrapper">
        <EditPage {...props} />
      </div>
    );
  }
  return (
    <div>
      <div className="accordion-wrapper">
        {isDeletClicked ? (
          <div>
            <DeletionPopup id={id} setIsDeleteClicked={setIsDeleteClicked} />
          </div>
        ) : (
          <>
            <div
              className="user-detail-container"
              onClick={() => handleAccordionClick()}
            >
              <img src={picture} className="user-image" alt="User" />
              <span>{`${first} ${last}`}</span>

              {isOpened ? (
                <FontAwesomeIcon icon={faChevronUp} className="chevron-arrow" />
              ) : (
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="chevron-arrow"
                />
              )}
            </div>
            <div>
              {isOpened && (
                <ExpandedUserDetails detail={props.details} age={age} />
              )}
            </div>
            <div>
              {isOpened && (
                <div className="user-detail-buttons">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="delete-details"
                    onClick={() => handleDelete(id)}
                  />
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="edit-details"
                    onClick={() => handleEdit(id)}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default UserDetail;
