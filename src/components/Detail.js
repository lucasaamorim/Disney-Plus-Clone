import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { useParams } from 'react-router-dom'
import { selectMovies } from "../features/movie/movieSlice"
import { useSelector } from 'react-redux'

const Detail = () => {

    const movies = useSelector(selectMovies)
    const id = useParams();
    const current_movie = movies.find(film => film.id === id.id)

    return (
        <Container>
           <Background>
               <img src={current_movie.backgroundImg} />
           </Background>
           <ImageTitle>
               <img src={current_movie.titleImg}/>
           </ImageTitle>
           <Controls>
               <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
               </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
           </Controls>
           <SubTitle>
                {current_movie.subTitle}
               <Description>
                {current_movie.description}
               </Description>
           </SubTitle>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const ImageTitle = styled.div`
    margin-top: 40px;
    height: 20vh;
    min-height: 170px;
    width: 25vh;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249,249,249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 24px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    max-width: 700px;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249)
`