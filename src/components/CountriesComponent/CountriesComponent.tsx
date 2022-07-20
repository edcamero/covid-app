import React from 'react';
import { Country } from '../../pages/HomePage/resource/HomeResource';
import CountriesTableComponent from './components/CountriesTableComponent';

interface ICountriesComponentProps{
    countries: Country[];
}
const CountriesComponent: React.FC<ICountriesComponentProps>= ({countries}) => {
  return (
    <>
      <CountriesTableComponent {...{countries}}/>
    </>
  );
};

export default CountriesComponent;
