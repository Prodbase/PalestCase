import React from 'react';

import { FooterWrapper } from './FooterStyles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <h3>123 Demo Street, New York NY   |   (555) 555-5555   |   email@example.com</h3>
      <p>Feito por <a href="http://prodbase.vercel.app">ProdBase</a></p>
    </FooterWrapper>
  )
}

export default Footer;