import React from 'react'
import MovieCard from '../../../Components/movieCard/MovieCard'
import { MySwiper } from '../../../Components/MySwiper/MySwiper'
import { useSelector ,useDispatch } from 'react-redux'
import { Container } from "react-bootstrap";
import  SectionTitle  from "../../../Components/sectionTitle/SectionTitle";
import {fetchSimilarMovies} from '../../../Store/slices/similarSlice'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';




export default function Similar() {
 const dispatch = useDispatch();
 const { movieId } = useParams();
const {data } =useSelector((state)=>state.similar)



  useEffect(() => {
    dispatch(fetchSimilarMovies(movieId));
  }, [dispatch, movieId]);





  return (
    <Container>
   <div className="similar pt-5 pb-5">
    {data.length>0 && <SectionTitle  title="Similar Movies"/>}
       <MySwiper
            items={data}
            name="similar"
            spaceBetween={20}
            delay={1000}
            speed={500}
          >
            <MovieCard Similar/>
          </MySwiper>
    </div>
    </Container>
    
  )
}
