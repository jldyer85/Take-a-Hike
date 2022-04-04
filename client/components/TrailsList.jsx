import React, { useEffect, useState } from "react";
import TrailsListEntry from "./TrailsListEntry.jsx";
import axios from "axios";
// import TrailCard from './TrailCard.jsx';

const TrailsList = ({ handleGetTrails, trailList }) => {
  const [location, setLocation] = useState({ lat: "", lon: "" });

  const handleLocationInput = (e) => {
    const { name, value } = e.target;
    setLocation((location) => {
      return { ...location, [name]: value, [name]: value };
    });
  };

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    handleGetTrails(location);
  };

  return (
    <div className="profile-card">
      <h1 className="Header" alignment="center">
        Trails List
      </h1>
      <form class="box" onSubmit={handleSubmitLocation} className="card">
        <div class="field">
          <label class="label">Latitude</label>
          <div class="control">
            <input
              type="text"
              placeholder="latitude"
              className="card"
              value={location.lat}
              onChange={handleLocationInput}
              name="lat"
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Longitude</label>
          <div class="control">
            <input
              type="text"
              placeholder="longitude"
              className="card"
              value={location.lon}
              onChange={handleLocationInput}
              name="lon"
            />
          </div>
        </div>

        <input
          type="submit"
          value="Send Location"
          className="button is-info is-rounded"
        />
      </form>
      <div className="trails">
        <div className="trail-table">
          {trailList.map((trail) => {
            return <TrailsListEntry trail={trail} key={trail.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TrailsList;
