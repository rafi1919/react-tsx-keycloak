import keycloak from './keysetup/keycloak';
import {Box, Typography, Button} from '@mui/material'

function App() {
  const handleLogin = () => {
    keycloak
      .init({ onLoad: 'login-required' })
      .then(() => {
        window.location.href = '/dashboard';
      });
  };

  return (
      <Box display="block"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          sx={{mt:'10%'}}>
        <Typography variant='h2'>My Keycloak App</Typography>
        <Typography variant='h6'>click 2x</Typography>
        <Button onClick={handleLogin} variant="contained">Initialize Keycloak</Button>
 
   
      </Box>
  );
}

export default App;
