import React from 'react';

function searchbutton(props) {
  return (
    <button onClick={props.onClick}>
      Search
    </button>
  );
}

export default searchbutton;