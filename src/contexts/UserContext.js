import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { calculateAge } from "../utilities/functions/calculateAge.js";
import data from "../db.json";

export const user = createContext();

const UserContext = ({ children }) => {
  let [isUserDeleted, setIsUserDeleted] = useState(null);
  let [editClickedFor, setEditClickedFor] = useState(false);

  let updatedUserData = data;
  updatedUserData = updatedUserData?.map((user) => {
    user.age = calculateAge(user.dob);
    return user;
  });
  let [dataList, setDataList] = useState(updatedUserData);

  return (
    <user.Provider
      value={{
        isUserDeleted,
        setIsUserDeleted,
        editClickedFor,
        setEditClickedFor,
        dataList,
        setDataList,
      }}
    >
      {children}
    </user.Provider>
  );
};

export default UserContext;

// fetch("../utilities/constants/celebritiesData.json", {
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// })
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     debugger;
//     updatedUserData = data;
//     console.log(updatedUserData, "***********************8");
//     updatedUserData = updatedUserData.map((user, index) => {
//       user.age = calculateAge(user.dob);
//       return user;
//     });
//   });
