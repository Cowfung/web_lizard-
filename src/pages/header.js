import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
function Header() {
    return (
        <Fragment>
            <header>

                <div className="khuon">
                    <Link to="/home" ><div><img className="logo" src="https://demo.lizard.net/management/lizard.f09c662ab90cda92e98077f8c7504383.svg" alt="" /></div></Link>
                    <div className="khuonmenu">
                        <div className="chucnang"><i className="fa-solid fa-house"></i><Link to='/home' className="a_header">HOME</Link></div>
                        <div className="chucnang"><i className="fa-solid fa-upload"> </i>Upload Queue</div>
                        <div className="chucnang"><i className="fa-solid fa-up-right-and-down-left-from-center"> </i>Nelen & Schuumans</div>
                        <div className="chucnang">
                            <div className="info"><i className="fa-solid fa-user" style={{ color: '#ffffff' }}></i>Cowfung
                                <div className="dangxuat">
                                    <div><Link className="a_dangxuat" to="/">Logout</Link></div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </header>

        </Fragment>
    )
}
export default Header;