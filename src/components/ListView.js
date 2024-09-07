import React, { useContext, useEffect, useState } from "react";
import { celebritiesData } from "../utilities/celebritiesData";
import UserDetail from "./UserDetail";
import { user } from "../contexts/UserContext";

function ListView() {
  let [userDataList, setUserDataList] = useState(celebritiesData);
  let [openedAccordionIndex, setOpenedAccordionIndex] = useState(null);

  let userContext = useContext(user);

  function deleteUser(id) {
    setUserDataList(userDataList.filter((item) => item.id !== id));
  }

  useEffect(() => {
    console.log("delete from main");
    deleteUser(userContext.isUserDeleted);
  }, [userContext.isUserDeleted]);

  return (
    <div className="list-container">
      <h1>List View</h1>
      <input className="list-search-input" placeholder="Search User" />
      {userDataList.map((user, index) => {
        console.log(user, index);
        return (
          <UserDetail
            key={user.id}
            details={user}
            isOpened={openedAccordionIndex === user.id}
            setOpenedAccordionIndex={setOpenedAccordionIndex}
          />
        );
      })}
    </div>
  );
}

export default ListView;
