import React from 'react'
import Header from '../../Components/Header/Header'
import MovieList from './MovieList'
import {UpTO}  from '../details/up/Up';
import { useEffect } from 'react';


export default function Movies() {
   useEffect(() => {
        UpTO();
      },[])
  return<>
      <Header title={"All Movies"}/>

       <MovieList/>
      
   </>
}
