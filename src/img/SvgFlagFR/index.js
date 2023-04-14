import * as React from 'react';

const SvgFlagFR = (props) => (
  <svg
    width={21}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd">
      <path d="M0 0h20.5v15.375H0V0Z" fill="#fff" />
      <path d="M0 0h6.832v15.375H0V0Z" fill="#002654" />
      <path d="M13.668 0H20.5v15.375h-6.832V0Z" fill="#CE1126" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20.5v15.375H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgFlagFR;
