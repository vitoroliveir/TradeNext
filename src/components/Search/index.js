import {
  SearchBox,
  Input,
  Mess
} from './style'
import { React, useRef, useState } from 'react'
/* import Link from 'next/link' */
import { BiSearchAlt2 } from "react-icons/bi";
import { Message } from '../Message';

function Search() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(false)
  const nameInputRef = useRef()


  function onChange(e) {
    setSearch(e.target.value)
  }

  const onMessage = () => {
    setMessage(true)

    setTimeout(function () {
      setMessage(false)
    }, 3000)
  }


  return (
    <>
      <SearchBox >

        <Input type="text" onChange={onChange} ref={nameInputRef} placeholder='Pesquisa por ativos' />
        {/* <Link href={`${search?"/result/" + search: "/"}`} > */}
        <BiSearchAlt2 onClick={onMessage} />
        {/* </Link> */}

      </SearchBox>

      {message ? <Mess><Message /></Mess>  : null}
    </>
  )
}

export default Search