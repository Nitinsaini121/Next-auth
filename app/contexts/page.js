import React, { useContext } from 'react'
import { authContext } from '../layout'

function Chlid() {

    const {data}= useContext(authContext)
    console.log("data" , data)
  return (
    <div>Chlid</div>
  )
}

export default Chlid