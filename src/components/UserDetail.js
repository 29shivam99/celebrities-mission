import React, { createContext, useContext, useState } from "react";
import ExpandedUserDetails from "./ExpandedUserDetails";
import DeletionPopup from "./DeletionPopup";
import EditPage from "./EditPage";
import { user } from "../contexts/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function UserDetail(props) {
  let [isDeletClicked, setIsDeleteClicked] = useState(false);

  let { details, isOpened, setOpenedAccordionIndex, openedAccordionIndex } =
    props;
  let { picture, first, last, id, age } = details;

  let userContext = useContext(user);

  // console.log(userContext);

  function handleAccordionClick() {
    if (openedAccordionIndex === id) setOpenedAccordionIndex(null);
    else setOpenedAccordionIndex(id);
  }

  function handleDelete(id) {
    setIsDeleteClicked(true);
  }

  function handleEdit() {
    console.log(userContext);
    userContext.setIsEditClicked(id);
  }

  if (userContext.isEditClicked === id) {
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

              <FontAwesomeIcon icon={faChevronDown} className="chevron-arrow" />
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
