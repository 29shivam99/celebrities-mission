import React, { useContext } from "react";
import { user } from "../contexts/UserContext";
import crossIcon from "../images/crossIcon.png";

function DeletionPopup({ id, setIsDeleteClicked }) {
  let { setDataList, dataList } = useContext(user);

  function deleteUser() {
    let filteredData = dataList.filter((item) => item.id !== id);
    setDataList(filteredData);
  }

  function cancelPopup() {
    setIsDeleteClicked(false);
  }
  return (
    <div className="delete-popup">
      <div className="delete-popup-row-1">
        <p style={{ fontSize: "20px" }}>Are you sure you want to delete?</p>
        <img
          src={crossIcon}
          alt="close button"
          style={{ height: "28px", cursor: "pointer" }}
          onClick={() => cancelPopup()}
        />
      </div>
      <div className="delete-popup-row-2">
        <button className="btn-cancel" onClick={() => cancelPopup()}>
          Cancel
        </button>
        <button className="btn-delete" onClick={() => deleteUser()}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeletionPopup;
