import React from 'react';
import '../styles/_discover-item.scss';

export default function DiscoverItem({ images, name }) {
  console.log('images: ',images)
  var img = images?images[0].url :'not-found'
  console.log('img : ',img)
  return (
    <div className="discover-item animate__animated animate__fadeIn">
      <div
        className="discover-item__art"
        // style={{ backgroundImage: `url(${images[0].url})` }}
        style={{ backgroundImage: `url(${img})` }}
      />
      <p className="discover-item__title">{name}</p>
    </div>
  );
}
