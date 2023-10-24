import React, { useState, useEffect } from 'react';
import '../Form/Uploadform.css';

function Uploadform() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState('');
  const [information, setInformation] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const savedCategory = localStorage.getItem('selectedCategory');
    if (savedCategory) {
      setCategory(savedCategory);
    }
  }, []);

  useEffect(() => {
    const savedCategories = JSON.parse(localStorage.getItem('categories'));
    if (savedCategories) {
      setCategories(savedCategories);
    }
  }, []);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('category', category);
      formData.append('information', information);

      try {
        const response = await fetch('http://localhost:7800/posts', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully.');
          setSelectedFile(null);
          setInformation('');
          setCategory('');
          localStorage.setItem('selectedCategory', category);

          if (!categories.includes(category)) {
            setCategories([...categories, category]);
            localStorage.setItem('categories', JSON.stringify([...categories, category]));
            setCategory('');
          }
        } else {
          console.error('File upload failed.');
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    } else {
      console.error('No file selected.');
    }
  };

  const handleAddCategory = () => {
    if (category.trim() !== '' && !categories.includes(category)) {
      setCategories([...categories, category]);
      setCategory(category);
      localStorage.setItem('categories', JSON.stringify([...categories, category]));
      setCategory('');
    }
  };

 

  return (
    <div className="formOuter">
      <form onSubmit={handleSubmit}>
        <div className='form-inputs'>
          <div className="add-post">
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Enter a new category"
            />
            <button type="button" onClick={handleAddCategory}>
              Add Category
            </button>
          </div>

          <label htmlFor="category">
            <div className='emptyImg-section'>
              {selectedFile && (
                <div>
                  <img src={URL.createObjectURL(selectedFile)} alt="posts" className='post-img' />
                  <p>Selected file: {selectedFile.name}</p>
                </div>
              )}
              <input type="file" onChange={handleFileUpload} />
            </div>
          </label>

          <div className="inputWrapper">
            <label className='category-input' htmlFor="Kategori">
              <span>Kategori</span>:
              <div className="select-container">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a Category</option>
                  {categories.map((categoryOption) => (
                    <option key={categoryOption} value={categoryOption}>
                      {categoryOption}
                    </option>
                  ))}
                </select>
              
              </div>
            </label>
            <label htmlFor="Kategori-Informasjon">
              <span>Kategori Informasjon</span>:
              <textarea
                id="info-txt"
                rows="1"
                cols="5"
                value={information}
                onChange={(e) => setInformation(e.target.value)}
              ></textarea>
            </label>
          </div>

          <label htmlFor="submit">
            <button type="submit" className='submit-Posts'>Submit</button>
          </label>
        </div>
      </form>
    </div>
  );
}

export default Uploadform;
