import React from 'react'
import "./index.css";
import styled from "styled-components"
import Header from "./components/Header";
import Home from "./components/Home"
import Detail from "./components/Detail"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

const App = () => {
  return (
    <Container className='App'>
      <Router>
        <Header/>
        
        <Switch>
          
          <Route path="/detail">
            <Detail />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </Router>
    </Container>
  )
}

export default App

const Container = styled.div`
  :before {
    background: url('/images/home-background.png') center center / cover 
    no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`