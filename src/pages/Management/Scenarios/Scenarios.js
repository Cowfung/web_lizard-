import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Scenarios() {

    const baseURL = "https://demo.lizard.net/api/v4/scenarios?_limit=10";
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
                    <Link className='a_management' to='/scenarios_home'>SCENARIOS</Link> {'>'} SCENARIOS
                </div>
                <div className="list">
                    <div className="list1">
                        <Link to="/scenarios_home"><div><i style={{ color: '#008080' }} className="fa-solid fa-arrow-left fa-2xl" /></div></Link>
                        <div className="logouser">
                            <img src="../../../assets/img/house.png" alt="" />
                            <p style={{ fontWeight: 'bold', width: '200px' }}>SCENARIOS</p>
                        </div>

                        <div style={{ marginLeft: '70px' }} className="noidung">
                            <div style={{ padding: '30px 0 20px 0' }}>Scenario storage used for <br /> <b>Nelen &amp; Schuurmans <br /> Consultancy</b></div>
                            <div className="progess" >
                                <h3>3.54<span>G.B</span></h3>
                            </div>
                            <div style={{ textAlign: 'center', paddingBottom: '30px', paddingTop: '5px' }}>of 200.00 Gb</div>
                        </div>
                    </div>
                    <div className="list2">
                        <div className="noidung2">
                            <div style={{ display: 'flex' }}>
                                <input type="text" placeholder="Type to search" style={{ width: '300px', height: '35px', paddingLeft: '10px' }} />
                                <div className="menuuser" style={{ marginLeft: '10px' }}>Names *<i style={{ marginLeft: '50px' }} className="bi bi-caret-down-fill" /></div>
                            </div>
                            <div>
                                <div id="form">
                                    <Link to="/scenarios_new"><button style={{ backgroundColor: '#0080809c', width: '150px', height: '30px', borderRadius: '4px' }}>+NEW ITEM</button></Link>
                                </div>
                            </div>
                        </div>
                        <div style={{ fontStyle: 'italic', fontSize: '13px', paddingBottom: '20px', textAlign: 'left' }}>(*) Only support filtering by fisrt letters and is case sensitive</div>
                        <div className="table">
                            <table>
                                <thead>
                                    <tr><th><input type="checkbox" /></th>
                                        <th className="username">Name <i className="bi bi-arrows-expand" /></th>
                                        <th>Based on <i className="bi bi-arrows-expand" /></th>
                                        <th className="Temporal">Raw data</th>
                                        <th>Last Update</th>
                                        <th>Size</th>
                                        <th className="chuthich" />
                                    </tr></thead>
                                <tbody>
                                    {

                                        post.map((info, index) => {
                                            const formatFileSize = function (bytes) {
                                                const sufixes = ['B', 'kB', 'MB', 'GB', 'TB'];
                                                const i = Math.floor(Math.log(bytes) / Math.log(1024));
                                                return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
                                            };
                                            return <tr key={index}>
                                                <td><input type="checkbox" /></td>
                                                <td>{info.name}</td>
                                                <td></td>
                                                <td>
                                                    {
                                                        info.has_raw_results === false ? 'No' : 'Yes'
                                                    }
                                                </td>
                                                <td>{(info.last_modified).slice(0, 10)}</td>
                                                <td>{formatFileSize(info.total_size)}</td>
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

        </Fragment >
    )
}
export default Scenarios;