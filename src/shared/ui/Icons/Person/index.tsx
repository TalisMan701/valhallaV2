import {FC, HTMLAttributes} from 'react';

interface PersonProps extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  width?: number | string;
  height?: number | string;
  stroke?: string;
  strokeWidth?: number | string;
}

export const Person: FC<PersonProps> = ({
  className = '',
  width = 20,
  height = 22,
  stroke = '#291132',
  strokeWidth = 2,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 20 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10 11C12.7614 11 15 8.76142 15 6C15 3.23858 12.7614 1 10 1C7.23858 1 5 3.23858 5 6C5 8.76142 7.23858 11 10 11Z'
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
    <path
      d='M15.0001 13H15.3521C16.0831 13.0002 16.789 13.2674 17.337 13.7513C17.885 14.2352 18.2374 14.9026 18.3281 15.628L18.7191 18.752C18.7542 19.0334 18.7291 19.3191 18.6455 19.5901C18.5618 19.8611 18.4214 20.1112 18.2337 20.3238C18.046 20.5364 17.8152 20.7066 17.5566 20.8232C17.2981 20.9398 17.0177 21.0001 16.7341 21H3.26606C2.98244 21.0001 2.70206 20.9398 2.44351 20.8232C2.18496 20.7066 1.95416 20.5364 1.76644 20.3238C1.57871 20.1112 1.43835 19.8611 1.35467 19.5901C1.27098 19.3191 1.24589 19.0334 1.28106 18.752L1.67106 15.628C1.76176 14.9022 2.11448 14.2346 2.66289 13.7506C3.21131 13.2667 3.91764 12.9997 4.64906 13H5.00006'
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
