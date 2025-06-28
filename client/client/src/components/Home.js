// src/components/Home.js
import React from 'react';
import Carousel from './Carousel';
import Search from './Search';
import PropertyList from './PropertyList';

const Home = ({ onSearch, properties }) => {
  return (
    <>
      <Carousel />
      <Search onSearch={onSearch} />
      <PropertyList properties={properties} />
    </>
  );
};

export default Home;
