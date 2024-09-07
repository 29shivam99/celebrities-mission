import React, { useContext } from "react";
import { user } from "../contexts/UserContext";

function EditPage(props) {
  let userContext = useContext(user);

  console.log("single user data", userContext.editableData);

  return (
    <>
      <div className="user-detail-container">
        <img src={props.picture} className="user-image" alt="User" />
        <span>{`${props.first} ${props.last}`}</span>
        <span>+</span>
      </div>

      <div>
        <div className="user-basic-details">
          <div>
            <div className="basic-detail-header">Age</div>
            <div>
              <input />
            </div>
          </div>
          <div>
            <div className="basic-detail-header">Gender</div>
            <div>
              <input />
            </div>
          </div>
          <div>
            <div className="basic-detail-header">Country</div>
            <div>
              <input />
            </div>
          </div>
        </div>
        <div className="user-description">
          <div className="basic-detail-header">Description</div>
          <div>
            <input />
          </div>
        </div>
      </div>
    </>
  );
}

export default EditPage;
