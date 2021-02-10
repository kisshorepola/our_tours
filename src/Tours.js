import React from 'react';
import Tour from './Tour';
const Tours = ({tours, deletehandler, fetchToursHandler}) => {
  if (!tours.length) {
    return <section className="title">
      <h2>no tours left</h2>
      <button onClick={fetchToursHandler}  className="btn">refresh</button>
    </section>
  }
  return <section>
    <div className="title">
      <h3>our tours</h3>
      <div className="underline"></div>
    </div>
    {tours.map(tour=>{
      return <Tour key={tour.id} {...tour} deletehandler={deletehandler}/>
    })}
  </section>;
};

export default Tours