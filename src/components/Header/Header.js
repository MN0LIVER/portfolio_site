import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaToriiGate } from 'react-icons/fa';



import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    
    <Div1>
      <Link href="/">
      <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px", }}>
      <FaToriiGate size="2rem" />
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/MN0LIVER?tab=repositories">
        <AiFillGithub size ="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/margotoliver78732/">
        <AiFillLinkedin size ="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
