import axios from 'axios';
import React, { useState } from 'react';
import GlobalInfo from './conponents/GlobalInfo';
import { Summary } from './resource/HomeResource';

const HomePage: React.FC = () => {
  const [summary, setSummary] = useState<Summary | null>(null);
  axios
    .get(`${process.env.REACT_APP_API_URL}summary`)
    .then((response) => setSummary(response.data));

  return (
    <>
     { summary?.Global &&  <GlobalInfo info={summary?.Global}/>}
     
    </>
  );
};

export default HomePage;
