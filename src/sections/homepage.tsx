import React from "react";
import "./homepage.css";
import { styled } from "styled-components";

const SectionBackground = styled.div`
  background-color: rgb(30, 20, 82);
  min-height: 100vh; /* Set minimum height to 100% of viewport height */
`;

export function HomePageSection() {
  return (
    <SectionBackground>
      <div
        data-collapse="medium"
        data-animation="default"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navigation-transparent w-nav"
      >
        <div className="container w-container">
          <a
            href="/"
            aria-current="page"
            className="aller-logo w-nav-brand w--current"
            aria-label="home"
          >
            <img
              src="https://cdn.discordapp.com/attachments/1103327962981470359/1139297141144166551/image-removebg-preview_13.png"
              className="logo-white"
            />
          </a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a
              href="./homepage.tsx"
              className="nav-link-transparent w-nav-link w--current"
            >
              HOME
            </a>
            <a href="#about.tsx" className="nav-link-transparent w-nav-link">
              About
            </a>
            <a href="#what-we-do" className="nav-link-transparent w-nav-link">
              What We Do
            </a>
            <a
              href="#who-we-work-with"
              className="nav-link-transparent w-nav-link"
            >
              STYLED COMPONENTS
            </a>
            <a
              href="#leadership-team"
              className="nav-link-transparent w-nav-link"
            >
              REACT-SOCKS
            </a>
            <a href="#work-with-us" className="nav-link-transparent w-nav-link">
              INTL-UNIVERSAL
            </a>
            <a href="#contact" className="nav-link-transparent w-nav-link">
              REACT APP
            </a>
          </nav>
          <div
            className="menu-button w-nav-button"
            aria-label="menu"
            role="button"
            tabIndex={0}
            aria-controls="w-nav-overlay-1"
            aria-haspopup="menu"
            aria-expanded="false"
          >
            <div className="icon-3 w-icon-nav-menu"></div>
          </div>
        </div>
      </div>
      <div className="centered-container hero">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Bricolage+Grotesque:opsz,wght@10..48,200&family=Comfortaa:wght@500;700&family=Mochiy+Pop+P+One&family=Poppins:wght@300;400;500;600;700;800;900&family=Rajdhani&family=Roboto+Mono:wght@100&family=Ubuntu+Condensed&display=swap');
        </style>

        <h1 className="hero-heading">
          Having trouble using react? Well you've stumbled upon the right
          webpage. Here at ReactRamp we have examples on how to use certain uses
          of React
        </h1>
        <div className="hero-text">
          <strong>Thank you</strong> for looking at ReactRamp!
        </div>
        <a href="#about" className="button-2 yellow w-button">
          Learn more
        </a>
      </div>
      {/* </header> */}
    </SectionBackground>
  );
}
