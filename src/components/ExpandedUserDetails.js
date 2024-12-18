import React from "react";
import "../styles/ExpandedUserDetails.css";

function ExpandedUserDetails(props) {
  let { gender, country, description } = props.detail;
  let age = props.age;
  return (
    <div>
      <div className="user-basic-details">
        <div>
          <div className="basic-detail-header">Age</div>
          <div>{age}</div>
        </div>
        <div>
          <div className="basic-detail-header">Gender</div>
          <div>{gender}</div>
        </div>
        <div>
          <div className="basic-detail-header">Country</div>
          <div>{country}</div>
        </div>
      </div>
      <div className="user-description">
        <div className="basic-detail-header">Description</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default ExpandedUserDetails;
