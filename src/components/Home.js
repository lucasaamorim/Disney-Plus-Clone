import React, { useEffect } from "react";
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import styled from "styled-components"
import db from '../firebase'
import { useDispatch } from "react-redux"
import { setMovies } from "../features/movie/movieSlice"

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection('movies').onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data()}
      })
      dispatch(setMovies(tempMovies));
    })
  }, [])
  
  return (
  <div>
    <Container >
        <ImgSlider/>
        <Viewers/>
        <Movies/>
    </Container>
  </div>
  );
};

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
`