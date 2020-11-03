import React, { useState, useEffect } from "react";

function User() {
  const [activity, setActivity] = useState({
    actDesc: "",
  });
  const { listItem } = activity;

  function saveActivity(e) {
    e.preventDefault();
    fetch("/api/saveActivity", {
      method: "POST",
      headers: {
        // Accept: 'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(activity),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
  return (
    <div className="user-page">
      <div className="bucket-title">Type in your Bucket List</div>
      <div className="activity-input">
        <input
          type="text"
          className="bucket-input"
          placeholder="Activity Title"
          value={listItem || ""}
          onChange={(e) =>
            setActivity({ ...activity, listItem: e.target.value })
          }
        />
      </div>
      <div className="bucket-button">
        <button className="bucket-btn" onClick={saveActivity} type="submit">
          Save
        </button>
      </div>
    </div>
  );
}

export default User;
