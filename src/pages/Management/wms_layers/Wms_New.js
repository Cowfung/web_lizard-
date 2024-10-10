import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
function WmsNew() {
    return (
        <Fragment>
            <Header></Header>
            <div className="khuon_management">
                <div className="duongdan">
                    <Link className='a_management' to="/management">MANAGEMENT</Link> {'>'}
                    <Link className='a_management' to='/management_data'>DATA MANAGEMNT</Link> {'>'}
                    <Link className='a_management' to='/wms_layers'>WMS LAYERS</Link> {'>'} NEW

                </div>
                <div className="list">
                    <div className="list1">
                        <Link to="/wms_layers"><div><i style={{ color: '#008080' }} className="fa-solid fa-arrow-left fa-2xl" /></div></Link>
                        <div className="logouser">
                            <img src="../../../assets/img/1632660-200.png" alt="" />
                            <p style={{ fontWeight: 'bold', width: '200px' }}>WMS LAYERS</p>
                        </div>
                        <div style={{ marginLeft: '70px' }} className="noidung">
                            <p style={{ paddingTop: '10px' }}>WMS-Layers allow to configue layers in lizard even if they are hosted on another platform</p>
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
                                <div className="wrapper">
                                    <p>Tag / Datasets</p>
                                    <div className="select-btn">
                                        <span>--Search or Select--</span>
                                    </div>
                                    <div className="content">
                                        <input id="input" type="text" placeholder="Search" />
                                        <ul className="option">
                                        </ul>
                                    </div>
                                </div>
                                <p>2 : DATA</p>
                                <p>WMS URL*</p>
                                <input className="wms_input" type="link" placeholder="http://example.com" />
                                <p>Slug*</p>
                                <input className="wms_input" type="text" placeholder="Slug for this WMS" />
                                <p>Download URL</p>
                                <input className="wms_input" type="link" placeholder="http://example.com" />
                                <p>Legend URL</p>
                                <input className="wms_input" type="link" placeholder="http://example.com" />
                                <p>Get Feature URL</p>
                                <input className="wms_input" type="link" placeholder="http://example.com" />
                                <p>Tiled :</p>
                                <div className="wms_radio" style={{ display: 'flex', width: '220px', justifyContent: 'space-around' }}>
                                    Enabled <input type="radio" defaultChecked="checked" name="ok" />
                                    Disable <input type="radio" name="ok" />
                                </div>
                                <p>Min and max zoom :</p>
                                <div className="wms_radio" style={{ display: 'flex', width: '800px' }}>
                                    0 (world scale) <input style={{ height: '30px', marginRight: '20px', marginLeft: '10px' }} type="radio" name="no" />
                                    31 (Zoomed at house) <input style={{ height: '30px', marginLeft: '10px' }} type="radio" name="no" />
                                </div>
                                <p>Spatial Bounds :</p>
                                <input className="wms_input" type="text" id="extent" name="extent" placeholder="Enter spatial bounds" /><br /><br />
                                <input className="wms_input" type="submit" defaultValue="Get from source" />
                                <p>Option (JSON)</p>
                                <input className="wms_input" type="text" placeholder="Specfied in JSON" />
                                {/* <form id="optionsForm">
                            <label for="options">Options:</label>
                            <textarea id="options" name="options" rows="4" cols="50"></textarea><br><br>
                            <button type="submit">Submit</button>
                          </form> */}
                                <p>3 : RIGHTS</p>
                                <p>Accessibility:</p>
                                <select style={{ width: '500px', height: '50px' }} id="accessibility" required>
                                    <option value="private">Private</option>
                                    <option value="public">Public</option>
                                </select>
                                <p>Shared with : </p>
                                <div className="hienthi">
                                    <div id="chophep" className="chophep">
                                        <span>Cho phép</span>
                                    </div>
                                    <div>
                                        <ul className="tuychon">
                                        </ul>
                                    </div>
                                </div>
                                <input type="checkbox" /> Không cho phép
                                <p>Organisation : </p>
                                <input className="wms_input" type="text" defaultValue="Tổ chức A" />
                                <p>Supplier :</p>
                                <select style={{ width: '500px', height: '50px' }} required>
                                    <option value="Cowfung">Cowfung</option>
                                    <option value="private">NO</option>
                                    <option value="public">NO</option>
                                </select>
                                <div className="nutsubmit">
                                    <button type="submit">SAVE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div></div>
        </Fragment>
    )
}

export default WmsNew;