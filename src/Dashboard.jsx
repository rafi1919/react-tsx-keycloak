import { Box, Typography, Button } from '@mui/material'; 

const Dashboard = () => {

  const handleLogout = () => {
    alert('i cant')
  };

  return (
    <>
      <Box
        display="block"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ mt:'10%', color: 'text.primary' }}
      >
        <Typography variant="h1">login</Typography>
        <Button onClick={handleLogout} variant="contained" color="error">
          Logout
        </Button>
      </Box>
    </>
  );
};

export default Dashboard;
