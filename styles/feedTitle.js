import React from 'react';
import {
  fontFamily,
  lineHeight,
  linkColor,
  fontSize,
  em
} from './index.js';

export default `
  color: ${linkColor};
  font-size: ${fontSize - 2};
  font-weight: 300;
  font-family: ${fontFamily};
  line-height: ${lineHeight - 2};
  padding: 0;
  padding-left: 20;
  padding-right: 20;
  padding-bottom: ${em(0.2)};
  margin: 0;
  margin-top: ${(0.4)};
  margin-bottom: ${(0.4)};
`;
