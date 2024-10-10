import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
function ScenariosNew() {
    return (
        <Fragment>
            <Header></Header>
            <div className="khuon_management">
                <div className="duongdan">
                    <Link className='a_management' to="/management">MANAGEMENT</Link> {'>'}
                    <Link className='a_management' to='/management_data'>DATA MANAGEMNT</Link> {'>'}
                    <Link className='a_management' to='/scenarios_home'>SCENARIOS</Link> {'>'}
                    <Link className='a_management' to='/scenarios'>SCENARIOS</Link> {'>'} NEW
                </div>
                <div className="list">
                    <div className="list1">
                        <Link to="/scenarios"><div><i style={{ color: '#008080' }} className="fa-solid fa-arrow-left fa-2xl" /></div></Link>
                        <div className="logouser">
                            <img src="../../../assets/img/house.png" alt="" />
                            <p style={{ fontWeight: 'bold', width: '200px' }}>SCENARIOS</p>
                        </div>
                        <div style={{ marginLeft: '70px' }} className="noidung">
                            <p style={{ paddingTop: '10px' }}>From to edit SCENARIOS,Please<br /> select a field to get more<br /> information </p>
                        </div>
                    </div>
                    <div className="list3">
                        <div className="wms_new">
                            <form>
                                <p>1 : GENERAL</p>
                                <p>Name *</p>
                                <input className="wms_input" type="text" placeholder="Please enter at least 3 character" />
                                <p>Description</p>
                                <textarea name id cols={30} rows={10} defaultValue={""} />
                                <p>2 : DATA</p>
                                <table className="delete ">
                                    <tbody>
                                        <tr>
                                            <td style={{ paddingBottom: '30px' }}><b>Raw</b></td>
                                            <td style={{ paddingBottom: '30px' }}><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Calculation Core Logging</td>
                                            <td><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr>
                                        <tr>
                                            <td>Grid Administration</td>
                                            <td><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ paddingBottom: '30px', paddingTop: '50px' }}><b>Basic</b></td>
                                            <td style={{ paddingBottom: '30px', paddingTop: '50px' }}><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: 'rgb(0, 81, 255)' }}>Rate of rise</td>
                                            <td><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: 'rgb(0, 81, 255)' }}>Flood hazard rating</td>
                                            <td><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: 'rgb(0, 81, 255)' }}>Rain</td>
                                            <td><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: 'rgb(0, 81, 255)' }}>Max water level</td>
                                            <td><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: 'rgb(0, 81, 255)' }}>Max flow velocity</td>
                                            <td><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr>
                                        <tr>
                                            <td style={{ color: 'rgb(0, 81, 255)' }}>Max water depth</td>
                                            <td><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr><tr>
                                            <td style={{ color: 'rgb(0, 81, 255)' }}>Water depth (timeseries)</td>
                                            <td><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr><tr>
                                            <td style={{ color: 'rgb(0, 81, 255)' }}>Water level (timeseries)</td>
                                            <td><i className="fa-solid fa-trash" style={{ color: '#c42142' }} /></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>3 : RIGHTS</p>
                                <p>Accessibility:</p>
                                <select style={{ width: '500px', height: '50px' }} id="accessibility" required>
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                                <div className="nutsubmit" style={{ display: 'flex', justifyContent: 'space-between', width: '1100px' }}>
                                    <Link to="/scenarios"><button type="button" style={{ backgroundColor: 'white', width: '100px' }}>CANCEL</button></Link>
                                    <button type="submit" style={{ width: '100px' }}>SAVE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ScenariosNew;