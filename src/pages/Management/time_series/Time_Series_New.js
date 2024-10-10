import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
function TimeNew() {
    return (
        <Fragment>
            <Header></Header>
            <div className="khuon_management">
                <div className="duongdan">
                    <Link className='a_management' to="/management">MANAGEMENT</Link> {'>'}
                    <Link className='a_management' to='/management_data'>DATA MANAGEMNT</Link> {'>'}
                    <Link className='a_management' to='/time_series_home'>TIME SERIES</Link> {'>'}
                    <Link className='a_management' to='/time_series'>TIME SERIES</Link> {'>'} NEW
                </div>
                <div className="list">
                    <div className="list1">
                        <Link to="/time_series"><div><i style={{ color: '#008080' }} className="fa-solid fa-arrow-left fa-2xl" /></div></Link>
                        <div className="logouser">
                            <img src="../../../assets/img/timeseries.png" alt="" />
                            <p style={{ fontWeight: 'bold', width: '200px' }}>TIME SERIES</p>
                        </div>
                        <div style={{ marginLeft: '70px' }} className="noidung">
                            <p style={{ paddingTop: '10px' }}>From to edit time-series,Please<br /> select a field to get more<br /> information </p>
                        </div>
                    </div>
                    <div className="list3">
                        <div className="wms_new">
                            <form>
                                <p>1 : GENERAL</p>
                                <p>Locations name*</p>
                                <input className="wms_input" type="text" placeholder="Please enter at least 3 character" />
                                <p>Code*</p>
                                <input className="wms_input" type="text" placeholder="Please enter at least 1 character" />
                                <p>2 : DATA</p>
                                <div className="wrapper">
                                    <p>Obvervation type*</p>
                                    <div className="select-btn">
                                        <span>-Search or Select-</span>
                                    </div>
                                    <div className="content">
                                        <input id="input" type="text" placeholder="Search" />
                                        <ul className="option">
                                        </ul>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <p>Location*</p>
                                    <div className="select-btn">
                                        <span>-Search or Select-</span>
                                    </div>
                                    <div className="content">
                                        <input id="input" type="text" placeholder="Search" />
                                        <ul className="option">
                                        </ul>
                                    </div>
                                </div>
                                <div className="wrapper">
                                    <p>Value type*</p>
                                    <div className="select-btn">
                                        <span>-Search-</span>
                                    </div>
                                    <div className="content">
                                        <input id="input" type="text" placeholder="Search" />
                                        <ul className="option">
                                        </ul>
                                    </div>
                                </div>
                                <p>Interval</p>
                                <input type="checkbox" />
                                <table className="time">
                                    <tbody>
                                        <tr>
                                            <td><b>Day</b></td>
                                            <td><b>Hour</b></td>
                                            <td />
                                            <td><b>Minute</b></td>
                                            <td><b>Second</b></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" className="innormal" /></td>
                                            <td><input type="text" className="innormal" /></td>
                                            <td style={{ paddingLeft: '10px', paddingRight: '10px' }}> : </td>
                                            <td><input type="text" className="innormal" /></td>
                                            <td><input type="text" className="innormal" /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>Extra metadata (JSON)</p>
                                <input className="wms_input" type="text" placeholder="Specfied in JSON" />
                                <p>3 : RIGHTS</p>
                                <p>Accessibility:</p>
                                <select style={{ width: '500px', height: '50px' }} id="accessibility" required>
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                                <p>Username of supplier :</p>
                                <select style={{ width: '500px', height: '50px' }} required>
                                    <option value="Cowfung">Cowfung</option>
                                    <option value="private">NO</option>
                                    <option value="public">NO</option>
                                </select>
                                <p>Supplier code:</p>
                                <select style={{ width: '500px', height: '50px' }} required>
                                    <option style={{ textAlign: 'center' }} value>--CHOOSE---</option>
                                    <option value="code1">123121</option>
                                    <option value="code2">323241</option>
                                </select>
                                <div className="nutsubmit">
                                    <button type="submit">SAVE</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default TimeNew;