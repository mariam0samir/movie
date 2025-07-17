import React from 'react'
import Header from '../../Components/Header/Header'
import FavList from './FavList'
import {UpTO}  from '../details/up/Up';
import { useEffect } from 'react';

export default function Fav() {
   useEffect(() => {
        UpTO();
      },[])
  return <>
   <Header title={"Your Favorite"}/>
   <FavList/>
  </>
}
