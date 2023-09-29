import React, { useState, useEffect } from 'react';

const ImageCard = ({ id }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setImageData(data);
      })
      .catch((error) => {
        console.error('Error fetching image data:', error);
      });
  }, [id]);

  return (
    <div className="card">
      {imageData && (
        <>
          <img src={imageData.url} className="card-img-top" alt={imageData.title} />
          <div className="card-body">
            <h5 className="card-title">{imageData.title}</h5>
            <p className="card-text">ID: {imageData.id}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCard;
