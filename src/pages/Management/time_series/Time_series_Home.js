import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
function TimeHome() {
    return (
        <Fragment>
            <Header />
            <div className="khuon_management">
                <div className="duongdan">
                    <Link className='a_management' to="/management">MANAGEMENT</Link> {'>'}
                    <Link className='a_management' to='/management_data'> DATA MANAGEMENT</Link> {'>'} TIME SERIES

                </div>
                <div className="submenu">
                    <Link className='a_management' to="/location">
                        <img className='img_management' src="../../../../assets/img/location.png" alt="" />
                        <p className='p_management'>LOCATIONS</p>
                    </Link>
                    <Link className='a_management' to="/time_series">
                        <img className='img_management' src="../../../../assets/img/timeseries.png" alt="" />
                        <p className='p_management'>TIME SERIES</p>
                    </Link>
                    <Link className='a_management' to="/net_work">
                        <img className='img_management' src="../../../../assets/img/monitoring-removebg-preview.png" alt="" />
                        <p className='p_management'>MONITORING NETWORKS</p>
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
export default TimeHome;