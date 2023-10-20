import React from 'react';
import '../Navbar/Navbar.css';

function Navbar() {
    return (
        <>
            {/* Navbar section start */}
            <div className="NavbarOuter">
                {/* Max-Width container */}
                <div className='nav-Maxwidth'>
                    {/* nav sections starts */}
                    <div className='navSection1'>
                        <div className="logosection">
                            <div className="logo">
                                <img src={require('../../images/totalhms-logo.png')} alt="hmsLogo" />
                            </div>
                        </div>
                    </div>
                    <div className='navSection2'>
                        <div className="navMenu-section">
                            <ul className='navUl'>
                                <li>HJEM</li>
                                <li>KURS</li>
                                <li>TJENESTER</li>
                                <li>INTERNKONTROLL</li>
                                <li>OM OSS</li>
                                <li>BLOGG</li>
                                <li>
                                    <button className='navBtn'>LOGG INN</button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* nav sections end */}
                </div>
            </div>
            {/* Navbar section end */}
        </>
    )
}

export default Navbar