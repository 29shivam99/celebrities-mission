import React, { createContext, useContext, useState } from "react";
import ExpandedUserDetails from "./ExpandedUserDetails";
import DeletionPopup from "./DeletionPopup";
import EditPage from "./EditPage";
import { user } from "../contexts/UserContext";

function UserDetail(props) {
  let [isDeletClicked, setIsDeleteClicked] = useState(false);

  let { details, isOpened, setOpenedAccordionIndex } = props;
  let { picture, first, last, id } = details;

  let userContext = useContext(user);

  function handleAccordionClick() {
    setOpenedAccordionIndex(id);
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
            <DeletionPopup id={id} />
          </div>
        ) : (
          <>
            <div
              className="user-detail-container"
              onClick={() => handleAccordionClick()}
            >
              <img src={picture} className="user-image" alt="User" />
              <span>{`${first} ${last}`}</span>
              <span>+</span>
            </div>

            <div>{isOpened && <ExpandedUserDetails {...props.details} />}</div>
            <div>
              {isOpened && (
                <div className="user-detail-buttons">
                  <button onClick={() => handleEdit()}>Edit</button>
                  <button onClick={() => handleDelete(id)}>Delete</button>
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
