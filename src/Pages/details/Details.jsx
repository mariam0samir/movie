import React from 'react'
import { DetailsHeader } from './DetailsHeader/DetailsHeader'
import Cast from '../../Pages/details/Cast/Cast'
import { useParams } from "react-router-dom";
import Similar from './Similar/Similar';
import {UpTO}  from './up/Up';
import { useEffect } from 'react';


export default function Details() {
    const { movieId } = useParams();
  useEffect(() => {
  UpTO();
}, [movieId]);
  return (
    <div>
      <DetailsHeader movieId={movieId}/>
      <Cast movieId={movieId}/>
      <Similar movieId={movieId}/>  
    </div>
  )
}
