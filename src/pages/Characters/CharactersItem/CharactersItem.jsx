import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CharactersItem = ({ id, name, imageURL, status, gender, species }) => {
  return (
    <Card sx={{
      maxWidth: 345,
      margin: 3,
      background: 'whitesmoke'
    }}>
      <CardMedia
        component="img"
        image={imageURL}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {status} <br />
          Gender: {gender} <br />
          Species: {species}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CharactersItem;
