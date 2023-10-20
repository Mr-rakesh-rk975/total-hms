import React, { useState, useEffect } from 'react';
import '../MainContent/Maincontent.css';
import Uploadform from '../../Form/Uploadform';

function Maincontent() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:7800/getPosts'); // get api to display data on page
                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    console.error('Failed to fetch data.');
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="mainOuter">

            <div className="main-maxWidth"> {/* Max Width Container */}
            {/* Section -1 Starts here */}
                <div className="mainSection1">
                    <div className="mainSection1-Inner">
                        {/* Button section start */}
                        <div className="mainBtn-section">
                            <ul className='btnMenu'> {/* Button menu list */}
                                <li><button >Alle</button></li>
                                <li><button>Forskrifter</button></li>
                                <li><button>Helse, miljø og sikkerhet</button></li>
                                <li><button>Internkontroll</button></li>
                                <li><button>Ledelse</button></li>
                                <li><button>Verneombud</button></li>
                            </ul>
                        </div>
                        {/* button section end */}
                        <div className="mainPOst-section">
                           {/* API deployement starts here */}
                            {posts.map((item) => (
                                <div key={item._id} className="post-item">
                                    <img src={`http://localhost:7800/${item.filepath}`} alt="Post" className="post-image" />
                                    <div className="card-info">
                                    <p><span>Category: </span> {item.category}</p>
                                    <h3><a href="/">{item.information}</a> </h3>
                                    </div>
                                </div>
                            ))}
                               {/* API deployement end here */}

                        </div>
                    </div>
                </div>  {/* Section -1 end here */}
              

                {/* Section -2 starts here */}
                <div className="mainSection2">
                    <div className="mainSection2-Inner">
                        <p>HOLD DEG OPPDATERT</p>
                        <h6>Motta flere smarte tips og informasjon om HMS og ledelse</h6>
                        <Uploadform />
                        <div className='Inner-inputs'>
                            <label htmlFor="E-postadresse">
                                <span>E-postadresse</span>
                                <input type="text" />
                            </label>
                            <label htmlFor="Antall Ansatte">
                                <span>Antall Ansatte</span>
                                <input type="text" />
                            </label>
                        </div>
                    </div>
                </div>
             {/* Section -1 end here */}

            </div>
        </div>
    );
}

export default Maincontent;
