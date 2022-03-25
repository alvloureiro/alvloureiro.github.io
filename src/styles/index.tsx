import React from 'react';

import {
    makeStyles,
} from '@material-ui/core'
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles({
    card: {
      width: "100%",
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

  export {useStyles}
