import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProfilePage extends Component {
    render() {
        return (
            <div>
                <aside className="profile-card">
                    <header>
                        <h1>NIZAR SARIELDIN</h1>
                        <h2>FRONTEND WEB DEVELOPER</h2>
                    </header>

                    <ul className="profile-social-links">
                        <li>
                            <Link className="link" to="" target="_blank"
                                  href="https://github.com/NzrSrd">
                                <FontAwesomeIcon className="icon"
                                                 icon={['fab', 'github']}
                                                 size={"2x"}
                                                 color={"#313440"}/>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/">
                                <FontAwesomeIcon className="icon"
                                                 icon={['fab', 'linkedin']}
                                                 size={"2x"}
                                                 color={"#313440"}/>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/" target="_blank">
                                <FontAwesomeIcon className="icon"
                                                 icon={['fas', 'at']}
                                                 size={"2x"}
                                                 color={"#313440"}/>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/" target="_blank" href="https://github.com/NzrSrd">
                                <FontAwesomeIcon className="icon"
                                                 icon={['fas', 'map-marker-alt']}
                                                 size={"2x"}
                                                 color={"#313440"}/>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/" target="_blank" href="#">
                                <p>Berlin</p>
                            </Link>
                        </li>
                    </ul>
                </aside>
            </div>
        );
    }
}

export default ProfilePage;
