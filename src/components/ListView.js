import React, { useContext, useEffect, useState } from "react";
import UserDetail from "./UserDetail";
import { user } from "../contexts/UserContext";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// ! todo - delete k baad main list se deletion is left. edit me validation, edit save, then match requirement with the readme

function ListView() {
  const [searchQuery, setSearchQuery] = useState("");

  let userContext = useContext(user);

  let [openedAccordionIndex, setOpenedAccordionIndex] = useState(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredUsers = searchQuery
    ? userContext.dataList.filter(
        (item) =>
          item.first.toLowerCase().includes(searchQuery) ||
          item.last.toLowerCase().includes(searchQuery)
      )
    : userContext.dataList;

  return (
    <div className="list-container">
      <h1>List View</h1>
      <input
        className="list-search-input"
        placeholder="Search User"
        onChange={(e) => handleSearch(e)}
      />
      {filteredUsers.map((user, index) => {
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
