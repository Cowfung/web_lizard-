import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';





function Index() {
    return (
        <Fragment>
            <header>
                <div className="khuon">
                    <div><img className="logo" src="https://demo.lizard.net/management/lizard.f09c662ab90cda92e98077f8c7504383.svg" alt="" /></div>
                    <div className="dangnhap">
                        <Link to='/login'>
                            <i className="fa-solid fa-user" style={{ color: '#ffffff', padding: '0 10px' }}></i>
                            LOGIN
                        </Link>


                    </div>
                </div>
            </header>
            <div className="khuon3">
                <div className="menu">
                    <div>Home</div>
                </div>
                <div className="danhmuc">
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="assets/img/magnifiying-glass.png" alt="" />
                        </div>
                        <p>CATALOGUE</p>
                        <p>Search through your data</p>

                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/management/world.dc6aa7a802f276d10f8c3460e85cbf4a.svg" alt="" />

                        </div>
                        <p>VIEWER</p>
                        <p>Explore your data on the map</p>


                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/management/world.dc6aa7a802f276d10f8c3460e85cbf4a.svg" alt="" />

                        </div>
                        <p>NEW VIEWER (BETA)</p>
                        <p>New version,will replace the current viewer</p>

                    </a>
                    <a className="nd_main" style={{ cursor: 'not-allowed', backgroundColor: 'rgba(128, 128, 128, 0.274)' }} href='# '>

                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/management/settings.f43b6ef4487eb5cd29b664fd32885b64.svg" alt="" />
                        </div>
                        <p>MANAGEMENT</p>
                        <p>Manage your data,users and alarms</p>
                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/management/code.6eb4d8a4eb54eba950dea190e472c88b.svg" alt="" />
                        </div>
                        <p>API</p>
                        <p>Query your data</p>
                    </a>
                </div>
                <div className="menu">
                    <div>Apps</div>
                </div>
                <div className="danhmuc">
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/media/lizard_apps/lizard_aYoB34X.png" alt="" />
                        </div>
                        <p>API</p>


                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/media/lizard_apps/Catalog_icon_dB7Vxcr_ARdpXQv.png" alt="" />

                        </div>
                        <p>CATALOGUS</p>



                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/media/lizard_apps/Portal_Icon_VTic1XY.png" alt="" />

                        </div>
                        <p>DIGITALE DELTA</p>


                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/media/lizard_apps/Templates_Icon_KpQQsya.png" alt="" />
                        </div>
                        <p>HANDLEIDING</p>

                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="assets/img/Atlas_Icon_ieGCJcq.png" alt="" />
                        </div>
                        <p>KLIMAATATLAS</p>

                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/media/lizard_apps/management_icon_ZWSyLNL.png" alt="" />
                        </div>
                        <p>LIZARD IMPORT</p>


                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/media/lizard_apps/management_icon_H940VUk.png" alt="" />

                        </div>
                        <p>MANAGEMENT</p>



                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/media/lizard_apps/external_icon_yXbVabY.png" alt="" />
                        </div>
                        <p>REGENRADAR</p>


                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/media/lizard_apps/Dashboard_Icon_Vjc6Ajo.png" alt="" />

                        </div>
                        <p>REGENRAPPOTAGE</p>



                    </a>
                </div>
                <div className="menu">
                    <div>Links</div>
                </div>
                <div className="danhmuc">
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/management/document2.3a00ea6ada79265cf9921f5ff8bc1172.svg" alt="" />
                        </div>
                        <p>DOCUMENTATION</p>
                        <p>Read the docs</p>


                    </a>
                    <a className="nd_main" href='# '>
                        <hr />
                        <div className="app">
                            <img src="https://demo.lizard.net/management/support.73eb61320dd194e39d951f160b51ecbc.svg" alt="" />

                        </div>
                        <p>SUPPORT</p>
                        <p>Need help?</p>


                    </a>

                </div>
            </div>


        </Fragment>
    )
}
export default Index;   