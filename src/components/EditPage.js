import React, { useContext, useState } from "react";
import { user } from "../contexts/UserContext";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/EditPage.css";

function EditPage(props) {
  let userContext = useContext(user);
  let { details } = props;

  let picture = details.picture;

  let [first] = useState(details.first);
  let [last] = useState(details.last);
  let [age, setAge] = useState(details.age);
  let [gender, setGender] = useState(details.gender);
  let [country, setCountry] = useState(details.country);
  let [description, setDescription] = useState(details.description);
  let [isSaveDisabled, setIsSaveDisabled] = useState(true);

  let [errorMessage, setErrorMessage] = useState("");

  function isNumeric(str) {
    return /^\d+$/.test(str);
  }
  function isAlpha(str) {
    return /^[A-Za-z]+$/.test(str);
  }

  // to check if inputs are valid
  function isInputValid() {
    console.log(age, country, description);
    if (age === "" || country === "" || description === "") {
      setErrorMessage("Please fill all the details to save!");
      return false;
    }

    if (!isNumeric(age)) {
      setErrorMessage("Please add numeric value in age to save!");
      return false;
    }

    if (!isAlpha(country)) {
      setErrorMessage("Please use only alphabets in country to save!");
      return false;
    }

    return true;
  }

  // saving the details gicen by the user
  function handleSave() {
    if (!isInputValid()) {
      return;
    }
    let newData = userContext.dataList.map((item) => {
      if (item.id !== userContext.editClickedFor) return item;
      item = {
        ...item,
        age: age,
        gender: gender,
        country: country,
        description: description,
      };
      return item;
    });

    userContext.setDataList(newData);
    userContext.setEditClickedFor(null);
  }

  function handleCancel() {
    userContext.setEditClickedFor(null);
  }

  return (
    <>
      <div className="user-detail-container">
        <img src={picture} className="user-image" alt="User" />
        <span>{`${first} ${last}`}</span>
      </div>

      <div>
        <form>
          <div className="user-basic-details">
            <div className="detail-container">
              <div className="basic-detail-header">Age</div>
              <div>
                <input
                  className="edit-input"
                  value={age}
                  onChange={(e) => {
                    setIsSaveDisabled(false);
                    setAge(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="detail-container">
              <div className="basic-detail-header">Gender</div>
              <div>
                <select
                  className="edit-input"
                  value={gender}
                  onChange={(e) => {
                    setIsSaveDisabled(false);
                    setGender(e.target.value);
                  }}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="transgender">Transgender</option>
                  <option value="rather not say">Rather not say</option>
                </select>
              </div>
            </div>
            <div className="detail-container">
              <div className="basic-detail-header">Country</div>
              <div>
                <input
                  className="edit-input"
                  value={country}
                  onChange={(e) => {
                    setIsSaveDisabled(false);
                    setCountry(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="user-description">
            <div className="basic-detail-header">Description</div>
            <div>
              <textarea
                className="edit-input desc-input-edit"
                value={description}
                onChange={(e) => {
                  setIsSaveDisabled(false);
                  setDescription(e.target.value);
                }}
              ></textarea>
              <span className="error-msg">{errorMessage}</span>
            </div>
          </div>
        </form>
      </div>

      <div className="edit-btns-container">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="save-details"
          onClick={() => handleCancel()}
        />
        <button
          className="btn-save-edit"
          con={faCircleCheck}
          disabled={isSaveDisabled}
        >
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="cancel-save"
            onClick={(e) => handleSave(e)}
          />
        </button>
      </div>
    </>
  );
}

export default EditPage;
