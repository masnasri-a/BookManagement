import Image from 'next/image'
import React from 'react'
import Logo from '../../public/login.svg'
function index() {
  return (
    <>
    <div className="mainLogin">
        <div className="leftLogin">
            <div className="formLogin">
                <p>Access your account!</p>
                <label>Username</label>
                <input type="text" placeholder='Username' />
                <br />
                <label>Password</label>
                <input type="password" placeholder='Password' />
                <button>Login</button>
            </div>
        </div>
        <div className="rightLogin">
          <div className="imageLogin">
              <Image src={Logo} alt="logo" />
              <p>Discover the Best Books on Management and Leadership</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default index