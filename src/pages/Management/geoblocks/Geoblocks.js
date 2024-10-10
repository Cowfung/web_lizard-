import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Geoblocks() {
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
                    <Link className='a_management' to='/management_data'>DATA MANAGEMNT</Link> {'>'} GEOBLOCKS
                </div>
                <div className="list">
                    <div className="list1">
                        <Link to="/management_data"><div><i style={{ color: '#008080' }} className="fa-solid fa-arrow-left fa-2xl" /></div></Link>
                        <div className="logouser">
                            <img src="../../../assets/img/geoblocks-1.png" alt="" />
                            <p style={{ fontWeight: 'bold', width: '180px' }}>GEOBLOCKS</p>
                        </div>
                        <div style={{ marginLeft: '70px' }} className="noidung">
                            <p style={{ paddingTop: '10px' }}>GeoBlocks management.
                            </p></div>
                    </div>
                    <div className="list2">
                        <div className="noidung2">
                            <div style={{ display: 'flex' }}>
                                <input type="text" placeholder="Type to search" style={{ width: '300px', height: '35px', paddingLeft: '10px' }} />
                                <div className="menuuser" style={{ marginLeft: '10px' }}>Names *<i style={{ marginLeft: '50px' }} className="bi bi-caret-down-fill" /></div>
                            </div>
                            <div>
                                <div id="form">
                                    <Link to="/geoblocks_new"><button style={{ backgroundColor: '#0080809c', width: '150px', height: '30px', borderRadius: '4px' }}>+NEW ITEM</button></Link>
                                </div>

                            </div>
                        </div>
                        <div style={{ fontStyle: 'italic', fontSize: '13px', paddingBottom: '20px', textAlign: 'left' }}>(*) Only support filtering by fisrt letters and is case sensitive</div>
                        <div className="table">

                            <table>
                                <thead>
                                    <tr><th><input type="checkbox" /></th>
                                        <th className="username">Name<i className="bi bi-arrows-expand" /></th>
                                        <th>Operations<i className="bi bi-arrows-expand" /></th>
                                        <th>User</th>
                                        <th>Accessibility</th>
                                        <th className="chuthich" />
                                    </tr></thead>
                                <tbody>
                                    {
                                        post.map((info, index) => {
                                            return <tr key={index}>
                                                <td><input type="checkbox" /></td>
                                                <td>{info.is_geoblock === true ? `${info.name}` : null} </td>
                                                <td>{info.is_geoblock === true ? `${(info.first_value_timestamp).slice(0, 10)}` : null}</td>
                                                <td>{info.is_geoblock === true ? `${info.organisation.name}` : null}</td>
                                                <td>{info.is_geoblock === true ? `${info.access_modifier}` : null}</td>
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
                                                                        <li style={{ fontSize: '16px' }} ><a href="# " >Edit</a></li>
                                                                        <li style={{ fontSize: '16px' }} ><a href="# " >Delete</a></li>

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
export default Geoblocks;