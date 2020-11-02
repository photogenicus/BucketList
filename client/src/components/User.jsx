import React, { useState } from "react";

function User() {
  const [activity, setActivity] = useState({ actTitle: "", actDesc: "" });
  const { actTitle, actDesc } = activity;

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
      .then((data) => setActivity(data));
    setActivity("").catch((err) => console.log(err));
  }
  return (
    <div className="user-page">
      <div className="user-form">
        <form>
          <input
            type="text"
            className="activity-title"
            placeholder="Activity Title"
            value={actTitle || ""}
            onChange={(e) =>
              setActivity({ ...activity, actTitle: e.target.value })
            }
          />
          <input
            type="text"
            className="activity-description"
            placeholder="Activity Description"
            value={actDesc || ""}
            onChange={(e) =>
              setActivity({ ...activity, actDesc: e.target.value })
            }
          />
        </form>
        <div className="user-form-buttons">
          <button className="save-btn" onClick={saveActivity} type="submit">
            Save
          </button>
        </div>
      </div>
      <div className="user-activities">Activities</div>
    </div>
  );
}

export default User;
