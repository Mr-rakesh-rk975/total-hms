import React, { useState } from 'react';
import '../Form/Uploadform.css';

function Uploadform() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState(''); // State for category input
  const [information, setInformation] = useState(''); // State for information input

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('category', category); // Use category state
      formData.append('information', information); // Use information state

      try {
        const response = await fetch('http://localhost:7800/posts', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully.');
          setSelectedFile(null);
          setCategory('');
          setInformation('');
        } else {
          console.error('File upload failed.');
        }
      } catch (error) {
        console.error('Network error:', error);
      }
    } else {
      // Handle case when no file is selected
    }
  };

  return (
    <div className="formOuter">
      <form onSubmit={handleSubmit}>
        <div className='form-inputs'>

         
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
                  onChange={(e) => {
                    setCategory(e.target.value);
                   
                  }}
                >
                  <option value="">Select a Category</option>
                  <option value="Forskrifter">Forskrifter</option>
                  <option value="Helse, miljø og sikkerhet">Helse, miljø og sikkerhet</option>
                  <option value="Internkontroll">Internkontroll</option>
                  <option value="Ledelse">Ledelse</option>
                  <option value="Verneombud">Verneombud</option>
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
