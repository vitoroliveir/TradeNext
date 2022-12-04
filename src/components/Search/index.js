import {
    SearchBox,
    Input
}from './style'
import { React, useRef, useState } from 'react'
import Link from 'next/link'
import { BiSearchAlt2 } from "react-icons/bi";

function Search() {
  const [search , setSearch] = useState('')
  const nameInputRef = useRef()


  function onChange(e){
    setSearch(e.target.value)
  }

  
  return (
    <SearchBox >
        <Input  type="text" onChange={onChange} ref={nameInputRef} />
        <Link href={`${search?"/result/" + search: "/"}`}>
        <BiSearchAlt2 />

        </Link>
        
    </SearchBox>
  )
}

export default Search