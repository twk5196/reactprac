import logo from './logo.svg';
import './App.css';
import F from './compononents/F';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const Verycoolh1 = styled.div`
color:blue
`;
const test = () => {
  console.log("asdfsads")
}
function App() {
  const classes = useStyles();
  return (
    <>
    <Verycoolh1>asdfsdf</Verycoolh1>
    <Button onClick={test} variant="contained">Default</Button>
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" disabled>
      Disabled
    </Button>
    <Button variant="contained" color="primary" href="#contained-buttons">
      Link
    </Button>
    </>
  );
}

export default App;
