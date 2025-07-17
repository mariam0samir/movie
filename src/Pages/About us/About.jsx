import React from 'react'
 import Header from '../../Components/Header/Header'
import { Container } from 'react-bootstrap'
import {  AboutInfo } from '../../Data/AboutInfo'
import {UpTO}  from '../details/up/Up';
import { useEffect } from 'react';


export default function About() {
     useEffect(() => {
      UpTO();
    },[])
  return <>
  <Header title={"About Us"}/>
  <Container className="my-5">
    <h3 className="text-white mb-3">{AboutInfo.title}</h3>
    <div className="row my-2">
        <div className="content-about col-lg-6 col-md-12">
          <p className="text-gray mb-5 ">{AboutInfo.describtion}</p>
          <div className="movies-list row justify-content-between">
          <div className="list1 col-lg-5 col-md-8 bg-blue p-3 rounded ">
            <h3  className="text-white">{AboutInfo.list[0].views}</h3>
            <span className="text-gray">{AboutInfo.list[0].title}</span>
            <p  className="text-gray">{AboutInfo.list[0].describtion}</p>
          </div>
          <div className="list2 col-lg-5 col-md-8 bg-blue p-3 rounded">
             <h3  className="text-white">{AboutInfo.list[1].views}</h3>
            <span className="text-gray">{AboutInfo.list[1].title}</span>
            <p className="text-gray">{AboutInfo.list[1].describtion}</p>
          </div>
          </div>
        </div>
        <div className="img-about col-lg-6  col-md-12">
        <img className="w-100" src={AboutInfo.img} alt='' />
        </div>
    </div>
  </Container>
  </>
}
