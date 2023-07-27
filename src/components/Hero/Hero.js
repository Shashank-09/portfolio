import React from 'react';

import { Section, SectionText, SectionTitle, SectionTitle2 } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
            Welcome to <br />
            My Personal Portfolio <br />
      </SectionTitle>
      <SectionTitle2>
        Shashank Tulsikar
      </SectionTitle2>
      <SectionText>
        The purpose of  is to help aspiring and established developers to take their developement skills to the next level and build awesome apps.
      </SectionText>
      <Button onclick={() => window.location = "https://google.com"}>Leran More</Button>
    </LeftSection>
  </Section>
);

export default Hero;