import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
function RasterHome() {
    return (
        <Fragment>
            <Header />
            <div className="khuon_management">
                <div className="duongdan">
                    <Link className='a_management' to="/management">MANAGEMENT</Link> {'>'}
                    <Link className='a_management' to='/management_data'>DATA MANAGEMNT</Link> {'>'} RASTER

                </div>
                <div className="submenu">
                    <Link className='a_management' to="/raster_source">
                        <img className='img_management' src="../../../../assets/img/raster down.png" alt="" />
                        <p className='p_management'>RASTERS SOURCES</p>
                    </Link>
                    <Link className='a_management' to="/raster_layer">
                        <img className='img_management' src="../../../../assets/img/raster up.png" alt="" />
                        <p className='p_management'>RASTERS LAYERS</p>
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
export default RasterHome;