import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';

const useStyles = makeStyles({
  main: {
    width: '70%',
    height: '70%'
  },
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

const App = () => {
  // const classes = useStyles();

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
