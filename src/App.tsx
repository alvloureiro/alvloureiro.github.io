import React from 'react';
import {
  Avatar,
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from '@material-ui/core';
import github from './github.png';
import linkedin from './linkedin2.png';
import {useStyles} from "./styles";

function App() {
  const classes = useStyles();
  const actions = [
    {
      label: 'GitHub',
      img: github,
      width: '50%',
      url: 'https://github.com/alvloureiro',
    },
    {
      label: 'LinkedIn',
      img: linkedin,
      width: '50%',
      url: 'https://www.linkedin.com/in/alvloureiro/',
    },
  ];
  return (
    <Grid
      container
      spacing={0}
      justify='center'
      alignItems='center'
      direction='column'
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label='abreviation' className={classes.avatar}>
                A
              </Avatar>
            }
            title='André Loureiro'
            subheader='Software Engineer'
            style={{ minHeight: 100 }}
          />

          <CardContent style={{ textAlign: 'start' }}>
            <Typography color='textSecondary' gutterBottom variant='body2' component='p'>
              Currently work as a technical leader focusing on web applications that use React,
              Nodejs,Express and Mongodb, besides my main works as software developer are related to
              front-end focused in the cloud, multimedia solutions for embedded applications, mobile
              appli-cations using Qt framework, browser development with WebKit, Application
              solutions forAndroid.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            {actions.map((action) => (
              <ButtonBase
                focusRipple
                key={action.label}
                style={{
                  width: action.width,
                }}
                onClick={() => window.open(action.url)}
              >
                <img alt='github' className={classes.image} src={action.img} />
              </ButtonBase>
            ))}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
