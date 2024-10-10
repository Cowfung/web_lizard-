import React, { Fragment } from 'react';
import Header from '../header';
import { Link } from 'react-router-dom';
function Management() {
    return (
        <Fragment>
            <Header />
            <div className="khuon_management">
                <div className="duongdan"><Link className='a_management' to="/home">HOME</Link> {'>'} MANAGEMENT </div>
                <div className="submenu">
                    <Link className='a_management' to="/users">
                        <img className='img_management' src="../../../assets/img/snapedit_1695387052712.png" alt="" />
                        <p className='p_management'>USERS</p>
                    </Link>
                    <Link className='a_management' to="/management_data">
                        <img className='img_management' src="../../../assets/img/master-data-2.png" alt="" />
                        <p className='p_management'>DATA MANAGEMENT</p>
                    </Link>
                    <a className='a_management' href="# ">
                        <img className='img_management' src="../../../assets/img/173008.png" alt="" />
                        <p className='p_management'>ALARMS</p>
                    </a>
                </div>
            </div>
        </Fragment>

    )
}
export default Management;