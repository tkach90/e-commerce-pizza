import React from "react";
import styled from 'styled-components';
import { pizzaRed } from "../styles/colors";
import { Title } from '../styles/title';

export const NavbarStyled = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${pizzaRed}; 
    padding: 10px;
    z-index: 999;
`;

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 1px 4px #380502;
`;

const UserStatus = styled.div`
  color: white;
  font-size: 12px;
  margin-right: 30px;
`;

const LoginButton = styled.span`
  cursor: pointer;
`;

export function Navbar({login, loggedIn, logout}) {
    return <NavbarStyled>
                <Logo>
                    Sliceline <span role="img" aria-label='pizza emojy'>🍕</span>
                </Logo>
                <UserStatus>
                    {loggedIn !== "loading" ? (
                        <>
                            👤 {loggedIn ? "Logged in." : ""}
                            {loggedIn ? (
                                <LoginButton onClick={logout}> Log out </LoginButton>
                            ) : (
                                <LoginButton onClick={login}> Log in / Sign up </LoginButton>
                            )}
                        </>
                    ) : (
                        "loading..."
                    )}
                </UserStatus>
            </NavbarStyled>;
}