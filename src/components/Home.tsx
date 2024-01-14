import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ButtonBase from "@material-ui/core/ButtonBase";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {buttonActions, content} from "../resources";
import { styles } from "../styles";
import { IconButton } from "@material-ui/core";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




const Home: React.FC = () => {

  const classes = styles();
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      
    >
      <Grid
        item
        style={{ marginBottom: 100 }}
      > 
      </Grid>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar aria-label="abreviation">AVI</Avatar>}
            title="André Loureiro"
            subheader="Software Engineer"
            style={{ minHeight: 50 }}
          />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {content}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="mailto" onClick={() => console.log("foo")}>
                <EmailIcon />
            </IconButton>
            <IconButton aria-label="github" onClick={() => window.open('https://github.com/alvloureiro')}>
                <GitHubIcon />
            </IconButton>
            <IconButton aria-label="linkedin" onClick={() => window.open('https://www.linkedin.com/in/alvloureiro/')}>
                <LinkedInIcon />
            </IconButton>
          </CardActions>
        </Card>
    </Grid>
  );
};

export default Home;
