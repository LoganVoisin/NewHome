import React, { useState, useEffect } from 'react';
import axios from 'axios';


function HomeFeed() {
  const [animals, setAnimals] = useState([]);
  const [fetchedAnimals, setFetchedAnimals] = useState(false);

  const getAllAnimals = function() {
    axios.get('/feed/api')
      .then(({ data }) => {
        setAnimals(data)
        console.log('animals state →', animals);
        console.log('data →', data);
      })
      .then(() => {
        setFetchedAnimals(true);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  useEffect(() => {
    getAllAnimals();
  }, [fetchedAnimals]);


  return (
    <>
      <h3>{ console.log(animals[0].age) }</h3>
    </>
  )
}
export default HomeFeed;