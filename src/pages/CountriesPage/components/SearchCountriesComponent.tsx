import { Paper, IconButton, Autocomplete, TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
import { CountrySearch } from '../resources/Countries';
import SearchIcon from '@mui/icons-material/Search';
import { useSearchParams } from 'react-router-dom';

export interface ISearchCountriesComponentProps {
  countries: CountrySearch[];
  currentCountry: CountrySearch | null;
  setCurrentCountry: (value: CountrySearch | null) => void;
  elevationOff?: boolean;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const SearchCountriesComponent: React.FC<ISearchCountriesComponentProps> = (
  props
) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = React.useState(searchParams.get('country'));

  React.useEffect(() => {
    if (query !== undefined && !props.isLoading) {
      const countryCurrent = props.countries.find((x) => x.Country === query);
      if (countryCurrent !== undefined) {
        props.setCurrentCountry(countryCurrent);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, props.isLoading]);

  const OnChange = (_: ChangeEvent<any>, newValue: CountrySearch | null) => {
    props.setCurrentCountry(newValue);

    if (newValue) {
      setQuery(newValue.Country ?? '');
      setSearchParams({ country: newValue.Country ?? '' }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '3rem',
        marginButton: '50px',
        marginLeft: '2.5rem',
        marginRight: '0.5rem',
        width: '350px',
      }}
      {...(props.elevationOff
        ? { ...{ elevation: 0, variant: 'outlined' } }
        : '')}
    >
      <IconButton type='submit' sx={{ padding: '0.5rem' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
      <Autocomplete
        sx={{ width: '99%' }}
        value={props.currentCountry}
        options={props.countries}
        onChange={OnChange}
        getOptionLabel={(option) => option.Country ?? ''}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              marginLeft: 'rem1',
              flex: 'rem0.5',
              width: '99%',
            }}
            label='Search Country'
          />
        )}
      />
    </Paper>
  );
};

export default SearchCountriesComponent;
