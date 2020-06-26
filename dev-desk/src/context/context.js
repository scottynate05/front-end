import React, { useState, useEffect, createContext } from 'react';

export const Context = createContext({});

// export provider
export const Provider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  // const [plants, setPlants] = useState(plantData);
  // console.log(plants);
  // console.log(isAuthorized);
  // const testAction = () => {
  //   console.log("test works");
  // };
  // const login = () => {
  //   setIsAuthorized(!isAuthorized);
  // };
  // const addPlants = (newPlant) => {
  //   setPlants([...plants, newPlant]);
  // };
  // const removePlants = (plantId) => {
  //   setPlants(plants.filter((p) => p.id !== plantId));
  // };
  // const updatePlant = (plantId) => {};
  const contextData = {
    // testAction,
    // login,
    // isAuthorized,
    // plants,
    // removePlants,
    // addPlants,
  };
  return <Context.Provider value={contextData}>{children}</Context.Provider>;
};
export const { Consumer } = Context;