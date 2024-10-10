import React, { Fragment } from "react";
import Header from '../header';
import { Link } from 'react-router-dom';
function ManagementData() {
    return (
        <Fragment>
            <Header />
            <div className="khuon_management">
                <div className="duongdan"><Link className='a_management' to="/home">HOME</Link> {'>'} <Link className='a_management' to="/management">MANAGEMENT</Link> {'>'} DATA MANAGEMNT </div>
                <div className="submenu">
                    <Link className='a_management' to="/raster_home">
                        <img className='img_management' src="../../../assets/img/rasters.png" alt="" />
                        <p className='p_management'>RASTER</p>
                    </Link>
                    <Link className='a_management' to="/wms_layers">
                        <img className='img_management' src="../../../assets/img/1632660-200.png" alt="" />
                        <p className='p_management'>WMS LAYERS</p>
                    </Link>
                    <Link className='a_management' to="/layer_collections">
                        <img className='img_management' src="../../../assets/img/raster.png" alt="" />
                        <p className='p_management'>LAYERS COLLECTIONS</p>
                    </Link>
                    <Link className='a_management' to="/time_series_home">
                        <img className='img_management' src="../../../assets/img/time.png" alt="" />
                        <p className='p_management'>TIME SERIES</p>
                    </Link>
                    <Link className='a_management' to="/scenarios_home">
                        <img className='img_management' src="../../../assets/img/house.png" alt="" />
                        <p className='p_management'>SCENARIOS</p>
                    </Link>
                    <Link className='a_management' to="/label_home">
                        <img className='img_management' src="../../../assets/img/label.png" alt="" />
                        <p className='p_management'>LABELS</p>
                    </Link>
                    <Link className='a_management' to="/geoblocks">
                        <img className='img_management' src="../../../assets/img/geoblocks-1.png" alt="" />
                        <p className='p_management'>GEOBLOCKS</p>
                    </Link>
                    <Link className='a_management' to="/management">
                        <img className='img_management' src="../../../assets/img/back.png" alt="" />
                        <p className='p_management'>GO BACK</p>
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}
export default ManagementData;