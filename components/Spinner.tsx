import { FunctionComponent, SVGAttributes } from 'react';

const Spinner: FunctionComponent<SVGAttributes<SVGSVGElement>> = props => (
  <svg width={24} height={24} fill="none" {...props}>
    <path
      fill="#7D55FF"
      d="M12 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
    <path
      fill="#C4B6FF"
      d="M12 19a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
    <path
      fill="#7D55FF"
      d="M7.75 3.14a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
    <path
      fill="#C4B6FF"
      d="M16.25 17.86a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
    <path
      fill="#7D55FF"
      d="M4.64 6.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
    <path
      fill="#C4B6FF"
      d="M19.36 14.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
    <path
      fill="#7D55FF"
      d="M3.5 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
    <path
      fill="#C4B6FF"
      d="M20.5 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM4.64 14.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm14.72-8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM7.75 17.86a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8.5-14.72a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
      clipRule="evenodd"
      fillRule="evenodd"
    />
  </svg>
);

export default Spinner;
