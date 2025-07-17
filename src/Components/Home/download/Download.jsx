import React from 'react'
import './Download.css'
import{ downloadData }from '../../../Data/DataHome'
import { Container } from 'react-bootstrap'


export default function Download() {
  return <>
  <Container>
   <div className="row align-items-center  downSection py-1 my-5">
    <div className="downContent p-5 col-lg-6 col-sm-12">
      <h3>{downloadData.title}</h3>
      <p className="my-5">{downloadData.describtion}</p>
      <div className="d-flex mt-3 justify-content-start">
       <span className="me-5 ">{downloadData.list[0]}</span>
       <span>{downloadData.list[1]}</span>
      </div>
    </div>
    <div className="downImg col-lg-6 col-sm-12">
      <img className='w-100 h-100' src={downloadData.image} alt="" />
    </div>
   </div>
  </Container>
  </>
}
