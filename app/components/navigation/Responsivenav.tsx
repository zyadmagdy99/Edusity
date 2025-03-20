import React, { useState } from 'react'
import Mobilenav from './Mobilenav'
import Nav from './Nav'

const Responsivenav = () => {
    const [ShowNav, setShowNav] = useState(false)
    const openNav = () => {
        setShowNav(true)
    }
    const closeNav = () => {
      setShowNav(false)
    }
  return (
    <div>
      <Mobilenav closeNav={closeNav} ShowNav={ShowNav}/>
      <Nav openNav={openNav}/>
    </div>
  )
}

export default Responsivenav
