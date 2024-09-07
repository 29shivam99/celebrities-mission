import React, { useContext, useState } from "react";
import UserContext, { user } from "../contexts/UserContext";

function EditPage(props) {
  console.log({ props });
  let userContext = useContext(user);

  let { details, isOpened, setOpenedAccordionIndex } = props;
  let picture = details.picture;
  // let { picture, first, last, id, gender, country, description } = details;

  let [first, setName] = useState(details.first);
  let [last, setLast] = useState(details.last);
  let [age, setAge] = useState(details.age);
  let [gender, setGender] = useState(details.gender);
  let [country, setCountry] = useState(details.country);
  let [description, setDescription] = useState(details.description);

  function handleSave() {
    userContext.updateEditableData({ age: 12 });
    // console.log(userContext.editableData);
    userContext.setDataList(
      userContext.dataList.map((item) => {
        item.age = age;
        return item;
      })
    );

    userContext.setIsEditClicked(false);
  }

  function handleEdit() {}

  return (
    <>
      <div className="user-detail-container">
        <img src={picture} className="user-image" alt="User" />
        <span>{`${first} ${last}`}</span>
        <span>+</span>
      </div>

      <div>
        <div className="user-basic-details">
          <div>
            <div className="basic-detail-header">Age</div>
            <div>
              <input
                value={age}
                onChange={(e) => {
                  console.log("alkdjskojdlaskdolskdlskdlok");
                  setAge(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <div className="basic-detail-header">Gender</div>
            <div>
              <input value={gender} />
            </div>
          </div>
          <div>
            <div className="basic-detail-header">Country</div>
            <div>
              <input value={country} />
            </div>
          </div>
        </div>
        <div className="user-description">
          <div className="basic-detail-header">Description</div>
          <div>
            <input value={description} />
          </div>
        </div>
      </div>

      <div>
        <button>Cancel</button>
        <button onClick={(e) => handleSave(e)}>Save</button>
      </div>
    </>
  );
}

export default EditPage;
