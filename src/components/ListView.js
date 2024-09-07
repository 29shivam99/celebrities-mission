import React, { useContext, useEffect, useState } from "react";
import { celebritiesData } from "../utilities/celebritiesData";
import UserDetail from "./UserDetail";
import { user } from "../contexts/UserContext";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// ! todo - delete k baad main list se deletion is left. edit me validation, edit save, then match requirement with the readme

function ListView() {
  // let [userDataList, setUserDataList] = useState(celebritiesData);
  let userContext = useContext(user);
  let userDataList = userContext.dataList;

  let [openedAccordionIndex, setOpenedAccordionIndex] = useState(null);

  function handleSearch(e) {
    let searchedTerm = e.target.value;
    let originalList = userContext.mainData;
    userContext.setDataList(
      originalList.filter(
        (item) =>
          item.first.toLowerCase().includes(searchedTerm) ||
          item.last.toLowerCase().includes(searchedTerm)
      )
    );
  }

  function deleteUser(id) {
    // setUserDataList(userDataList.filter((item) => item.id !== id));
  }

  useEffect(() => {
    deleteUser(userContext.isUserDeleted);
  }, [userContext.isUserDeleted]);

  return (
    <div className="list-container">
      <h1>List View</h1>
      <input
        className="list-search-input"
        placeholder="Search User"
        onChange={(e) => handleSearch(e)}
      />
      {userDataList.map((user, index) => {
        return (
          <UserDetail
            key={user.id}
            details={user}
            isOpened={openedAccordionIndex === user.id}
            setOpenedAccordionIndex={setOpenedAccordionIndex}
            openedAccordionIndex={openedAccordionIndex}
          />
        );
      })}
    </div>
  );
}

export default ListView;
