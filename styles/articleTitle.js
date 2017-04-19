import React from 'react';
import {
  fontFamily,
  linkColor,
  fontSize,
  lineHeight
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
  padding-bottom: 0.2em;
  margin: 0;
  margin-top: 0.4em;
  margin-before: 0.67em;
  margin-after: 0.67em;
  margin-start: 0px;
  margin-end: 0px;
  word-wrap: break-word;
  text-rendering: optimizeLegibility;
  overflow-x: auto;
  display: block;
`;
