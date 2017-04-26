import React from 'react';
import {
  fontFamily,
  linkColor,
  fontSize,
  lineHeight,
  em,
} from './index.js';

export default `
  color: ${linkColor};
  font-size: ${fontSize};
  font-weight: 300;
  font-family: ${fontFamily};
  line-height: ${lineHeight};
  padding: 0;
  padding-left: 20;
  padding-right: 20;
  padding-bottom: ${em(0.2)};
  margin: 0;
  margin-top: ${em(0.4)};
`;
