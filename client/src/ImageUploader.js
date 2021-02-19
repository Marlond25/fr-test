import { useState } from 'react';
import './ImageUploader.css';

function ImageUploader() {
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const handleUp = () => {
      window.alert(image);
  }

  const showPreview = (event) => {
      const url = URL.createObjectURL(event.target.files[0]);
      setImage(event.target.files[0]);
      setFile(url);
      console.log('Hello');
  }

  return (
      <div className="imageUploaderContainer">
          {/* Uploader */} 
          <label 
              className="imageUploader" 
              htmlFor="uploader"
          >
              Upload
              <input 
                  required
                  type="file"
                  id="uploader" 
                  name="uploader"
                  accept="image/png, image/jpeg" 
                  onChange={showPreview}
              />
          </label>
          {/* Preview Image */}
          {
              file ?                     
              <img 
                  alt="File Preview"
                  src={file}
                  className="imageUploaderPreview"
              /> 
              : ''
          }
          {/* Upload Image */}
          <button 
            onClick={handleUp}
            type="button"
            className="upload btn btn-dark"
          >
            Upload
          </button>
      </div>

  )
}

export default ImageUploader;