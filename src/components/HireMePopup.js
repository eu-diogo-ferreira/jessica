import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';
import * as t from '../Typography';
import Colors from '../Colors';
import LN from '../images/ln.png';
import WA from '../images/whats.png';
import Close from '../images/close-popup-grey.png';
import { media } from '../MediaQueries';
import Helmet from 'react-helmet';

const HireMePopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${Colors.white};
  z-index: 1000;
  display: flex;
  flex-direction: row;
  ${props =>
    props.open === false &&
    `
    display: none;
  `}
  ${media.tablet`
    flex-direction: column;
    overflow-y: auto;
  `};
`;

const Link = styled.a`
  font-size: 18px;
  padding: 16px 50px;
`;

const ContentWrapper = styled.div`
  display: flex;
  max-width: 500px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100px;
    height: 100px;
  }
  ${media.tablet`
    display: block;
    padding: 0;
    margin: 0 30px;
  `};
`;

const Burger = styled.div`
  width: 22px;
  height: 22px;
  align-self: center;
  position: absolute;
  right: 25px;
  top: 25px;
  color: ${Colors.closeIcon};
  z-index: 2;
  color: ${props => props.scrolled && Colors.darkest};
  &:hover {
    ${props =>
      props.scrolled || props.theme === 'white'
        ? lighten(0.3, Colors.darkest)
        : darken(0.1, Colors.white)};
    cursor: pointer;
    opacity: 0.9;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;

class HireMePopup extends React.Component {
  closePopup = e => {
    this.props.handleClose(false);
  };

  render() {
    const { open } = this.props;
    const overflow = open ? 'hidden' : 'auto';
    return (
      <HireMePopupWrapper open={open}>
        <Helmet>
          <body style={{ overflow: overflow }} />
        </Helmet>
        <ContentWrapper>
          <Burger onClick={this.closePopup}>
            <img alt="Close popup" src={Close} />
          </Burger>
          <t.H3>Entre em contato</t.H3>
          <Link primary bold
            target="_blank"
            href="https://www.facebook.com/Jessica-Sweets-109537127455112">
            <img src={LN} alt="Facebook profile" />
          </Link>
          <br />
          <Link primary bold
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5519998569570&text=Ol%C3%A1,%20eu%20gostaria%20de%20fazer%20um%20pedido">
            <img src={WA} alt="Whatsapp profile" />
          </Link>
        </ContentWrapper>
      </HireMePopupWrapper>
    );
  }
}

export default HireMePopup;
