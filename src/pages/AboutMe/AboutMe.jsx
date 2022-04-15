import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AboutMe() {
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      <Card sx={{
        maxWidth: 345,
        margin: 3,
        background: 'whitesmoke'
      }}>
        <CardMedia
          component="img"
          image="https://hhcdn.ru/photo/646438361.png?t=1650102737&h=RCvLIWaZyyK7Mk-zNWni6g"
          alt="Rushan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rushan Bilyaletdinov
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: Alive <br />
            Gender: Male <br />
            Species: Human
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body1">
            Three facts about me: <br />
            1. I've never seen "Rick and Morty" <br />
            2. I want to learn TypeScript soon<br />
            3. I like riding bicycle
          </Typography>
        </CardContent>
      </Card>
    </Box >
  );
}
