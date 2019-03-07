import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProfilePage extends Component {
    render() {
        return (
            <div className="body">
                <aside className="profile-card">
                    <header>
                        <h1>NIZAR SARIELDIN</h1>
                        <h2>FRONTEND WEB DEVELOPER</h2>
                    </header>

                    <ul className="profile-social-links">
                        <li>
                            <a className="link"
                                  href="https://github.com/NzrSrd">
                                <FontAwesomeIcon className="icon fa-2x"
                                                 icon={['fab', 'github']}
                                                 color={"#313440"}/>
                            </a>
                        </li>
                        <li>
                            <a className="link"
                               href="https://www.linkedin.com/in/nizar-sarieldin-4937bb10/">
                                <FontAwesomeIcon className="icon fa-2x"
                                                 icon={['fab', 'linkedin']}
                                                 color={"#313440"}/>
                            </a>
                        </li>
                        <li>
                            <a className="link"
                               href="mailto:nizar.sarieldin@gmail.com">
                                <FontAwesomeIcon className="icon fa-2x"
                                                 icon={['fas', 'at']}
                                                 color={"#313440"}/>
                            </a>
                        </li>
                        <li>
                            <a className="link"
                                  href="https://goo.gl/maps/Nxr9ncWz8Np">
                                <FontAwesomeIcon className="icon fa-2x"
                                                 icon={['fas', 'map-marker-alt']}
                                                 color={"#313440"}/>
                                <p>Berlin</p>
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        );
    }
}

export default ProfilePage;
