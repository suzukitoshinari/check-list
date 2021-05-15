import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    header: {
      width: '100%',
      height: '100%',
      backgroundColor: 'pink'
    },
    headText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
    }
  });

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        <div className={classes.headText}>
          dededde
        </div>
     </Typography>
    </div>
  );
}

export default Header;