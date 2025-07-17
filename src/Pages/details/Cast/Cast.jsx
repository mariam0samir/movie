import React from 'react'

import CastCard from '../../../Components/CastCard/CastCard'
import  SectionTitle  from '../../../Components/sectionTitle/SectionTitle'
import {MySwiper } from '../../../Components/MySwiper/MySwiper'



import { fetchMovieCast } from "../../../Store/slices/CastSlice";

import { useParams } from "react-router-dom";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';




 

export default function Cast() {
 const dispatch = useDispatch();
  const { movieId } = useParams(); // Assuming route is like /movie/:id
  const { data} = useSelector((state) => state.cast); // تأكد أن key اسمها "cast" في store

  useEffect(() => {
    dispatch(fetchMovieCast(movieId));
  }, [dispatch, movieId]);

  return (
    <div className="container">
       {data.length > 0 && <SectionTitle title="Cast" />}
          <MySwiper items={data} name="cast" speed={1700}>
  <CastCard />  
</MySwiper>
    </div>
  )
}
