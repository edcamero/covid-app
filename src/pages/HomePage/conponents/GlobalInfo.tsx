import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';
import { Global } from '../resource/HomeResource';
interface GlobalInfoProps {
  info: Global | undefined;
}
const GlobalInfo: React.FC<GlobalInfoProps> = ({ info }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem alignItems='flex-start'>
        <ListItemText
          primary='Date'
          secondary={format(new Date(info?.Date??0), 'dd/MM/yyyy')}
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemText primary='New Confirmed' secondary={info?.NewConfirmed} />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemText
          primary='Total Confirmed'
          secondary={info?.TotalConfirmed}
        />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemText primary='New Deaths' secondary={info?.NewDeaths} />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemText primary='Total Deaths' secondary={info?.TotalDeaths} />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemText primary='New Recovered' secondary={info?.NewRecovered} />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem alignItems='flex-start'>
        <ListItemText
          primary='Total Recovered'
          secondary={info?.TotalRecovered}
        />
      </ListItem>
    </List>
  );
};

export default GlobalInfo;
