import React from "react";





const countriesInTheWorld = {
  nigeria: {
    states: ["list of states"],

    
  },
  ghana: {
    states: ["list of states"],
  },
};

const countriess=Object.keys(countriesInTheWorld);

const statess=countriesInTheWorld["nigeria"];


const citites = stateData["lagos"]


const stateData = {
  lagos: {
    cities: [],
  },
  ogun: {
    cities: [],
  },
  fct: {
    cities: [],
  },
};

const countries = Object.keys(countriesInTheWorld); // all the countries in the dataset;

//in the select dropdown, the user picked nigeria as a country and you want to retrieve the corresponding states, and or cities

const { states } = countriesInTheWorld["nigeria"];

//now you want  to render  it into the select dropdown of states or cities;

const StatesDropdown = ({ states }) => {
  return (
    <select>
      {states.map((state) => {
        return<option>{state}</option>;
      })}
    </select>
  );
};

const CitiesDropdown = ({ cities }) => {
  return (
    <select>
      {cities.map((state) => {
        <option>{state}</option>;
      })}
    </select>
  );
};

//import { compose } from "redux";

//const enhance = compose(withFirstHOC, withSecondHOC, withThirdHOC);

//const MyComponent = enhance(BaseComponent);

const compose = () => {};

export const withFirstHOC = (component) => {
  const withFirst = true;

  return function (props) {
    const Component = component;

    const [extra, setExtra] = React.useState("peter maiyaki");

    if (withFirst) {
      return <Component {...props} extra={extra} setExtra={setExtra} />;
    }

    return <div>You don't have access to this</div>;
  };
};
