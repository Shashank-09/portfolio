import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn> 
        <LinkTitle>Call</LinkTitle>
            <LinkItem href="tel:111-111-1111">
            111-111-1111  
            </LinkItem>
        </LinkColumn>
        <LinkColumn> 
        <LinkTitle>Email</LinkTitle>
            <LinkItem href="mailto:contact@gmail.com">
            mailto:contact@gmail.com
            </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>

          </Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
