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
        borderRadius: 14, 
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)', 
        mt: 2,
        backdropFilter: 'blur(12px)',
        border: '1.5px solid rgba(255,255,255,0.10)',
        transition: 'all 0.3s ease',
        animation: 'fadeIn 0.7s',
        maxWidth: 340,
        width: '100%',
        mx: 'auto',
        p: { xs: 1, sm: 2 },
        boxSizing: 'border-box',
        minWidth: 0,
        overflowX: 'auto',
      }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 1, pb: '12px !important', gap: 1 }}>
          {iconUrl && (
            <div style={{...iconBgStyle, marginBottom: 8, marginTop: 4, width: 80, height: 80}}>
              <img src={iconUrl} alt={info.description} style={{...iconImgStyle, width: 54, height: 54}} />
            </div>
          )}
          <Typography variant="h5" sx={{ color: '#f3f6fa', fontWeight: 900, mb: 0.5, letterSpacing: 1, textShadow: '0 2px 8px #3a3d7c55', fontSize: '1.5rem' }}>
            {info.name}
          </Typography>
          <Typography variant="h3" sx={{ color: '#3a3d7c', fontWeight: 800, mb: 0.5, textShadow: '0 2px 8px #3a3d7c55', fontSize: '2.2rem' }}>
            {info.Temp}&#xb0;C
          </Typography>
          <Typography sx={{ color: '#2b5876', fontSize: 16, mb: 1, fontWeight: 600, textShadow: '0 1px 4px #2b587655' }}>
            {info.description && info.description.charAt(0).toUpperCase() + info.description.slice(1)}
          </Typography>
          <Divider sx={{ width: '90%', my: 1, backgroundColor: 'rgba(255,255,255,0.12)' }} />
          <Typography sx={{ color: '#f3f6fa', fontSize: 15, mb: 0.5 }}>
            <b>Humidity:</b> {info.humidity}%
          </Typography>
          <Typography sx={{ color: '#f3f6fa', fontSize: 15, mb: 0.5 }}>
            <b>Min Temp:</b> {info.minTemp}&#xb0;C | <b>Max Temp:</b> {info.maxTemp}&#xb0;C
          </Typography>
          <Typography sx={{ color: '#f3f6fa', fontSize: 15, mb: 1 }}>
            <b>Feels Like:</b> {info.feelsLike}&#xb0;C
          </Typography>
          <Button 
            variant="contained" 
            sx={{
              mt: 1.5,
              background: 'linear-gradient(45deg, #3a3d7c, #2b5876)',
              color: 'white',
              fontWeight: 700,
              fontSize: '1rem',
              borderRadius: '8px',
              px: 3,
              py: 1,
              boxShadow: '0 4px 15px rgba(58, 61, 124, 0.3)',
              letterSpacing: 1,
              alignSelf: 'center',
              minWidth: 0,
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
