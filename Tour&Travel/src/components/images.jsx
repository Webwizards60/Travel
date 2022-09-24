import React from 'react'
import '../styles/images.scss'

const images = () => {
  return (
    <div className="main">
      <div className="intro">
        <div className="title">Add Images</div>
        <p className="paragraph">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores,
          quia.
        </p>
      </div>
      <div className="uploadSec">
        <div className="search">
          <input type="text" className="inputSearch" />
          <i class="uil uil-search"></i>
        </div>
        <div className="button1">
          <span>Upload files</span>
        </div>
      </div>
      <div className="imageList">
        <div className="list"></div>
      </div>
    </div>
  );
}

export default images