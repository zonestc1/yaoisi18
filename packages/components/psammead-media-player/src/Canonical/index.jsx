import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  overflow: hidden;
`;

const Canonical = ({ src, title, placeholderSrc }) => (
  <StyledIframe
    src={src}
    title={title}
    allow="autoplay; fullscreen"
    gesture="media"
    allowFullScreen
    style={
      placeholderSrc ? { backgroundImage: `url(${placeholderSrc})` } : null
    }
  />
);

Canonical.propTypes = {
  src: string.isRequired,
  title: string.isRequired,
  placeholderSrc: string,
};

Canonical.defaultProps = {
  placeholderSrc: null,
};

export default Canonical;
