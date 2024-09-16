import React from 'react'
import LogoLight from "../assets/img/Logo-light.png"
import { Link } from 'react-router-dom'
export const Logo = () => {
  return (
    <div className='h-6'>
      <Link to={"/"}>
        <img className='h-full' src={LogoLight} alt="" />
      </Link>
    </div>
  )
}
