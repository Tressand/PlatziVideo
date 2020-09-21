/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import useInitialState from '../hooks/useInitialState';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Categories from '../components/Categories';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {

  const initialState = useInitialState(API);

  return (
    <div>
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </div>
  );
};

export default Home;
