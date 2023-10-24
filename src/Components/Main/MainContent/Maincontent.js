import React, { useState, useEffect } from 'react';
import '../MainContent/Maincontent.css';
import Uploadform from '../../Form/Uploadform';

function Maincontent() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(''); // Set it to an empty string by default
  const [categories, setCategories] = useState([]); // Maintain a list of categories

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:7800/getPosts');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
          // Extract and update the categories from the fetched data
          const uniqueCategories = [...new Set(data.map(item => item.category))];
          setCategories(uniqueCategories);
        } else {
          console.error('Failed to fetch data.');
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    }
    fetchData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCategoryCreation = (category) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
      localStorage.setItem('categories', JSON.stringify([...categories, category]));
    }
  };

  const filteredCategories = categories.filter(category => category !== '' && categories.includes(category));
  const filteredPosts = posts.filter(item => !selectedCategory || item.category === selectedCategory);
  

  return (
    <div className="mainOuter">
      <div className="main-maxWidth">
        <div className="mainSection1">
          <div className="mainSection1-Inner">
            <div className="mainBtn-section">
              <ul className="btnMenu">
                {filteredCategories.length > 0 && (
                  <li>
                    <button
                      className={selectedCategory === '' ? 'active-button' : ''}
                      onClick={() => handleCategoryChange('')}
                    >
                      Alle
                    </button>
                  </li>
                )}
                {filteredCategories.map(category => (
                  <li key={category}>
                    <button
                      className={selectedCategory === category ? 'active-button' : ''}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mainPOst-section">
              {filteredPosts.map(item => (
                <div key={item._id} className="post-item">
                  <img src={`http://localhost:7800/${item.filepath}`} alt="Post" className="post-image" />
                  <div className="card-info">
                    <p>
                      <span>Category: </span> {item.category}
                    </p>
                    <h3>
                      <a href="/">{item.information}</a>
                    </h3>
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
            <Uploadform onCategoryChange={handleCategoryChange} onCategoryCreation={handleCategoryCreation} />
            <div className="Inner-inputs">
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
