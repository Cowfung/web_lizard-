import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
function ScenariosHome() {
    return (
        <Fragment>
            <Header />
            <div className="khuon_management">
                <div className="duongdan">
                    <Link className='a_management' to="/management">MANAGEMENT</Link> {'>'}
                    <Link className='a_management' to='/management_data'> DATA MANAGEMENT</Link> {'>'} SCENARIOS

                </div>
                <div className="submenu">
                    <Link className='a_management' to="/scenarios">
                        <img className='img_management' src="../../../../assets/img/house.png" alt="" />
                        <p className='p_management'>SCENARIOS</p>
                    </Link>
                    <Link className='a_management' to="/projects">
                        <img className='img_management' src="../../../../assets/img/project.png" alt="" />
                        <p className='p_management'>PROJECTS</p>
                    </Link>
                    <Link className='a_management' to="/management_data">
                        <img className='img_management' src="../../../../assets/img/back.png" alt="" />
                        <p className='p_management'>GO BACK</p>
                    </Link>


                </div>
            </div>
        </Fragment>
    )
}
export default ScenariosHome;