import React, { useContext, useState } from "react";
import UserDetail from "./UserDetail";
import { user } from "../contexts/UserContext";
import "../styles/ListView.css";

//! you can only edit the user if the user is an adult

function ListView() {
  const [searchQuery, setSearchQuery] = useState("");

  let userContext = useContext(user);

  let [openedAccordionIndex, setOpenedAccordionIndex] = useState(null);

  // a debounced function to reduce the method calls for search
  function debouncedFunction(func, delay) {
    let timeoutid;
    return function (...args) {
      if (timeoutid) {
        clearTimeout(timeoutid);
      }
      timeoutid = setTimeout(() => {
        return func(...args);
      }, delay);
    };
  }

  let debouncedSearch = debouncedFunction(handleSearch, 1000);
  function handleSearch(e) {
    setSearchQuery(e.target.value);
  }

  // getting the filtered user list to display on UI
  const filteredUsers = searchQuery
    ? userContext.dataList.filter(
        (item) =>
          item.first.toLowerCase().includes(searchQuery) ||
          item.last.toLowerCase().includes(searchQuery)
      )
    : userContext.dataList;

  return (
    <div className="list-container">
      <h1>User Details</h1>
      <input
        className="list-search-input"
        placeholder="Search User"
        onChange={(e) => debouncedSearch(e)}
      />
      {filteredUsers?.map((user) => {
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
