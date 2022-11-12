import React from "react";
import "../styles/images.scss";
import { DataGrid } from "@mui/x-data-grid";
import { fetchPlaceList } from "../api";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "Name", headerName: "Name", width: 130 },
  { field: "About", headerName: "About", width: 130 },
  { field: "City", headerName: "City", width: 130 },
  { field: "State", headerName: "State", width: 130 },
  { field: "Timing", headerName: "Timing", width: 130 },
];

const images = () => {
  const [tableData, setTableData] = useState([]);
  const { data } = useSelector((state) => state.place);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPlaceList());
    setTableData(data);
    console.log(data);
  }, []);

  let i = 1;
  const handleGetRowId = () => {
    let id = i;
    i = i + 1;
    console.log(id);
    return id;
  };

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
      <div style={{ height: 400, width: "90%", marginTop: "2rem" }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={10}
          getRowId={handleGetRowId}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default images;
