import React, { useContext } from "react";
import { user } from "../contexts/UserContext";

function DeletionPopup({ id }) {
  let userContext = useContext(user);

  function deleteUser() {
    console.log(userContext, id);
    userContext.setIsUserDeleted(id);
  }
  return (
    <div className="delete-popup">
      <div className="delete-popup-row-1">
        <p>Are u sure u want to delete?</p>
        <button>Close</button>
      </div>
      <div className="delete-popup-row-2">
        <button>Cancel</button>
        <button onClick={() => deleteUser()}>Delete</button>
      </div>
    </div>
  );
}

export default DeletionPopup;
