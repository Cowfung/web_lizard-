import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
function LabelsHome() {
    return (
        <Fragment>
            <Header />
            <div className="khuon_management">
                <div className="duongdan">
                    <Link className='a_management' to="/management">MANAGEMENT</Link> {'>'}
                    <Link className='a_management' to='/management_data'> DATA MANAGEMENT</Link> {'>'} LABELS

                </div>
                <div className="submenu">
                    <Link className='a_management' to="/labels">
                        <img className='img_management' src="../../../../assets/img/label_type-removebg-preview.png" alt="" />
                        <p className='p_management'>LABEL TYPES</p>
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
export default LabelsHome;