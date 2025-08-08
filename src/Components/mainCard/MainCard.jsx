
import React from 'react'

import { useNavigate } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { Button } from "react-bootstrap";
import "./MainCard.css";

export default function MainCard ({ item }) {
  const navigate = useNavigate();
  const { image, title, type, year } = item;

  return (
    <div className="main-card">
      <img src={image} alt={title} />
      <div className="info text-white">
        <h2 className="fw-bold">{title}</h2>
        <div className="mt-4 mb-4 d-flex justify-content-between">
          <span className="fw-bold  d-flex justify-content-center">
            <BiMoviePlay className="rounded me-2 mb-1 text-red fs-20" />
            {type}
          </span>
          <span className="fw-bold d-flex justify-content-center">
            <SlCalender className="rounded me-2 ms-3 mb-1 text-red fs-17" />
            {year}
          </span>
        </div>

        <Button onClick={() => navigate("/movies")} className="more ">
          More Movies
        </Button>
      </div>
    </div>
  );
};

