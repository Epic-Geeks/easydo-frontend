import React from 'react'
import cookies from "react-cookies"
const CustomerProfile = () => {
  return (
    <div>{cookies.load("name")} Profile</div>
  )
}

export default CustomerProfile