import React, { Fragment, useState } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
import axios from 'axios';


function RasterSource() {
    const [open, setOpen] = useState(false);
    const handleButtonClick = () => {
        setOpen(false);
    }

    const baseURL = " https://demo.lizard.net/api/v4/rastersources?_limit=10";
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
                    <Link className='a_management' to='/raster_home'>RASTER </Link> {'>'} RASTER SOURCE
                </div>
                <div className="list">
                    <div className="list1">
                        <Link to="/raster_home"><div><i style={{ color: '#008080' }} className="fa-solid fa-arrow-left fa-2xl" /></div></Link>
                        <div className="logouser">
                            <img src="../../../assets/img/raster down.png" alt="" />
                            <p style={{ fontWeight: 'bold', width: '200px' }}>RASTERS SOURCE</p>
                        </div>
                        <div style={{ marginLeft: '70px' }} className="noidung">
                            <p style={{ paddingTop: '10px' }}>Raster Sources are the containers <br /> for your raster data.<br />When your raster data is<br /> uploaded to a Raster Source , it <br />can be published as a Raster <br /> Layer to be visualized in the Catalogue and the Portal or <br />it can be used in a GeoBlocks model.</p>
                        </div>
                    </div>
                    <div className="list2">
                        <div className="noidung2">
                            <div style={{ display: 'flex' }}>
                                <input type="text" placeholder="Type to search" style={{ width: '300px', height: '35px', paddingLeft: '10px' }} />
                            </div>
                            <div>

                                <div id="form" ><button onClick={() => setOpen(true)} style={{ backgroundColor: '#0080809c', width: '150px', height: '30px', borderRadius: '4px' }}>+NEW ITEM</button></div>
                                {open && (
                                    <div className='form'>
                                        <div className="form_raster" >
                                            <form>
                                                <label>Tên raster source :</label>
                                                <input id="name_source" style={{ width: '300px' }} type="text" placeholder="Name" />
                                                <label style={{ paddingTop: '10px' }}>Tệp geotiff </label>
                                                <input className="geotiff" style={{ paddingTop: '10px', paddingBottom: '10px' }} type="file" id="geoTiffFile" accept=".tiff, .tif" />
                                                <label>Nhập Code :</label>
                                                <input id="code" style={{ width: '300px' }} type="text" placeholder="Code" />
                                                <label style={{ paddingBottom: '10px', paddingTop: '10px' }}>Dấu thời gian:</label>
                                                <select style={{ textAlign: 'center', width: '300px' }} id="time">
                                                    <option value>-- Chọn dấu thời gian --</option>
                                                    <option value="No">No</option>
                                                    <option value={1}>1</option>
                                                </select>
                                                <div className="button_form">
                                                    <button onClick={() => handleButtonClick()} id="exit" type="button">Cancel</button>
                                                    <button onClick={() => handleButtonClick()} id="save" style={{ backgroundColor: '#008080', width: '100px' }} type="button">SAVE</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="table">
                            <table id="table_source">
                                <thead>
                                    <tr><th className="username">Name<i className="bi bi-arrows-expand" /></th>
                                        <th className="email">Code <i className="bi bi-arrows-expand" /></th>
                                        <th className="Temporal">Temporal</th>
                                        <th>Sizes</th>
                                        <th className="chuthich" />
                                    </tr></thead>
                                <tbody id="table_source_body">
                                    {
                                        post.map((info, index) => {
                                            const formatFileSize = function (bytes) {
                                                const sufixes = ['B', 'kB', 'MB', 'GB', 'TB'];
                                                const i = Math.floor(Math.log(bytes) / Math.log(1024));
                                                return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
                                            };


                                            return <tr key={index}>
                                                <td>{info.name}</td>
                                                <td>{
                                                    info.code != null ? info.code : '(empty code)'
                                                }</td>
                                                <td>
                                                    {
                                                        info.temporal === false ? 'No' : 'Yes'
                                                    }
                                                </td>
                                                <td>{formatFileSize(info.size)}</td>
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
                                                                        <li style={{ fontSize: '16px' }} ><a href="# " >Edit  </a></li>
                                                                        <li style={{ fontSize: '16px' }} ><a href="# " >Delete </a></li>

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

export default RasterSource;

