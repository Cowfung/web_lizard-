import React, { Fragment } from "react";
import Header from '../../header';
import { Link } from 'react-router-dom';
// import axios from 'axios';
function Users() {
    //     const baseURL = "https://demo.lizard.net/api/v4/users/";
    //     const [post, setPost] = React.useState(null);
    //     React.useEffect(() => {
    //         axios.get(baseURL).then((response) => {
    //             setPost(response.data);
    //             console.log(response.data)

    //         });
    //     }, []);

    //     if (!post) return null;
    return (
        <Fragment>
            <Header></Header>
            <div className="khuon_management">
                <div className="duongdan">
                    <Link className='a_management' to='/home'>HOME </Link> {'>'}
                    <Link className='a_management' to="/management"> MANAGEMENT</Link> {'>'} USERS
                </div>
                <div className="list">
                    <div className="list1">
                        <Link to="/management"><div><i style={{ color: '#008080' }} className="fa-solid fa-arrow-left fa-2xl" /></div></Link>
                        <div className="logouser">
                            <i className="fa-solid fa-user fa-5x" style={{ color: '#008080' }} />
                            <p style={{ fontWeight: 'bold', marginRight: '5px' }}>USERS</p>
                        </div>
                        <div className="noidung">
                            <br />
                            <p>List of users</p>
                            <br />
                            <p>Select an user to edit his/her roles or click on the <b>New item</b> button on the top right corner to invite a new user. </p>
                            <br />
                            <p>Role Label :</p>
                            <ul>
                                <li><b style={{ color: '#008080' }}>U</b> - User</li>
                                <li><b style={{ color: 'rgba(34, 2, 34, 0.712)' }}>S</b>- Supplier</li>
                                <li><b style={{ color: 'goldenrod' }}>A</b> - Admin</li>
                                <li><b style={{ color: 'red' }}>M</b> - Manager</li>
                            </ul>
                        </div>
                    </div>
                    <div className="list2">
                        <div className="noidung2">
                            <div style={{ display: 'flex' }}>
                                <input type="text" placeholder="Type to search" style={{ width: '300px', height: '35px', paddingLeft: '10px' }} />
                                <div className="menuuser" style={{ marginLeft: '10px' }}>Username <i style={{ marginLeft: '20px' }} className="bi bi-caret-down-fill" /></div>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <button style={{ backgroundColor: '#0080809a', width: '200px', height: '30px', borderRadius: '4px', marginRight: '10px' }}>14 PENDING USERS</button>
                                <div id="form"><button style={{ backgroundColor: '#0080809c', width: '150px', height: '30px', borderRadius: '4px' }}>+NEW ITEM</button></div>

                            </div>
                        </div>
                        <div className="table">
                            <table>
                                <thead>
                                    <tr><th className="username">Usersname <i className="bi bi-arrows-expand" /></th>
                                        <th className="email">Email <i className="bi bi-arrows-expand" /></th>
                                        <th className="roles">Roles</th>
                                        <th className="chuthich" />
                                    </tr></thead>
                                <tbody>
                                    <tr>
                                        <td>cuong</td>
                                        <td>cuongphamdinh19@gmail.com</td>
                                        <td style={{ display: 'flex', position: 'relative' }}><div className="hinhtron">U</div><div className="hinhtron2">S</div><div className="hinhtron3">A</div><div className="hinhtron4">M</div></td>
                                        <td><i className="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>
                                    <tr>
                                        <td>cuong</td>
                                        <td>cuongphamdinh19@gmail.com</td>
                                        <td style={{ display: 'flex', position: 'relative' }}><div className="hinhtron">U</div><div className="hinhtron3">A</div></td>
                                        <td><i className="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>
                                    <tr>
                                        <td>cuong</td>
                                        <td>cuongphamdinh19@gmail.com</td>
                                        <td style={{ display: 'flex', position: 'relative' }}><div className="hinhtron">U</div><div className="hinhtron2">S</div></td>
                                        <td><i className="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>
                                    <tr>
                                        <td>cuong</td>
                                        <td>cuongphamdinh19@gmail.com</td>
                                        <td style={{ display: 'flex', position: 'relative' }}><div className="hinhtron">U</div><div className="hinhtron4">M</div></td>
                                        <td><i className="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>
                                    <tr>
                                        <td>cuong</td>
                                        <td>cuongphamdinh19@gmail.com</td>
                                        <td style={{ display: 'flex', position: 'relative' }}><div className="hinhtron">U</div><div className="hinhtron4">M</div></td>
                                        <td><i className="fa-solid fa-ellipsis-vertical" /></td>
                                    </tr>


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
export default Users;