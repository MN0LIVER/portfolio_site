import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br />
        I'm Margot Oliver
      </SectionTitle>
      <SectionText>
        I'm a Front End Developer using my love of learning and other top strengths (creativity, teamwork, problem solving and empathy) to elevate customer satisfaction.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;