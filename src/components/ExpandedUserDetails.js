import React from "react";

function ExpandedUserDetails(props) {
  console.log("expanded", props);
  let { first, last, country, description } = props;
  return (
    <div>
      <div className="user-basic-details">
        <div>
          <div className="basic-detail-header">Age</div>
          <div>{first}</div>
        </div>
        <div>
          <div className="basic-detail-header">Gender</div>
          <div>{last}</div>
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
