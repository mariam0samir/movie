import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRated } from "../../../Store/slices/topRatedSlice";
import MovieCard from "../../../Components/movieCard/MovieCard";
import  SectionTitle  from "../../../Components/sectionTitle/SectionTitle";
import { MySwiper } from "../../MySwiper/MySwiper";
import { useEffect } from "react";

export default function TopRated() {
   const dispatch = useDispatch();
  const { data } = useSelector((state) => state.topRated);

  useEffect(() => {
    dispatch(fetchTopRated());
  }, [dispatch]);

  return (
    <>
      <div className="top-rated py-5 px-1">
        <div className="container">
        <SectionTitle title="Top Rated" />
        <MySwiper
          items={data.slice(12, 22)}
          name="topRated"
          delay={3000}
          pagination
        >
          <MovieCard topRated />
        </MySwiper>
        </div>
       
      </div>
    </>
  );
}
