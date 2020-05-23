import React, { FC } from "react";
import styled from "styled-components";
type T = any;

import Section from "./Section";
import Button from "@components/ui/Button";
import ButtonGroup from "@components/ui/ButtonGroup";

const Instagram: FC<T> = () => {
  return (
    <Outer>
      <Section>
        <p>Social</p>
        <h3 className="h2">#TARZANA</h3>
        <p>
          Post your purchase with #wyldones or tag us for a chance to get
          featured
        </p>
        <ButtonGroup>
          <Button buttonStyle="outlined" href="/">
            #TARZANA
          </Button>
          <Button buttonStyle="solid" href="/">
            Shop now
          </Button>
        </ButtonGroup>
      </Section>
    </Outer>
  );
};

export default Instagram;

const Outer = styled.div`
  /* background: #eee; */
`;
