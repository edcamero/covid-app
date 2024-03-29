import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import BackDropLoadApi from '../../components/BackDropLoad/BackDropLoadApi';
import CountriesComponent from '../../components/CountriesComponent/CountriesComponent';
import GlobalInfo from './conponents/GlobalInfo';
import { Summary } from './resource/HomeResource';

const HomePage: React.FC = () => {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isLoading) {
      axios
        .get(`${process.env.REACT_APP_API_URL}summary`)
        .then((response) => setSummary(response.data)).finally(
          ()=>setIsLoading(false)
        );
  
    }
  }, [isLoading]);

  return (
    <>
      <BackDropLoadApi open={isLoading} />
      <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={10} md={2} sx={{ marginTop: '4rem' }}>
          {summary?.Global && <GlobalInfo info={summary?.Global} />}
        </Grid>
        <Grid item xs={10} md={6} sx={{ margin: '1rem' }}>
          {summary?.Countries && (
            <CountriesComponent countries={summary?.Countries} />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
