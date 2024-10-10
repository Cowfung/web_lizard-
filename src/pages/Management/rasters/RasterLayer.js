import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RasterLayers() {

    const baseURL = "https://demo.lizard.net/api/v4/rasters?_limit=10";
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data.results);


        });
    }, []);

    if (!post) return null;

    return (
        <Fragment>
            <Header
            />
            <div className="khuon_management">
                <div className="duongdan">
                    <Link className='a_management' to="/management">MANAGEMENT</Link> {'>'}
                    <Link className='a_management' to='/management_data'>DATA MANAGEMNT</Link> {'>'}
                    <Link className='a_management' to='/raster_home'>RASTER </Link> {'>'} RASTER LAYERS
                </div>
                <div className="list">
                    <div className="list1">
                        <Link to="/raster_home"><div><i style={{ color: '#008080' }} className="fa-solid fa-arrow-left fa-2xl" /></div></Link>
                        <div className="logouser">
                            <img src="../../../assets/img/raster up.png" alt="" />
                            <p style={{ fontWeight: 'bold', width: '200px' }}>RASTERS LAYERS</p>
                        </div>
                        <div style={{ marginLeft: '70px' }} className="noidung">
                            <p style={{ paddingTop: '10px' }}>Raster Layers are visual presentations of your raster data. Choose the prefered Raster Source so that the Raster Layer fetches the right data and give the Raster Layer a name, description, observation type and styling.Once published, your Raster Layer will be visible in the Catalogue and the Portal</p>
                        </div>
                    </div>
                    <div className="list2">
                        <div className="noidung2">
                            <div style={{ display: 'flex' }}>
                                <input type="text" placeholder="Type to search" style={{ width: '300px', height: '35px', paddingLeft: '10px' }} />
                            </div>
                            <div>
                                <div id="form"><button style={{ backgroundColor: '#0080809c', width: '150px', height: '30px', borderRadius: '4px' }}>+NEW ITEM</button></div>
                                {/* <div className="form">
                                    <div className="form_raster" style={{ height: '300px' }}>
                                        <form>
                                            <label htmlFor>Name Raster Layer :</label>
                                            <input style={{ width: '300px' }} type="text" placeholder="Name" />
                                            <label style={{ paddingBottom: '10px', paddingTop: '10px' }} htmlFor>Raster Source :</label>
                                            <select style={{ textAlign: 'center', width: '300px' }} name id="time">
                                                <option value>--Chọn Raster source--</option>
                                                <option value>example</option>
                                                <option value>example2</option>
                                                <option value>example3</option>
                                            </select>
                                            <label style={{ paddingBottom: '10px', paddingTop: '10px' }}>Dấu thời gian:</label>
                                            <select style={{ textAlign: 'center', width: '300px' }} id="timeStamp">
                                                <option value>-- Chọn dấu thời gian --</option>
                                                <option value="dữ liệu 1">No</option>
                                                <option value="dữ liệu 2">1</option>
                                            </select>
                                            <div className="button_form">
                                                <button id="exit">Cancel</button>
                                                <button style={{ backgroundColor: '#008080', width: '100px' }}>SAVE</button>
                                            </div>
                                        </form>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="table">
                            <table>
                                <thead>
                                    <tr><th><input type="checkbox" /></th>
                                        <th className="username">Name <i className="bi bi-arrows-expand" /></th>
                                        <th className="email">Based on </th>
                                        <th className="Temporal">User <i className="bi bi-arrows-expand" /></th>
                                        <th>Temporal</th>
                                        <th className="chuthich" />
                                    </tr></thead>
                                <tbody>
                                    {
                                        post.map((info, index) => {
                                            return <tr key={index}>
                                                <td><input type="checkbox" /></td>
                                                <td>{info.name}</td>
                                                <td>{info.is_geoblock === false ? 'Raster source' : 'Geoblock'}</td>
                                                <td></td>
                                                <td>
                                                    {
                                                        info.temporal === false ? 'No' : 'Yes'
                                                    }</td>
                                                <td style={{ float: 'right' }}>
                                                    <div id="container">
                                                        <div id="menu-wrap">
                                                            <input type="checkbox" className="toggler" />
                                                            <div className="dots">
                                                                <div />
                                                            </div>
                                                            <div className="menu" >
                                                                <div className="edit">
                                                                    <ul >
                                                                        <li style={{ fontSize: '16px' }} ><a href="# " className="link">Edit</a></li>
                                                                        <li style={{ fontSize: '16px' }} ><a href="# " className="link">Delete</a></li>

                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="page_nav" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                            <a href="# "> <i className="fa-solid fa-arrow-left" /> </a>
                            <a href="# "><i className="fa-solid fa-arrow-right"></i></a>
                            <label>items per page:
                                <select style={{ marginLeft: '10px' }}>
                                    <option value={10}>10</option>
                                    <option value={20}>20</option>
                                    <option value={30}>30</option>
                                </select>
                            </label>
                        </div>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}
export default RasterLayers;