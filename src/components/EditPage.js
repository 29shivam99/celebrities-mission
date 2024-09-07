import React, { useContext, useState } from "react";
import UserContext, { user } from "../contexts/UserContext";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EditPage(props) {
  console.log({ props });
  let userContext = useContext(user);

  let { details } = props;
  let picture = details.picture;

  let [first, setName] = useState(details.first);
  let [last, setLast] = useState(details.last);
  let [age, setAge] = useState(details.age);
  let [gender, setGender] = useState(details.gender);
  let [country, setCountry] = useState(details.country);
  let [description, setDescription] = useState(details.description);

  function handleSave() {
    userContext.updateEditableData({ age: 12 });
    // console.log(userContext.editableData);
    let newData = userContext.dataList.map((item) => {
      if (item.id !== userContext.isEditClicked) return item;
      item = {
        ...item,
        age: age,
        gender: gender,
        country: country,
        description: description,
      };
      return item;
    });
    console.log(newData);
    debugger;

    userContext.setDataList(newData);
    userContext.setIsEditClicked(false);
  }

  function handleCancel() {
    userContext.setIsEditClicked(null);
  }

  return (
    <>
      <div className="user-detail-container">
        <img src={picture} className="user-image" alt="User" />
        <span>{`${first} ${last}`}</span>
      </div>

      <div>
        <div className="user-basic-details">
          <div className="detail-container">
            <div className="basic-detail-header">Age</div>
            <div>
              <input
                className="edit-input"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="detail-container">
            <div className="basic-detail-header">Gender</div>
            <div>
              <input
                className="edit-input"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="detail-container">
            <div className="basic-detail-header">Country</div>
            <div>
              <input
                className="edit-input"
                value={country}
                onChange={(e) => {
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
                setDescription(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </div>

      <div className="edit-btns-container">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="save-details"
          onClick={() => handleCancel()}
        />
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="cancel-save"
          onClick={(e) => handleSave(e)}
        />
      </div>
    </>
  );
}

export default EditPage;
