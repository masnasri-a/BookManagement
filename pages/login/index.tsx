import React from 'react'

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
        <div className="rightLogin">Right</div>
    </div>
    </>
  )
}

export default index