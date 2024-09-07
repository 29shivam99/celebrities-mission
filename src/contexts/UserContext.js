import React, { useState } from "react";
import { createContext } from "react";
import { celebritiesData } from "../utilities/celebritiesData";

export const user = createContext();

const UserContext = ({ children }) => {
  let [isUserDeleted, setIsUserDeleted] = useState(null);
  let [isEditClicked, setIsEditClicked] = useState(false);

  function calculateAge(dobString) {
    const dob = new Date(dobString);
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // If the birth month is later in the year, subtract one year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }

  let updatedUserData = celebritiesData;

  updatedUserData.map((user, index) => {
    user.age = calculateAge(user.dob);
    return user;
  });

  let mainData = updatedUserData;
  let [dataList, setDataList] = useState(updatedUserData);

  const [editableData, setEditableData] = useState({
    name: "",
    age: "",
    gender: "",
    country: "",
    description: "",
  });
  const updateEditableData = (newData) => {
    setEditableData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };
  return (
    <user.Provider
      value={{
        isUserDeleted,
        setIsUserDeleted,
        isEditClicked,
        setIsEditClicked,
        editableData,
        updateEditableData,
        dataList,
        setDataList,
        mainData,
      }}
    >
      {children}
    </user.Provider>
  );
};

export default UserContext;
