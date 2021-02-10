import React, { useState } from 'react';

const Tour = ({id,image,info,price,name,deletehandler}) => {
  const [readmore, setReadmore] = useState(false)
  return <article className="single-tour">
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className="tour-price">${price}</h4>
      </div>
      <p>{readmore ? info : `${info.substring(0,200)}...`}
      <button onClick={()=> setReadmore(!readmore)}>{!readmore ? "read more": "show less"}</button></p>
      <button onClick= {()=>deletehandler(id)} className="delete-btn">
        not intrested
      </button>
    </footer>
  </article>;
};

export default Tour;