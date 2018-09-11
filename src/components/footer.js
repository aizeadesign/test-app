import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 20px;
`

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
`
const Button = styled.button`
    background: linear-gradient(104deg, #10b8a1 0%, #1670c4 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: #fff;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
    cursor: pointer;

    &:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        transform: translateY(-3px);
    }
`

const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    a {
        color: rgb(31, 175, 185);
        transition: 0.8s;
    }
    a:hover {
        color: #1670c4;
    }
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
    a {
        color: rgb(31, 175, 185);
        transition: 0.8s;
    }
    a:hover {
        color: #1670c4;
    }
`

const Footer = ({children}) => (
    <FooterGroup>
        <Text>Tweet "Prototype and build apps with React and Swift. New courses by @MengTo"</Text>
        <Button>Tweet</Button>
        <LinkGroup>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer