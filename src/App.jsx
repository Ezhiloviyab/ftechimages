import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import './app.css';

function App() {
  const [imageIds, setImageIds] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/photos?_limit=15')
      .then((response) => response.json())
      .then((data) => {
        const ids = data.map((item) => item.id);
        setImageIds(ids);
      })
      .catch((error) => {
        console.error('Error fetching image data:', error);
      });
  }, []);

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="/">
            Color World
          </a>
          
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">Colors world</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">colors</a>
      </li>
     
    </ul>
    
  </div>
</nav>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Color Cards</h1>
        <div className="row">
          {imageIds.map((id) => (
            <div key={id} className="col-md-3 col-sm-12 mb-5 ">
              <ImageCard id={id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
