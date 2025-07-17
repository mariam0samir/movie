import React from 'react'
import SearchForm from '../../Components/SearchForm/SearchForm' 
import  {  EmptyPlaceholder } from '../../Components/emptyPlaceholder/EmptyPlaceholder'
import { useDispatch, useSelector } from 'react-redux'
import { useRef ,useEffect,useState } from 'react'
import { fetchSearchMovies } from '../../Store/slices/searchSlice';
import { Container } from 'react-bootstrap'
import SearchList from './SearchList'


export default function Search() {

const dispatch = useDispatch();
const searchInputRef = useRef();
const { data, loading } = useSelector((state) => state.search);

console.log(data)

const [text,setText]=useState(
  sessionStorage.getItem("searchText")?
  sessionStorage.getItem("searchText"):""
)


const handelSearch=(e)=>{
  setText(e.target.value)
  dispatch(fetchSearchMovies({word:e.target.value}))
  sessionStorage.setItem("searchText",e.target.value)
}
useEffect(()=>{
searchInputRef.current.focus();
text !==""&&dispatch(fetchSearchMovies({word:text}))
},[dispatch,text])




  return (
    <div>
      <Container>
        <SearchForm
          value={text}
          onChange={handelSearch}
          searchInputRef={searchInputRef}
        />

          {text?(
            <SearchList data={data} loading={loading}/>
          ):(
            <EmptyPlaceholder text="Search For Your Favorite Movie" />
          )
        }
       
       
      </Container>
       
    </div>
  )
}
