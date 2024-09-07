import React, { useState } from "react";
import { createContext } from "react";

export const user = createContext();

const UserContext = ({ children }) => {
  let [isUserDeleted, setIsUserDeleted] = useState(null);
  let [isEditClicked, setIsEditClicked] = useState(false);

  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [gender, setGender] = useState("");
  let [country, setCountry] = useState("");
  let [description, setDescription] = useState("");

  let editableData = {
    name: "",
    age: "",
    gender: "",
    country: "",
    description: "",
  };

  return (
    <user.Provider
      value={{
        isUserDeleted,
        setIsUserDeleted,
        isEditClicked,
        setIsEditClicked,
        editableData,
      }}
    >
      {children}
    </user.Provider>
  );
};

export default UserContext;
