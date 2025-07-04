import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

const iconBgStyle = {
  width: 120,
  height: 120,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #3a3d7c 40%, #2b5876 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 24px 0 rgba(58, 61, 124, 0.3)',
  marginBottom: 16,
  marginTop: 8,
  animation: 'floatIcon 2.5s ease-in-out infinite',
};

const iconImgStyle = {
  width: 80,
  height: 80,
  filter: 'drop-shadow(0 2px 8px rgba(58, 61, 124, 0.2))',
};

const keyframes = `
@keyframes floatIcon {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-10px) scale(1.08); }
  100% { transform: translateY(0) scale(1); }
}
`;

export default function ShowInfo({info}) {
  // OpenWeatherMap icon URL
  const iconUrl = info.icon
    ? `https://openweathermap.org/img/wn/${info.icon}@4x.png`
    : null;

  const handleMoreDetails = () => {
    if (info.name) {
      const url = `https://www.google.com/search?q=weather+${encodeURIComponent(info.name)}`;
      window.open(url, '_blank');
    }
  };

  return (
    <>
      <style>{keyframes}</style>
      <Card variant="outlined" sx={{ 
        background: 'rgba(15, 32, 39, 0.92)', 
        borderRadius: 8, 
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)', 
        mt: 2,
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(255,255,255,0.10)',
        transition: 'all 0.3s ease',
        animation: 'fadeIn 0.7s',
        maxWidth: 420,
        width: '100%',
        mx: 'auto',
      }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
          {iconUrl && (
            <div style={iconBgStyle}>
              <img src={iconUrl} alt={info.description} style={iconImgStyle} />
            </div>
          )}
          <Typography variant="h4" sx={{ color: '#f3f6fa', fontWeight: 900, mb: 1, letterSpacing: 1, textShadow: '0 2px 8px #3a3d7c55' }}>
            {info.name}
          </Typography>
          <Typography variant="h2" sx={{ color: '#3a3d7c', fontWeight: 800, mb: 1, textShadow: '0 2px 8px #3a3d7c55' }}>
            {info.Temp}&#xb0;C
          </Typography>
          <Typography sx={{ color: '#2b5876', fontSize: 22, mb: 2, fontWeight: 600, textShadow: '0 1px 4px #2b587655' }}>
            {info.description && info.description.charAt(0).toUpperCase() + info.description.slice(1)}
          </Typography>
          <Divider sx={{ width: '80%', my: 2, backgroundColor: 'rgba(255,255,255,0.12)' }} />
          <Typography sx={{ color: '#f3f6fa', fontSize: 17, mb: 0.5 }}>
            <b>Humidity:</b> {info.humidity}%
          </Typography>
          <Typography sx={{ color: '#f3f6fa', fontSize: 17, mb: 0.5 }}>
            <b>Min Temp:</b> {info.minTemp}&#xb0;C | <b>Max Temp:</b> {info.maxTemp}&#xb0;C
          </Typography>
          <Typography sx={{ color: '#f3f6fa', fontSize: 17 }}>
            <b>Feels Like:</b> {info.feelsLike}&#xb0;C
          </Typography>
          <Button 
            variant="contained" 
            sx={{
              mt: 3,
              background: 'linear-gradient(45deg, #3a3d7c, #2b5876)',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: '8px',
              px: 4,
              py: 1.5,
              boxShadow: '0 4px 15px rgba(58, 61, 124, 0.3)',
              letterSpacing: 1,
              '&:hover': {
                background: 'linear-gradient(45deg, #2b5876, #0f2027)',
                boxShadow: '0 6px 20px rgba(43, 88, 118, 0.5)',
              },
            }}
            onClick={handleMoreDetails}
          >
            More Details
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
