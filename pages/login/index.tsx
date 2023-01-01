import React from 'react'

function index() {
  return (
    <>
    <div className="mainLogin">
        <div className="leftLogin">
            <div className="formLogin">
                <p>Access your account!</p>
                <p>Username</p>
                <input type="text" placeholder='Username' />
                <p>Password</p>
                <input type="password" placeholder='Password' />
                <button>Login</button>
            </div>
        </div>
        <div className="rightLogin">Right</div>
    </div>
    </>
  )
}

export default index