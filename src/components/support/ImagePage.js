import React from 'react';

function ImagePage(props) {
  return (
    <div>
      <img src={props.imageUrl} alt={props.imageAlt} />
    </div>
  );
}

export default ImagePage;