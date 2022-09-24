import React from 'react'
import "../styles/add-image.scss";
import Image from '../assets/img/image.jpg';

const image = () => {
  return (
    <div className="main">
      <div className="imageInfo">
        <div className="headingSec">
          <span className="title">Add Places</span>
          <span className="details">
            Here admin can enter multiple place information and place details
          </span>
        </div>
        <div className="detailsSec">
          <div className="section">
            <span className="title">Place Name</span>
            <input
              type="text"
              className="input"
              placeholder="Name of the Place"
            />
          </div>
          <div className="section">
            <span className="title">Category</span>
            <input type="text" className="input" placeholder="Free" />
          </div>
          <div className="sectionLo">
            <div className="City">
              <span className="title">City</span>
              <input type="city" className="input" placeholder="city" />
            </div>
            <div className="City">
              <span className="title">State</span>
              <input type="state" className="input" placeholder="state" />
            </div>
          </div>
          <div className="section">
            <span className="title">Timing</span>
            <input type="time" className="input" />
          </div>
          <div className="section">
            <span className="title">Geolocation</span>
            <input
              type="text"
              className="input"
              placeholder="Enter the Location"
            />
          </div>
          <div className="section">
            <span className="title">Special Date</span>
            <input type="date" className="input" />
          </div>
        </div>
      </div>

      <div className="imageSec">
        <img src={Image} className="image"/>
        <img src={Image} className="image"/>
        <img src={Image} className="image"/>
        <div className="addImage">
          <i class="uil uil-plus"></i>
          <span>Add Image</span>
        </div>
      </div>

      <div className="button">
        <span>Upload CSV file</span>
      </div>
    </div>
  );
}

export default image