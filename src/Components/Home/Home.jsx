import React from 'react'
import Popular from './popular/PopularMovies'
import Download from './download/Download'
import TopRated from './TopRate/TopRated'
import MainSlider from './MainSlider/MainSlider'
import { useEffect } from 'react';
import {UpTO}  from '../../Pages/details/up/Up';

export default function Home() {
    useEffect(() => {
    UpTO();
  },[])
  return (
    <div>
      <MainSlider/>
      <Popular/>
      <Download/>
      <TopRated/>
    </div>
  )
}
