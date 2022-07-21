import axios from 'axios';
import React from 'react';
import BackDropLoadApi from '../../components/BackDropLoad/BackDropLoadApi';
import SearchCountriesComponent from './components/SearchCountriesComponent';
import TableCountryDetails from './components/tableCountryDetails/tableCountryDetails';
import { CountryDetails, CountrySearch } from './resources/Countries';

const CountriesPage: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isLoadingDetails, setIsLoadingDetails] = React.useState(false);
  const [countries, setCountries] = React.useState<CountrySearch[]>([]);
  const [countriesDetails, setCountriesDetails] = React.useState<
    CountryDetails[]
  >([]);
  const [currentCountry, setCurrentCountry] =
    React.useState<CountrySearch | null>(null);

  React.useEffect(() => {
    if (isLoading) {
      axios
        .get(`${process.env.REACT_APP_API_URL}countries`)
        .then((response) => setCountries(response.data))
        .finally(() => setIsLoading(false));
    }
  }, [isLoading]);

  React.useEffect(() => {
    setCountriesDetails([]);
    if (currentCountry !== null) {
      setIsLoadingDetails(true);

      axios
        .get(
          `${process.env.REACT_APP_API_URL}total/country/${currentCountry.Country}`
        )
        .then((response) => setCountriesDetails(response.data))
        .finally(() => setIsLoadingDetails(false));
    }
  }, [currentCountry]);

  return (
    <>
      <BackDropLoadApi open={isLoading || isLoadingDetails} />
      <SearchCountriesComponent
        {...{
          countries,
          currentCountry,
          setCurrentCountry,
          isLoading,
          setIsLoading,
        }}
      />
      <TableCountryDetails countries={countriesDetails} />
    </>
  );
};

export default CountriesPage;
