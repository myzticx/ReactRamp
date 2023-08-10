import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex; /* Use flex to arrange content side by side */
  padding: 70px;
  font-size: 33px;
  background-color: #ccecff;
  font-family: Ubuntu Condensed, sans-serif;
  letter-spacing: 2px;
  color: black;
  font-weight: 400;
  line-height: 45px;
  text-transform: uppercase;
  padding-top: 100px;
  padding-bottom: 60px;
  padding-right: 100px;
  padding-left: 100px;
  font-family: Ubuntu Condensed, sans-serif;
  transition: all 0.3s;
`;

const ImageContainer = styled.div`
  flex: 1; /* Take remaining space */
  text-align: left; /* Align image to the left */
`;

const Content = styled.div`
  max-width: 800px;
  text-align: left; /* Align text to the left */
`;

const Highlight = styled.span`
  color: #007bff;
`;

const Image = styled.img`
  max-width: 100%; /* Set maximum width to 100% of its container */
  height: auto; /* Maintain aspect ratio */
  width: 800px; /* Set desired width */
`;

export function AboutUs() {
  return (
    <Section className="about-us">
      <ImageContainer>
        <Image
          src="https://cdn.discordapp.com/attachments/715575187185074197/1139345501276360745/image-removebg-preview_14.png"
          alt="About Us Image"
        />
      </ImageContainer>
      <Content className="about-content">
        <h2>About Us</h2>
        <p>
          Thank you for taking time out of your day to learn about
          <Highlight> ReactRamp</Highlight>! We are a passionate and dedicated
          team committed to helping your understanding in
          {" learning more fundamentals of "}
          <Highlight> React</Highlight>. With a strong focus on
          {
            "   node   as   you   need   to   learn   the   basics   of   it   to   master   React"
          }
          <Highlight>. As you read through you will </Highlight> see.{" "}
          <Highlight> Thank you for reading - ReactRamp</Highlight>.
        </p>
      </Content>
    </Section>
  );
}
