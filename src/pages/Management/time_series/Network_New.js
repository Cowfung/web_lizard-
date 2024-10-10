import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
function NetworkNew() {
    return (
        <Fragment>
            <Header></Header>
            <div className="khuon_management">
                <div className="duongdan">
                    <Link className='a_management' to="/management">MANAGEMENT</Link> {'>'}
                    <Link className='a_management' to='/management_data'>DATA MANAGEMNT</Link> {'>'}
                    <Link className='a_management' to='/time_series_home'>TIME SERIES</Link> {'>'}
                    <Link className='a_management' to='/net_work'>MONITORING NETWORKS</Link> {'>'} NEW
                </div>
                <div className="list">
                    <div className="list1">
                        <Link to="/net_work"><div><i style={{ color: '#008080' }} className="fa-solid fa-arrow-left fa-2xl" /></div></Link>
                        <div className="logouser">
                            <img src="../../../assets/img/monitoring-removebg-preview.png" alt="" />
                            <p style={{ fontWeight: 'bold', width: '200px' }}>MONITORING NETWORKS</p>
                        </div>
                        <div style={{ marginLeft: '70px' }} className="noidung">
                            <p style={{ paddingTop: '10px' }}>From to edit monitoring networks,Please<br /> select a field to get more<br /> information </p>
                        </div>
                    </div>
                    <div className="list3">
                        <div className="wms_new">
                            <form>
                                <p>1 : GENERAL</p>
                                <p>Name *</p>
                                <input className="wms_input" type="text" placeholder="Please enter at least 3 character" />
                                <p>Description</p>
                                <textarea cols={30} rows={10} defaultValue={""} />
                                <p>2 : DATA</p>
                                <p>Time Series</p>
                                <button style={{ backgroundColor: '#008080c4', width: '120px', height: '40px', color: 'white' }}>MANAGE</button>
                                <p>3 : RIGHTS</p>
                                <p>Accessibility:</p>
                                <select style={{ width: '500px', height: '50px' }} id="accessibility" required>
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                                <p>Organisation :</p>
                                <select style={{ width: '500px', height: '50px' }} required>
                                    <option value="Cowfung">Cowfung</option>
                                    <option value="private">NO</option>
                                    <option value="public">NO</option>
                                </select>
                                <div className="nutsubmit" style={{ display: 'flex', justifyContent: 'space-between', width: '1100px' }}>
                                    <Link to="/net_work"><button type="button" style={{ backgroundColor: 'white', width: '100px' }}>CANCEL</button></Link>
                                    <button type="submit" style={{ width: '100px' }}>SAVE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div></div>
        </Fragment>
    )
}

export default NetworkNew;