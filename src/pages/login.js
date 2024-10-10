
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <div className="khuonlogo"><img className="logo_login" src="https://demo.lizard.net/management/lizard.f09c662ab90cda92e98077f8c7504383.svg" alt="" /></div>
            <div className="noidunglogin" style={{ backgroundColor: 'white' }}>
                <div className="khuon1">
                    <div className="khuon1_menu">
                        <p className="nd_login">Sign in with your corporate ID</p>
                        <button><a className="a_login" href="# ">NelenSchuumans</a></button>
                        <button><a className="a_login" href="# ">HHNK</a></button>
                        <button>< a className="a_login" href="# ">GemeenteUtrecht</a></button>
                    </div>
                    <div className='khuon1-2'>
                        <p className="nd_login">Sign in with your social account</p>
                        <button>
                            <i className="fa-brands fa-google" style={{ marginLeft: '-100px' }} /><a href="# " style={{ color: 'black' }}> Continue with Google</a></button>
                    </div>
                </div>
                <div className="khuon2">
                    <div className="or">or</div>
                    <div className="khuon2_menu">
                        <p className="nd_login">Sign in with your username and password</p>
                        <p className="nd_login">Username</p>
                        <input type="text" placeholder="Username" id="name" />
                        <p className="nd_login">Password</p>
                        <input type="text" placeholder="Password" id="password" />
                        <a className="a_login" href="# " style={{ color: '#008080' }}>Forgot your password?</a>
                        <button><Link className="a_login" to="/home">Sign in</Link></button>
                        <p className="nd_login">Need an account? <a className="a_login" href="# " style={{ color: '#008080' }}>Sign up</a></p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Login;