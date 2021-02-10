import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, fetchTours] = useState([]);
  const deletehandler = (id) => {
    let Filteredtours = tours.filter(tour => tour.id !== id);
    fetchTours(Filteredtours)
  }
  // const Filteredtours = () => {}
  const fetchToursHandler = async() => {
    setLoading(true);
    try {
      const response = await fetch(url)
      const data = await response.json();
      fetchTours(data)
      setLoading(false);
    }
    catch(err) {
      setLoading(false);
      console.log(err);
    }
  }
  useEffect(() => {
    fetchToursHandler();
  },[])
  if(loading) {
    return  <main>
       <Loading/>
    </main>
  }
  return <main>
    <Tours tours={tours} deletehandler={deletehandler} fetchToursHandler={fetchToursHandler}/>
  </main>
}

export default App