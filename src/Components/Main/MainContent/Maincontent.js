import React, { useState, useEffect } from 'react';
import '../MainContent/Maincontent.css';
import Uploadform from '../../Form/Uploadform';

function Maincontent() {
    const [posts, setPosts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(''); // State to store selected category

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:7800/getPosts');
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

    const handleCategoryChange = (i) => {
        setSelectedCategory(i);
    };

    return (
        <div className="mainOuter">
            <div className="main-maxWidth">
                <div className="mainSection1">
                    <div className="mainSection1-Inner">
                        <div className="mainBtn-section">
                            <ul className='btnMenu'>
                                <li><button onClick={() => handleCategoryChange('')}>Alle</button></li>
                                <li><button onClick={() => handleCategoryChange('Forskrifter')}>Forskrifter</button></li>
                                <li><button onClick={() => handleCategoryChange('Helse, miljø og sikkerhet')}>Helse, miljø og sikkerhet</button></li>
                                <li><button onClick={() => handleCategoryChange('Internkontroll')}>Internkontroll</button></li>
                                <li><button onClick={() => handleCategoryChange('Ledelse')}>Ledelse</button></li>
                                <li><button onClick={() => handleCategoryChange('Verneombud')}>Verneombud</button></li>
                            </ul>
                        </div>
                        <div className="mainPOst-section">
                            {posts
                                .filter((item) => !selectedCategory || item.category === selectedCategory)
                                .map((item) => (
                                    <div key={item._id} className="post-item">
                                        <img src={`http://localhost:7800/${item.filepath}`} alt="Post" className="post-image" />
                                        <div className="card-info">
                                            <p><span>Category: </span> {item.category}</p>
                                            <h3><a href="/">{item.information}</a></h3>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <div className="mainSection2">
                    <div className="mainSection2-Inner">
                        <p>HOLD DEG OPPDATERT</p>
                        <h6>Motta flere smarte tips og informasjon om HMS og ledelse</h6>
                        <Uploadform onCategoryChange={handleCategoryChange} />
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
            </div>
        </div>
    );
}

export default Maincontent;
