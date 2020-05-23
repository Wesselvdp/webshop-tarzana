import React, { FC } from "react";
import styled from "styled-components";

// Components
import Section from "./Section";
import Button from "@components/ui/Button";
type T = any;

const Mast: FC<T> = () => {
  return (
    <Section>
      <Container>
        <video id="videoBG" poster="poster.JPG" autoPlay muted loop>
          <source src="/video2.mp4" type="video/mp4" />
        </video>
        <div className="content">
          <h1>Tarzana essential collection</h1>
          <div>
            <Button buttonStyle="outlined">Discover</Button>
            <Button buttonStyle="solid" color="primary">
              Discover
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

const Title = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

const Container = styled.div`
  background: green;
  position: relative;
  padding-top: 60%;
  overflow: hidden;

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

    h1 {
      margin-bottom: auto;
      margin-top: auto;
      font-size: 40px;
    }
  }

  #videoBG {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    max-height: 100%;
  }
  @media (min-aspect-ratio: 16/9) {
    #videoBG {
      width: 100%;
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
