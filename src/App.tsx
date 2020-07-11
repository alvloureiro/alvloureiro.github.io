import React from 'react';
import {
  ButtonBase,
  Card,
  CardActions,
  CardContent,
  Grid,
  makeStyles,
  Typography,
  CardHeader,
  Avatar,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import github from './github.png';
import linkedin from './linkedin2.png';

const useStyles = makeStyles({
  card: {
    width: 800,
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 16,
  },
  avatar: {
    backgroundColor: red[500],
  },
  image: {
    marginRight: 10,
    width: 32,
    height: 30,
  },
});

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
      spacing={0}
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={{ minHeight: '100vh' }}
    >
      <Grid item>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="abreviation" className={classes.avatar}>
                A
              </Avatar>
            }
            title="André Loureiro"
            subheader="Software Engineer"
            style={{ minHeight: 100 }}
          />

          <CardContent style={{ textAlign: 'start' }}>
            <Typography color="textSecondary" gutterBottom variant="body2" component="p">
              Lorem ipsum proin nunc pellentesque eu viverra diam duis sagittis phasellus, per non
              taciti egestas ipsum quis cursus sapien felis fames, enim pharetra iaculis consectetur
              luctus dolor bibendum pulvinar in. vehicula habitasse rutrum luctus eros ultrices
              rhoncus congue quis diam, nec dolor himenaeos nunc consectetur ad lectus sem diam
              orci, taciti vulputate nostra hendrerit egestas justo mauris non. magna ut justo diam
              ipsum mi auctor massa velit consectetur habitasse dictumst, litora malesuada orci
              interdum fames tristique sagittis tortor sit vulputate, est mauris gravida potenti
              auctor nibh suscipit vestibulum massa odio.
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
                <img alt="github" className={classes.image} src={action.img} />
              </ButtonBase>
            ))}
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default App;
