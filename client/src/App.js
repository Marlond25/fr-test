import './App.css';
import ImageUploader from './ImageUploader.js';

function App() {
  const read = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://us-central1-test-c00ec.cloudfunctions.net/getItems", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <div>
      <ImageUploader />
      <button 
        onClick={read}
        type="button"
        className="btn btn-dark"
      >
        Read
      </button>
    </div>
  );
}

export default App;
