import {
  SearchBox,
  Input,
  Mess
} from './style'
import { React, useRef, useState } from 'react'
import Router from 'next/router'
import { BiSearchAlt2 } from "react-icons/bi";
import { Message } from '../Message';

function Search() {
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(false)
  const nameInputRef = useRef()


  function onChange(e) {
    setSearch(e.target.value)
  }

  const sanitizeTicker = (value) => String(value || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '')

  const goToStock = () => {
    const ticker = sanitizeTicker(search)

    if (!ticker) {
      setMessage(true)

      setTimeout(function () {
        setMessage(false)
      }, 3000)
      return
    }

    Router.push(`/acao/${ticker}`)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      goToStock()
    }
  }


  return (
    <>
      <SearchBox onKeyDown={handleKeyDown} >

        <Input type="text" onChange={onChange} ref={nameInputRef} placeholder='Pesquisa por ativos' />
        <BiSearchAlt2 onClick={goToStock} />

      </SearchBox>

      {message ? <Mess><Message /></Mess>  : null}
    </>
  )
}

export default Search
