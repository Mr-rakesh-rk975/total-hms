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

          // You can handle the response from the server here if needed
        } else {
          console.error('File upload failed.');
          // Handle any errors from the server
        }
      } catch (error) {
        console.error('Network error:', error);
        // Handle network errors
      }
    } else {
      // Handle case when no file is selected
    }
  };

  return (
    <div className="formOuter">
        {/* Form starts here */}
      <form onSubmit={handleSubmit}>
        <div className='form-inputs'>
          <label htmlFor="category">
            <div className='emptyImg-section'>
              {/* file upload section start here  */}
              {selectedFile && (
                <div>
                  <img src={URL.createObjectURL(selectedFile)} alt="posts" className='post-img' />
                  <p>Selected file: {selectedFile.name}</p>
                </div>
              )}
              {/* file upload section end */}
              {/* Upload button */}
            <input type="file" onChange={handleFileUpload} />
            </div>
          </label>

          {/* input sections */}
          <div className="inputWrapper">
          <label className='category-input' htmlFor="Kategori">
            <span>Kategori</span>:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)} // Update category state
            />
          </label>

          <label htmlFor="Kategori-Informasjon">
            <span>Kategori Informasjon</span>:
            <textarea
              id="info-txt"
              rows="1"
              cols="5"
              value={information}
              onChange={(e) => setInformation(e.target.value)} // Update information state
            ></textarea>
          </label>
          </div>
          <label htmlFor="submit">
            <button type="submit" className='submit-Posts'>Submit</button>
          </label>
        </div>
      </form>
      {/* Form end here */}
    </div>
  );
}

export default Uploadform;
