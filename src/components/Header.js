import React, { useEffect } from 'react'
import styled from 'styled-components'
import { selectUserName, selectUserPhoto, setUserLogin, setSignOut } from '../features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { auth, provider } from '../firebase'
import { useHistory, Link } from 'react-router-dom'

const Header = () => {
    
    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() =>{
        auth.onAuthStateChanged(async (user) => {
            if (user){
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }))
                history.push("/")
            }
        })
    },[])
    
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push("/")
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut())
            history.push("/login")
        })
    }

    return (
        <Nav>
            <Link to="/">
            <Logo src="/images/logo.svg"/>
            </Link>

                {!userName ?
                <LoginContainer>
                <Login onClick={signIn}>
                    LOGIN
                </Login>
                </LoginContainer> :
                <>
                    <NavMenu>
                        <a>
                            <img src="/images/home-icon.svg" />
                            <span>HOME</span>
                        </a>
                        <a>
                            <img src="/images/search-icon.svg" />
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <img src="/images/watchlist-icon.svg" />
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <img src="/images/original-icon.svg" />
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src="/images/movie-icon.svg" />
                            <span>MOVIES</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg" />
                            <span>SERIES</span>
                        </a>

                </NavMenu>
                <UserImg src={userPhoto} onClick={signOut}/>
            </>
                }
            </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
    padding: 0 15px;
`

const NavMenu = styled.div`
 display: flex;
 flex: 1;
 margin-left: 20px;
 align-items: center; 
 a {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: white;
    text-decoration: none;
    
    img {
        height: 20px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after {
            content:"";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }

    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
 }
`

const UserImg = styled.img`
    margin-right: 15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    margin-right: 40px;
    border-radius: 4px;
    letter-spacing: 5px;
    background: rgba(0, 0, 0, 0.6);
    transition: all 250ms ease 0s;
    cursor: pointer;

    &:hover {
        background: #f9f9f9;
        color: rgba(0, 0, 0, 0.6);
        border-color: transparent;
    }
`

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`