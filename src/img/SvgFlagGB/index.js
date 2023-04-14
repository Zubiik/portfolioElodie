import * as React from "react";

const SvgGBFlag = (props) => (
  <svg
    width={21}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    <g clipPath="url(#a)">
      <path d="M0 0h20.5v15.375H0V0Z" fill="#012169" />
      <path
        // eslint-disable-next-line max-len
        d="m2.402 0 7.816 5.798L18.002 0H20.5v1.986L12.812 7.72 20.5 13.42v1.954h-2.563L10.25 9.641l-7.655 5.734H0v-1.922l7.655-5.701L0 2.05V0h2.402Z"
        fill="#fff"
      />
      <path
        // eslint-disable-next-line max-len
        d="m13.581 9 6.919 5.094v1.281l-8.68-6.374h1.761Zm-5.893.641.192 1.121-6.15 4.613H0l7.688-5.734ZM20.5 0v.096l-7.976 6.022.064-1.41L18.898 0H20.5ZM0 0l7.655 5.638H5.734L0 1.345V0Z"
        fill="#C8102E"
      />
      <path
        d="M7.72 0v15.375h5.125V0H7.72ZM0 5.125v5.125h20.5V5.125H0Z"
        fill="#fff"
      />
      <path
        d="M0 6.182v3.075h20.5V6.182H0ZM8.745 0v15.375h3.075V0H8.744Z"
        fill="#C8102E"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20.5v15.375H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgGBFlag;
