import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Container, Box } from '@mui/material';
import SearchHistory from './components/SearchHistory';
import Map from './components/Map';

const App = () => {
  const [form] = useState({
    name: "",
    address: "",
    latitude: null,
    longitude: null,
    radius: 400,
  });
  const [latitude, setLatitude] = useState(4.2105);
  const [longitude, setLongitude] = useState(101.9758);
  const [address, setAddress] = useState("");

  return (
    <Provider store={store}>
      <Container>
        <Box sx={{ my: 4 }}>
          <Map address={address} setAddress={setAddress} radius={form.radius} latitude={latitude} setLatitude={setLatitude} longitude={longitude} setLongitude={setLongitude}/>
          <SearchHistory />
        </Box>
      </Container>
    </Provider>
  );
};

export default App;
