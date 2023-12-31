import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OtpInput from 'react-otp-input';

const defaultTheme = createTheme();

export default function VerifyOtp() {
    const [otp, setOtp] = React.useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Enter your OTP here
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span> </span>}
      renderInput={(props) => <input {...props} />}
      inputStyle={{
        width:"50px",
      height: "65px",
      marginRight: "10px",
      textAlign: "center",
      display: "block",
      padding: "0.375rem 0.75rem",
      fontSize: "1rem",
      fontWeight: "400",
      lineHeight:" 1.5",
      color: "#212529",
      backgroundColor: "#fff",
      border: "1px solid #ced4da",
      appearance: "none",
      borderRadius: "0.375rem",
  
      }}
    />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Verify OTP
            </Button> 
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}