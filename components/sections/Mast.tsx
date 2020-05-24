import React, { FC } from "react";
import styled from "styled-components";

// Components
import Section from "./Section";
import Button from "@components/ui/Button";
import ButtonGroup from "@components/ui/ButtonGroup";

import VideoMask from "@components/VideoMask";
type T = any;

const Mast: FC<T> = () => {
  return (
    <Section>
      <Container>
        {/* <VideoContainer style={{ clipPath: "url(#clip)" }}> */}
        <VideoContainer>
          <video
            style={{ clipPath: "url(#clipPathVideo)" }}
            id="videoBG"
            // poster="poster.JPG"
            autoPlay
            muted
            loop
          >
            <source src="/video2.mp4" type="video/mp4" />
          </video>
        </VideoContainer>
        <div className="content">
          <h1>Tarzana essential collection</h1>
          <ButtonGroup className="centered">
            <Button buttonStyle="outlined">Discover</Button>
            <Button buttonStyle="solid" color="primary">
              Discover
            </Button>
          </ButtonGroup>
        </div>
      </Container>
      <VideoMask clipPathsUnits="objectBoundingBox" />
      <AnimalPrint className="tiger">
        {" "}
        <img src="/images/tiger.png" alt="" />
      </AnimalPrint>
    </Section>
  );
};

// const Title = styled.div`
//   color: ${({ theme }) => theme.colors.primary};
// `;

const AnimalPrint = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  &.tiger {
    img {
      /* transform: rotate(180deg); */
    }
  }
`;

const VideoContainer = styled.div`
  /*  */
`;

const Container = styled.div`
  /* background: green; */
  position: relative;
  padding-top: 70%;
  overflow: hidden;

  /* .vector {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-position: center center;
    background-size: 101% 103%;
  } */

  .content {
    position: absolute;
    left: 0;
    top: 2em;
    bottom: 2em;
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    z-index: 2;

    h1 {
      margin-bottom: auto;
      margin-top: auto;
      font-size: 80px;
    }
  }

  #videoBG {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    max-height: 100%;
    max-width: 100%;
  }
  @media (min-aspect-ratio: 16/9) {
    #videoBG {
      /* width: 100%; */
      /* height: auto; */
    }
  }
  @media (max-aspect-ratio: 16/9) {
    #videoBG {
      /* width: auto; */
      /* height: 100%; */
    }
  }
  @media (max-width: 767px) {
    #videoBG {
      /* display: none; */
    }
  }
`;

export default Mast;
